---
title: 설치하기
---

# 설치하기
[원문 보기](http://zeppelin.apache.org/docs/0.8.0/quickstart/install.html)

아파치 제플린에 오신 것을 환영합니다! 이 페이지에서는 제플린을 처음으로 시작하기 위한 가이드를 안내합니다.

## 설치 조건
아파치 제플린은 공식적으로 다음과 같은 환경에서 제공됩니다.

| 이름        | 값           |
| ------------- |:-------------:|
| Oracle JDK      | 1.7 <br>(`JAVA_HOME` 세팅 필요)  |
| 운영체제      | Mac OSX<br>Ubuntu 14.X<br>CentOS 6.X<br>Windows 7 Pro SP1 |

### 바이너리 패키지 다운받기
[다운로드 페이지](http://zeppelin.apache.org/download.html)에서 두 개의 바이너리 패키지를 확인할 수 있습니다. 패키지 파일에 포함된 인터프리터의 종류를 빼고는 두 패키지가 동일합니다.

- **All interpreter package**: 원하는 폴더에 압축을 풀어주세요.
- **net-install interpreter package**: 압축을 푼 후 [추가적으로 인터프리터를 설치](http://zeppelin.apache.org/docs/0.8.0/usage/interpreter/installation.html)해주세요. 어떤 인터프리터를 설치해야할지 확실하지 않다면, `./bin/install-interpreter.sh --all` 명령어로 모든 인터프리터를 설치하세요.