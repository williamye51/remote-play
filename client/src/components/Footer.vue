<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Footer extends Vue {}
</script>

<style>
.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #f5f5f5;
  color: gray;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer p {
  margin: 5%;
}
</style>
