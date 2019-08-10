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

### 소스코드로부터 제플린 빌드하기
바이너리 패키지가 아닌 소스로부터 제플린을 빌드하고 싶다면 [How to Build](http://zeppelin.apache.org/docs/0.8.0/setup/basics/how_to_build.html)페이지의 안내를 따라합니다. 

## 아파치 제플린 시작하기
#### 커맨드라인에서 아파치 제플린 열기

유닉스와 같은 플랫폼에서는 다음 명령어를 입력합니다
```sh
bin/zeppelin-daemon.sh start
```

윈도우 사용자라면 다음 명령어를 입력해주세요
```sh
bin\zeppelin.cmd
```

#### 제플린 끄기
```sh
bin/zeppelin-daemon.sh stop
```

## 서비스 매니저를 통해 제플린 열기
> 참고: Ubuntu 운영체제를 기준으로 기술되어있습니다.

아파치 제플린은 *upstart*와 같은 서비스 매니저를 통해 자동으로 실행될 수 있습니다(init script를 사용해서요).

다음 예제는 `/etc/init/zeppelin.conf`라는 파일명으로 저장된 upstart 스크립트입니다. 이를 통해 제플린 서비스를 명령어로 관리할 수 있습니다.
```sh
sudo service zeppelin start  
sudo service zeppelin stop  
sudo service zeppelin restart
```

다른 서비스 매니저라도 `zeppelin-daemon.sh`스크립트에 넘어온 `upstart`인자를 통해 비슷한 방식으로 사용할 수 있습니다.

```sh
bin/zeppelin-daemon.sh upstart
```

**zeppelin.conf**
```sh
description "zeppelin"

start on (local-filesystems and net-device-up IFACE!=lo)
stop on shutdown

# Respawn the process on unexpected termination
respawn

# respawn the job up to 7 times within a 5 second period.
# If the job exceeds these values, it will be stopped and marked as failed.
respawn limit 7 5

# zeppelin was installed in /usr/share/zeppelin in this example
chdir /usr/share/zeppelin
exec bin/zeppwelin-daemon.sh upstart
```

## 다음으로는...
성공적으로 아파치 제플린을 설치하신것을 축하드립니다! 여러분에게 유용할 만한 몇 가지 단계들을 리스트로 만들었습니다.

#### 아파치 제플린이 처음이시라면...
* 상세한 개요가 필요하시다면, [Zeppelin UI 살펴보기]()를 보세요.
* 그리고 제플린에서[튜토리얼 노트북]()을 돌려보세요.
* 그리고 포트 넘버 등의 [설정]()을 바꿔보세요.

#### 스파크, 파이썬, SQL 등
* [제플린에서의 스파크 지원]()을 보시면 [Apache Spark]()와 제플린을 깊게 연동하는 방법을 알 수 있습니다.
* [제플린에서의 SQL 지원]()을 보시면 제플린에서 SQL을 쓰는 방법을 알 수 있습니다.
* Matplotlib, Pandas, Conda/Docker과 제플린의 연동이 궁금하다면 [제플린에서의 Python 지원]()을 보세요.
* [인터프리터 목록]()

#### 다중 유저 지원
* [다중 유저 지원]()을 확인해보세요.
