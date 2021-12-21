<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group>
        <b-form-select v-model="memo.category" :options="categoryList" :disabled="!editable" @change="onChange"></b-form-select>
        <b-form-tags id="tags" v-model="memo.tags" no-outer-focus class="mb-2" :disabled="!editable">
          <template v-slot="{ tags, disabled, addTag, removeTag }">
            <ul v-if="tags.length > 0" class="list-inline d-inline-block mb-2">
              <li v-for="tag in tags" :key="tag" class="list-inline-item">
                <b-form-tag
                  @remove="removeTag(tag)"
                  :title="tag"
                  :disabled="disabled"
                  variant="info"
                >{{ tag }}</b-form-tag>
              </li>
            </ul>
            <b-dropdown size="sm" variant="outline-secondary" block menu-class="w-100">
            <template #button-content>
              <b-icon icon="tag-fill"></b-icon> Choose tags
            </template>
            <b-dropdown-form @submit.stop.prevent="() => {}">
              <b-form-group
                label="Search tags"
                label-for="tag-search-input"
                label-cols-md="auto"
                class="mb-0"
                label-size="sm"
                :description="searchDesc"
                :disabled="disabled"
              >
                <b-input-group>
                  <b-form-input
                    v-model="search"
                    id="tag-search-input"
                    type="search"
                    size="sm"
                    autocomplete="off"
                    class="form-control"
                  ></b-form-input>
                  <b-input-group-append>
                   <b-button @click="addToTags(addTag)" variant="primary" size="sm">add to list</b-button>
                  </b-input-group-append>
                 </b-input-group>
              </b-form-group>
            </b-dropdown-form>
            <b-dropdown-divider></b-dropdown-divider>
            <b-dropdown-item-button
              v-for="option in availableOptions"
              :key="option"
              @click="onOptionClick({ option, addTag })"
            >
              {{ option }}
            </b-dropdown-item-button>
            <b-dropdown-text v-if="availableOptions.length === 0">
              There are no tags available to select
            </b-dropdown-text>
          </b-dropdown>
          </template>
        </b-form-tags>
        <div v-for="(schema, index) in cs.schema" :key="index">
          <general-input :type="schema.type" v-model="memo.properties[schema.property]" :disabled="!editable"></general-input>
        </div>
      </b-form-group>
      <b-button type="submit" variant="primary" v-if="editable">登録</b-button>
      <b-button type="button" variant="warning" @click="changeEditable" v-if="!editable">編集</b-button>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Memo from '../entity/Memo'
import Memos from '../entity/Memos'
import Tags from '../entity/Tags'
import { CategorySchema, categoryList, categorySchema} from '@/data/Category'
import GeneralInput from '@/components/GeneralInput.vue'

@Component({
    components: {
    GeneralInput,
  }
})
export default class Detail extends Vue {

  private memo: Memo
  private memos: Memos
  private categoryList: string[]
  private tags: Tags
  private editable = false
  private cs: CategorySchema

  private search = ''
  private tagOptions: string[] = []

  constructor() {
    super()
    this.memos = new Memos()
    this.categoryList = categoryList
    this.tags = new Tags()
    this.tagOptions = this.tags.getTags()
    if (this.$route.params.id && !Number.isNaN(this.$route.params.id)) {
      this.memo = this.memos.getMemo(Number.parseInt(this.$route.params.id))
      this.editable = false;
    } else {
      this.memo = this.memos.getNewMemo()
      this.editable = true;
    }
    const cs =  categorySchema.find(schema => schema.name === this.memo.category)
    this.cs = cs? cs:categorySchema[0]
    this.cs?.schema.forEach(s => {
      if (!this.memo.properties[s.property]) {
        this.memo.properties[s.property] = ''
      }
    })
  }

  onSubmit(): void {
    if (event) {
      event.preventDefault()
    }
    this.memos.addMemo(this.memo)
    this.memo = this.memos.getNewMemo()
  }

  changeEditable(): void {
    if (event) {
      event.preventDefault()
    }
    this.editable = true
  }

  get criteria(): string {
    // Compute the search criteria
    return this.search.trim().toLowerCase()
  }

  get availableOptions(): string[] {
    const criteria = this.criteria
    // Filter out already selected options
    const options = this.tagOptions.filter(opt => this.memo.tags.indexOf(opt) === -1)
    if (criteria) {
      // Show only options that match criteria
      return options.filter(opt => opt.toLowerCase().indexOf(criteria) > -1)
    }
    // Show all options available
    return options
  }

  get searchDesc(): string {
    if (this.criteria && this.availableOptions.length === 0) {
      return 'There are no tags matching your search criteria'
    }
    return ''
  }

  onOptionClick({ option, addTag }: any) {
    addTag(option)
    this.search = ''
  }

  onChange() {
    const category = this.memo.category
    const cs = categorySchema.find(schema => {
      const ret = schema.name == category
      return ret
    })
    this.cs = cs? cs:categorySchema[1]
    this.cs?.schema.forEach(s => {
      if (!this.memo.properties[s.property]) {
        this.memo.properties[s.property] = ''
      }
    })
  }

  addToTags(addTag: Function) {
    addTag(this.search)
    this.tags.addTag(this.search)
    this.tagOptions = this.tags.getTags()
    this.search = ''
  }
}
</script>
