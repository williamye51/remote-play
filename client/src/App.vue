<template>
  <Header :text="headerText" />
  <RemoteLayout />
  <Footer>
    <p>
      {{ footerText }}<a :href="repoUrl">{{ repoName }}</a>
    </p>
  </Footer>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Header from "./components/Header.vue";
import RemoteLayout from "./components/RemoteLayout.vue";
import Footer from "./components/Footer.vue";

@Options({
  components: { Header, Footer, RemoteLayout },
})
export default class App extends Vue {
  repoName = "remote-play";
  repoUrl = "https://github.com/shubham1172/" + this.repoName;
  headerText = "Remote Play!";
  footerText = "Have issues/suggestions or want to contribute? Head to ";
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
