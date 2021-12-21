<template>
  <div>
    <div class="memo-list">
      <b-select v-model="category" :options="categoryList"></b-select>
      <b-table
        :items="items"
        :fields="fields"
        @row-clicked="onRowClicked"></b-table>
    </div>
  </div>
</template>

<style lang="scss">
table {
  text-align: left;
}
</style>

<script lang="ts">
import Memo from "@/entity/Memo";
import Memos from "@/entity/Memos";
import { Component, Vue } from "vue-property-decorator";
import { categoryList } from "@/data/Category";

interface FieldDefine {
  key: string;
  thStyle?: {width: string};
  sortable?: boolean;
}

@Component({})
export default class List extends Vue {

  private memos: Memos
  private category: string
  private categoryList: string[]
  private fields: FieldDefine[] = []

  constructor() {
    super()
    this.memos = new Memos
    this.categoryList = categoryList
    this.category = this.categoryList[0]
    this.fields = [
      {key : 'title', thStyle : { width : '10rem' }, sortable: true},
      {key : 'body'}
    ]
  }

  get items() {
    return this.memos.getList(this.category).map(item => {
      const ret: {[key: string]: string | number} = {id: item.id}
      this.fields.forEach(field => {
        if (!item.properties[field.key]) {
          item.properties[field.key] = ''
        }
        ret[field.key] = item.properties[field.key]
      });
      return ret
    }, this)
  }

  onRowClicked(memo: Memo) {
    this.$router.push(`/detail/${memo.id}`)
  }
}
</script>