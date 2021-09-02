<template>
  <div>
    <h1>Editor 组件示例</h1>
    <Demo :component="Editor1Demo" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Demo from "../Demo.vue";
import Editor1Demo from "./Editor1.vue";

export default defineComponent({
  components: { Demo },
  setup() {
    return { Editor1Demo };
  },
});
</script>
