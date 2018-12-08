<template>
  <router-link :to="link"><button>{{title}}</button></router-link>
</template>

<script>
export default {
  props: ["title", "link"],
  created() {
    console.log(this.title, this.link)
  }
};
</script>

<style scoped>
button {
  background: #0099cc;
  color: #fff;
  border-color: #0086b3;
  padding: 11px 29px;
  min-width: 160px;
  /* margin: 5px 25px 5px 25px; */
  font-size: 15px;
  border-radius: 6px;
  font-weight: bold;
  margin: 15px;
}
</style>
