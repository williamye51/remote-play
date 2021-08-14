<template>
  <div class="remote-layout">
    <table>
      <tr>
        <td><RemoteButton text="Play" /></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import RemoteButton from "./RemoteButton.vue";

@Options({
  components: { RemoteButton },
})
export default class RemoteLayout extends Vue {}
</script>

<style>
.remote-layout table {
  width: 100%;
}
</style>
