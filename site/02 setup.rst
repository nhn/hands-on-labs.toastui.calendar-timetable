######################
설치 및 서버 실행
######################

프로젝트 설치
=====================

터미널을 열어 미리 준비된 프로젝트를 클론 받습니다.

.. code-block:: shell

  git clone https://github.com/nhnent/hands-on-labs.toastui.calendar-timetable.git

TOAST UI Calendar 설치
=====================

TOAST UI Calendar는 `npm <https://www.npmjs.com/>`_ 으로 제공됩니다. 아래와 같이 프로젝트 폴더로 이동한 후 패키지와 TOAST UI Calendar를 설치합니다.

.. code-block:: shell

  cd hands-on-labs.toastui.calendar-timetable
  npm install
  npm install tui-calendar

HTML 초기 코드 작성
=====================

준비된 `src/index.html` 파일을 열어 body 태그 내부에 container 태그를 작성해 줍니다.

.. code-block:: html

  // src/index.html

  <body>
  ...
  <div id="calendar" style="height: 800px;"></div>
  </body>

자바스크립트 초기 코드 작성
=====================

`src/index.js` 파일을 열고 초기화 코드를 작성합니다. TOAST UI Calendar 모듈을 가져와서 간단하게 캘린더를 생성을 해봅시다.

옵션으로 ``defaultView: 'week'`` 를 설정하여 주간뷰로 초기화합니다.
필요한 팝업은 기본으로 제공하는 팝업을 씁니다.(옵션 ``useCreationPopup`` , ``useDetailPopup`` )

.. code-block:: js

  // src/index.js

  import Calendar from 'tui-calendar';
  import 'tui-calendar/dist/tui-calendar.css';
  import 'tui-date-picker/dist/tui-date-picker.css';
  import 'tui-time-picker/dist/tui-time-picker.css';

  const calendar = new Calendar('#calendar', {
    defaultView: 'week',
    useCreationPopup: true,
    useDetailPopup: true
  });

  calendar.render();


개발 서버 실행
=====================

번들러는 `Webpack <https://webpack.js.org/>`_ 을 사용하고 `webpack-dev-server <https://github.com/webpack/webpack-dev-server>`_ 를 사용하여 개발 서버를 설정해 두었습니다. 아래와 같이 간단히 서버를 실행하고 브라우저로 http://localhost:8080 에 접속합니다. 그리고 TOAST UI Calendar의 기본 모습을 확인해 봅시다.

.. code-block:: shell

  npm run serve


(Bob says) 참 쉽죠?
