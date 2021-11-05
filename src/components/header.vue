<template>
  <div>
    <h1>LostArk TodoList</h1>
    <ol class="breadcrumb">
      <li><router-link to="/">전체</router-link></li>
      <li><router-link to="/active">해야할 일</router-link></li>
      <li><router-link to="/clear">끝낸 일</router-link></li>
    </ol>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Header extends Vue {

}
</script>