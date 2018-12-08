<template>
  <div>
    <div class="titleContainer">
      <h1>Apache Zeppelin</h1>
      <p class="desc">아파치 제플린은 양방향의 데이터 분석을 도와주는 웹 기반 노트북입니다.
        <br>SQL, Scalar 등 다양한 언어로 코드를 작성하고 동료와 함께 협업할 수 있습니다.
      </p>
      <div class="buttonContainer">
        <CustomButton title="시작하기" link="/quickstart/" />
        <CustomButton title="다운로드" link="/quickstart/" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from './CustomButton.vue'

export default {
  components: {
    CustomButton,
  }
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Patua+One";

.titleContainer {
  background-color: #447fb1;
  color: white;
  margin: -50px -1000px;
  padding: 60px 1000px;
}
h1 {
  font-family: 'Patua One', cursive;
  font-weight: 500;
}
.desc {
  font-size: 20px;
}

.buttonContainer {
  text-align: center;
}
</style>
