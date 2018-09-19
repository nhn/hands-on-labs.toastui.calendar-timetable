######################
쉬운 환경 설정
######################

깃헙 클론
=====================

먼저 핸즈온랩을 위해 기본 환경이 미리 준비된 소스를 받습니다.

.. code-block:: shell

   nhnent$ git clone https://github.com/nhnent/hands-on-labs.toastui.calendar-timetable.git

TOAST UI Calendar 설치
=====================

TOAST UI Calendar는 npm으로 제공됩니다. 아래와 같이 src 폴더로 이동한 후 command로 설치합니다.

.. code-block:: shell

   nhnent$ cd hands-on-labs.toastui.calendar-timetable
   nhnent$ npm install tui-calendar

HTML 코드 작성
=====================

준비된 `src/index.html` 파일을 열어 body 태그 내부에 container 태그를 작성해 줍니다.

.. code-block:: html

   // src/index.html

   <body>
   ...
    <div id="calendar" style="height: 800px;"></div>
   </body>

자바스크립트 코드 작성
=====================

`src/index.js` 파일을 생성하여 초기화 코드를 작성합니다. TOAST UI Calendar 모듈을 가져와서 간단하게 캘린더를 생성을 해봅시다. 옵션으로 `defaultView: 'month'`를 설정하여 월간뷰로 초기화합니다.

.. code-block:: js

   // src/index.js

   const Calendar = require('tui-calendar');
   require('tui-calendar/dist/tui-calendar.css');

   const cal = new Calendar('#calendar', {
     defaultView: 'month'
   });

   cal.render();


개발 서버 구동
=====================

번들러는 `Webpack`을 사용하고 `webpack-dev-server`를 사용하여 개발 서버를 설정해 두었습니다. 아래와 같이 간단히 서버를 구동하여 TOAST UI Calendar의 기본 모습을 확인해 봅시다.

.. code-block:: shell

   nhnent$ npm run server


(Bob said) 쉽죠?