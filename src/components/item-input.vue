<template>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="닉네임을 입력하세요" @keyup.enter="addItem" v-model="title" />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed:
    mapState([
      'todoList',
    ]),
})
export default class ItemInput extends Vue {
  todoList!: any[];

  title: string = '';
    addItem() {
      this.$store.commit('addItem', {
        id: this.todoList.length,
        title: this.title,
        status: 'active',
      });
    }
}
</script>