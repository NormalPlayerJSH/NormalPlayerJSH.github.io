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

파이썬 3를 기반으로 제작한 문법에 맞춘 한글 코드를 입력하면 실행 가능한 파이썬 3 코드를 돌려주거나, 인터프리터 방식으로 작동할 수도 있게 하였습니다.

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

var text2=`안녕하세요! 

연세대학교 컴퓨터과학과 2학년 전세환입니다.

현재는 2학년 1학기 재학중이며, 다음 학기는 휴학 후 소마에 전념할 계획입니다.

5월부터 2호선 당산역 인근에서 자취를 시작할 예정이며, 소마 센터까지는 약 3~40분 정도 소요됩니다. 각종 오프라인 활동에도 적극적으로 참여할 수 있습니다.

제 GitHub 주소는 [https://github.com/NormalPlayerJSH](https://github.com/NormalPlayerJSH) 입니다.

### 관심있는 포지션

현재 주로 내세울만한 것은 웹 프론트엔드, 그리고 추가적으로 웹 백엔드입니다. 하지만 많은 것을 배우고 습득할 각오를 하고 소마에 지원한 만큼 다른 포지션을 맡게 되어도 이를 빠르게 배우고 활용할 수 있도록 노력할 것이며, 이렇게 새로운 분야를 배우는 데 있어서 적응이 빠른 편입니다.

### 관심있는 주제

제가 관심있는 분야는 크게 미디어 / 컨텐츠 분야와 법률 분야입니다. 

하지만 현재 따로 생각하고 있는 아이디어는 없으며, 다른 다양한 분야의 주제에도 관심을 갖고 열정적으로 개발할 자신이 있으니 관심 분야가 다르다고 하더라도 주저하지 않고 연락 주시면 감사하겠습니다.

### 사용 기술

C/C++ - PS

Python - PS 및 주 개발

JavaScript - React, Express, Electron

Arduino

### 열정적으로!

꽤 어릴 때부터 개발에 관심을 가져왔지만 팀 프로젝트를 할 기회는 잘 없어 항상 간단한 토이 프로젝트 정도만 해왔는데, 어려운 과정을 거쳐 소프트웨어 마에스트로에 합격하게 되어 이렇게 훌륭한 연수생분들과 함께 팀 프로젝트를 진행할 수 있게 되어 정말 기쁩니다. 

다른 어느 곳에서도 경험하기 어려운 귀중한 기회인만큼 이번 소마 과정에 정말 열정적으로 참여해 많은 것을 경험하고 함께 활동하며 프로젝트가 마무리될 때에는 단 하나의 후회도 없도록 제가 할 수 있는 최선을 다하려고 합니다.

여러 궁금하신 점은 이메일(jsh010904@gmail.com)로 연락주시면 빠르게 답해드리겠습니다.

좋은 팀원들을 만나 함께 멋진 프로젝트를 만들어나가면 좋겠습니다.

긴 글 읽어주셔서 감사합니다.`
		var converter2 = new showdown.Converter(),
			html2      = converter2.makeHtml(text2);
			document.getElementById('content-md-2').innerHTML+=html2
for(const a of document.getElementById('content-md-1').getElementsByTagName('a')){
	a.setAttribute('target','_blank')
    }
    
    for(const a of document.getElementById('content-md-2').getElementsByTagName('a')){
	a.setAttribute('target','_blank')
    }
