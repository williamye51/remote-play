<template>
  <div class="remote-layout">
    <table>
      <tr>
        <td><RemoteButton size="2" icon="backward" /></td>
        <td><RemoteButton size="3" icon="play" icon2="pause" /></td>
        <td><RemoteButton size="2" icon="forward" /></td>
      </tr>
      <tr>
        <td><RemoteButton size="1" icon="volume-mute" /></td>
        <td><RemoteButton size="1" icon="volume-down" /></td>
        <td><RemoteButton size="1" icon="volume-up" /></td>
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
  border-collapse: separate;
  border-spacing: 0 5em;
  table-layout: fixed;
}
</style>
