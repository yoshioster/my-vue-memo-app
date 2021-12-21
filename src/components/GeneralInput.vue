<template>
  <div v-if="type === 'text'">
    <b-input :id=id v-model=localValue :disabled="disabled"></b-input>
  </div>
  <div v-else-if="type === 'textarea'">
    <b-textarea :id=id v-model=localValue :disabled="disabled"></b-textarea>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Emit, Vue } from 'vue-property-decorator';

@Component({

})
export default class GeneralInput extends Vue {

  @Prop() public id!: string
  @Prop() public type!: string
  @Prop() public value!: string
  @Prop() public disabled?: boolean

  @Emit()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public input(value: string) {}

  get localValue() {
    return this.value
  }
  set localValue(val) {
    this.input(val)
  }
}
</script>
