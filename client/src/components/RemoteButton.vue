<template>
  <button class="remote-button">{{ text }}</button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    text: String,
  },
})
export default class RemoteButton extends Vue {}
</script>

<style>
.remote-button {
  background: white;
  border-radius: 50px;
  width: 100px;
  height: 100px;
}
</style>
