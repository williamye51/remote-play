<template>
  <h1>{{ text }}</h1>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    text: String,
  },
})
export default class Header extends Vue {}
</script>
