<template>
  <div>
    <div class="titleContainer">
      <h1>Apache Zeppelin</h1>
      <p class="desc">
        아파치 제플린은 인터랙티브한 데이터 분석을 위한 웹 기반 노트북입니다.
        <br />SQL, Scalar 등 다양한 언어로 코드를 작성하고 동료와 함께 협업할 수 있습니다.
      </p>
      <div class="buttonContainer">
        <CustomButton title="시작하기" link="/quickstart/" />
        <CustomButton title="다운로드" link="/quickstart/" />
      </div>
    </div>
    <Section title="기술">
      <div class="flex-container">
        <div class="hoverable-box">
          <img src="http://zeppelin.apache.org/assets/themes/zeppelin/img/spark_logo.jpg" />
          <div class="hoverable-desc">
            Spark, PySpark, Spark R, Spark SQL를 디펜던시 로더(dependency loader)로 지원합니다
            <br />
            <router-link to="/">사용해보기</router-link>
          </div>
        </div>
        <div class="hoverable-box">
          <img src="https://businessdataschool.com/wp-content/uploads/2019/08/sql.png" />
          <div class="hoverable-desc">
            JDBC 데이터소스와 제플린을 매끄럽게 연결해보세요. Postgresql, Mysql, MariaDB, Redshift, Apache Hive 등 다양한 데이터베이스를 지원합니다.
            <br />
            <router-link to="/">사용해보기</router-link>
          </div>
        </div>
        <div class="hoverable-box">
          <img src="http://zeppelin.apache.org/assets/themes/zeppelin/img/python-logo-generic.svg" />
          <div class="hoverable-desc">
            Matplotlib, Conda, Pandas SQL, PySpark와 함께 파이썬을 사용할 수 있습니다.
            <br />
            <router-link to="/">사용해보기</router-link>
          </div>
        </div>
      </div>
      <div class="technologies-footer">
        제플린은 20개 이상의 인터프리터를 지원합니다
        <router-link to="/">더 알아보기</router-link>
      </div>
    </Section>
    <hr class="divider" />
    <Section title="배포">
      <div class="flex-container">
        <div class="deployment-box">
          <div class="deployment-title">단일 사용자</div>
          <div>로컬 Spark, 6 빌트인 시각화, 디스플레이 시스템, 다이나믹 폼, Multiple backends가 지원됩니다.</div>
          <CustomButton title="더 알아보기" link="/quickstart/" />
        </div>
        <div class="deployment-box">
          <div class="deployment-title">다수 사용자</div>
          <div>LDAP을 통한 다수 사용자를 지원합니다. 제플린을 여러분의 Yarn 클러스터에 설정해보세요.</div>
          <CustomButton title="더 알아보기" link="/quickstart/" />
        </div>
      </div>
    </Section>
  </div>
</template>

<script>
import CustomButton from "./CustomButton.vue";
import Section from "./Section.vue";

export default {
  components: {
    CustomButton,
    Section
  }
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Patua+One";

body {
  line-height: 1.2;
}

.titleContainer {
  background-color: #447fb1;
  color: white;
  margin: -50px -1000px 0;
  padding: 60px 1000px;
}
h1 {
  font-family: "Patua One", cursive;
  font-weight: 500;
}
.desc {
  font-size: 20px;
}

.buttonContainer {
  text-align: center;
}

.flex-container {
  display: flex;
}

.hoverable-box {
  margin: 10px;
  padding: 10px;
  width: 280px;
  height: 200px;
  border: 1px solid #999;
  display: flex;
  align-items: center;
  justify-content: center;
}
.hoverable-box:hover img {
  display: none;
}
.hoverable-box:hover .hoverable-desc {
  display: block;
}
.hoverable-box img {
  width: 150px;
}
.hoverable-box .hoverable-desc {
  display: none;
  font-size: 16px;
}
.technologies-footer {
  text-align: center;
  margin: 20px 0;
  font-style: italic;
}

/* 배포 */
.deployment-box {
  margin: 10px;
  padding: 10px;
  height: 200px;
  border: 1px solid #999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.deployment-title {
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
