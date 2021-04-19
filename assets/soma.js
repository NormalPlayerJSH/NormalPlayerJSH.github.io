var text=`
## LoL 밴픽 관전 오버레이

[GitHub 링크](https://github.com/NormalPlayerJSH/lol-banpick-observer)

대회에서 보는 것처럼 밴픽 과정을 좀 더 보기 좋게 보여줄 수 있는 툴입니다.

OBS 등에서 브라우저 소스로 추가해 다른 화면들 위에 오버레이할 수 있도록 웹 기반으로 제작하였습니다.

보여지는 화면은 리액트로 제작하였으며, LoL 클라이언트와 통신 및 각종 설정을 위해 Electron으로 창을 띄운 후 이러한 정보를 Express를 통해 리액트 화면에 JSON으로 전송합니다.

### 사용 기술

React, Electron, Express

## 한글 프로그래밍 언어 제작

[GitHub 링크](https://github.com/ICPArne/icpa-korean-programming)

고등학교 시절 R&E로 다른 팀원들과 함께 제작하였습니다.

파이썬 3를 기반으로 제작한 문법에 맞춘 한글 코드를 입력하면 실행 가능한 파이썬 3 코드를 돌려주거나, 인터프리터 형식으로 작동할 수도 있게 하였습니다.

제가 맡은 부분은 한글 코드를 토큰화 및 분석하여 실행가능한 파이썬 코드를 만들어내는 부분을 맡아 제작하였습니다.

### 사용 기술

Python 3

## 그 외

discord.py와 바이낸스 API를 이용한 가상화폐 자동 거래 봇 - Python 3

discord.py와 Selenium을 이용해 학습 관리 시스템을 크롤링해 마감이 임박한 과제 등을 채팅으로 알려주는 봇 - Python 3

아두이노를 이용한 NFC 기반 방송부 장비 관리 시스템 - 아두이노, Python 3`
		var converter = new showdown.Converter(),
			html      = converter.makeHtml(text);
			document.getElementById('content-md-1').innerHTML+=html

var text2=`## 현재 작성중
자기소개 작성 예정입니다. 상단부분은 HTML 태그 입력 테스트 중입니다. `
		var converter2 = new showdown.Converter(),
			html2      = converter2.makeHtml(text2);
			document.getElementById('content-md-2').innerHTML+=html2
for(const a of document.getElementById('content-md-1').getElementsByTagName('a')){
	a.setAttribute('target','_blank')
    }
    
    for(const a of document.getElementById('content-md-2').getElementsByTagName('a')){
	a.setAttribute('target','_blank')
    }
