<template>
  <div>
    <h2>{{title}}</h2>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["title"]
};
</script>

<style scoped>
h2 {
  text-align: center;
  margin: 40px 0 15px;
  font-size: 30px;
  text-transform: uppercase;
  border-bottom: none;
  letter-spacing: 1px;
}
</style>
