<template>
  <div>
    <div class="memo-list">
      <b-table :items="items" :fields="fields">

      </b-table>
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

@Component({})
export default class List extends Vue { 

  private memos: Memos
  private items: Memo[]
  private fields = [
    {key : 'title', thStyle : { width : '10rem' }, sortable: true},
    {key : 'body'}]

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