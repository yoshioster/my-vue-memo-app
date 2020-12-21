<template>
  <div>
    <h1>list page</h1>
    <div class="memo-list">
      {{msg}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class List extends Vue { 

  data() {
    return {msg: 'this is list'}
  }
}
</script>