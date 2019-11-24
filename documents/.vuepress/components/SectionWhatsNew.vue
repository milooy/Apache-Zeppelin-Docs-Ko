<template>
  <div class="whats-new-section">
    <h2>
      <div>Apache Zeppelin 0.8</div>
      새로운 기능
    </h2>
    <div class="whats-new-container">
      <div class="whats-new-box">
        <h3>더 좋아진 파이썬</h3>IPython 인터프리터는 주피터 노트북과 비견되는 사용자 경험을 제공합니다. 더 자세히 알고싶다면 여기를 클릭하세요.
      </div>
      <div class="whats-new-box">
        <h3>Note improvements</h3>This release includes Note level dynamic form, note revision comparator and ability to run paragraph sequentially, instead of simultaneous paragraph execution in previous releases.
      </div>
      <div class="whats-new-box">
        <h3>Inline configuration</h3>Generic ConfInterpreter provide a way configure interpreter inside each note.
      </div>
      <div class="whats-new-box">
        <h3>Tab-key completion</h3>Press `Tab` for code completion. (previous key combination `Ctrl+.` works as well)
      </div>
      <div class="whats-new-box">
        <h3>Interpreter lifecycle</h3>Interpreter lifecycle manager automatically terminate interpreter process on idle timeout. So resources are released when they're not in use. See here for more details.
      </div>
      <div class="whats-new-box">
        <h3>Helium online registry</h3>This release includes online registry for Helium that can add custom visualization and more. learn more about it.
      </div>
    </div>
  </div>
</template>

<script>
import Section from "./Section.vue";

export default {
  components: {
    Section
  },
  props: ["title"]
};
</script>

<style scoped>
.whats-new-section {
  background: rgba(226, 233, 239, 0.4);
}
.whats-new-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.whats-new-box {
  width: 33%;
}
</style>
