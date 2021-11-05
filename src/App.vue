<template>
  <div id="app">
    <head-menu></head-menu>
    <item-input></item-input>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import headMenu from '@/components/header.vue';
import itemInput from '@/components/item-input.vue';

@Component({
  components: {
    headMenu,
    itemInput,
  },
})

export default class App extends Vue {

}
</script>

<style>
  #app {
    padding: 100px;
  }
</style>
