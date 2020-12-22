<template>
  <div>
    <div class="memo-list">
      <b-table :items="items" :fields="fields">

      </b-table>
    </div>
  </div>
</template>

<script lang="ts">
import Memo from "@/entity/Memo";
import Memos from "@/entity/Memos";
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class List extends Vue { 

  private memos: Memos
  private items: Memo[]
  private fields = ['title', 'body']

  constructor() {
    super()
    this.memos = new Memos
    this.items = this.memos.getList()
  }

  data() {
    return {msg: 'this is list'}
  }
}
</script>