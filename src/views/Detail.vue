<template>
  <div>
    <b-form @submit="onSubmit">
      <b-form-group>
        <b-form-input
          id="title"
          v-model="memo.title"
          placeholder="title"
          :disabled="!editable"
          required></b-form-input>
        <b-form-textarea
          id="body"
          v-model="memo.body"
          :disabled="!editable"
          placeholder="body"></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary" v-if="editable">登録</b-button>
      <b-button type="button" variant="warning" @click="changeEditable" v-if="!editable">編集</b-button>
    </b-form>
    {{form}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"
import Memo from '../entity/Memo'
import Memos from '../entity/Memos'

@Component({})
export default class Detail extends Vue {

  private memo: Memo
  private memos: Memos
  private editable = false

  constructor() {
    super()
    this.memos = new Memos
    if (this.$route.params.id && !Number.isNaN(this.$route.params.id)) {
      this.memo = this.memos.getMemo(Number.parseInt(this.$route.params.id))
      this.editable = false;
    } else {
      this.memo = this.memos.getNewMemo()
      this.editable = true;
    }
  }

  data() {
    return {
      form: {
        title: '',
        body: ''
      },
    }
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
}
</script>
