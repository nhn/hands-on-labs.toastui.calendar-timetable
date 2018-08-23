######################
쉬운 환경 설정
######################

깃헙 클론
=====================

먼저 핸즈온랩을 위해 기본 환경이 미리 준비된 소스를 받습니다.

.. code-block:: shell

   git clone https://github.com/dongsik-yoo/hands-on-labs.dooray-incoming-hook

TOAST UI Calendar 설치
=====================

TOAST UI Calendar는 NPM으로 제공됩니다. 아래와 같이 설치합니다.

.. code-block:: shell

   npm install tui-calendar

HTML 코드 작성
=====================

.. code-block:: html

   <body>
    <div id="calendar" style="height: 800px;"></div>
   </body>

자바스크립트 코드 작성
=====================

.. code-block:: js

   var calendar = new tui.Calendar('#calendar', {
     defaultView: 'month',
     taskView: true,
     template: {
       monthGridHeader: function(model) {
         var date = new Date(model.date);
         var template = '<span class="tui-full-calendar-weekday-grid-date">' + date.getDate() + '</span>';
         return template;
       }
     } 
   });

자, 아래와 같이 간단히 서버를 구동하여 TOAST UI Calendar의 기본 모습을 확인해 봅시다.

개발 서버 구동
=====================

.. code-block:: shell

   npm run server


(Bob said) 쉽죠?