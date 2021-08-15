<template>
  <button class="remote-button" :class="getClass()">
    <font-awesome-icon :icon="icon" />
    <span v-if="icon2 != ''"> | </span>
    <font-awesome-icon v-if="icon2 != ''" :icon="icon2" />
  </button>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    icon: String,
    icon2: {
      type: String,
      default: "",
    },
    size: Number,
  },
})
export default class RemoteButton extends Vue {
  size!: number;

  public getClass(): { small: boolean; large: boolean } {
    return { small: this.size == 1, large: this.size == 3 };
  }
}
</script>

<style>
.remote-button {
  background: white;
  border-radius: 1000px;
  width: 100%;
  height: 60px;
  display: block;
}
.remote-button.small {
  height: 40px;
}
.remote-button.large {
  height: 80px;
}
</style>
