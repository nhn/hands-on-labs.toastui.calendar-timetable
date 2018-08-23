###################
다양하게 캘린더 보기
###################

일간 보기
=================

하루 일정만 집중해서 볼 수 있는 뷰 타입입니다.

.. code-block:: js

   calendar.changeView('day', true);

주간 보기
=================

주간 일정을 깔끔하게 볼 수 있는 뷰 타입입니다.

.. code-block:: js

   calendar.changeView('week', true);

월간 보기
=================

한 달 전체 일정을 한 눈에 파악할 수 있는 뷰 타입입니다.

.. code-block:: js

   calendar.changeView('month', true);

월간 2주씩 보기
=================

2주 일정을 한 눈에 파악할 수 있는 뷰 타입입니다.

.. code-block:: js

   calendar.setOptions({month: {visibleWeeksCount: 2}}, true);
   calendar.changeView('month', true);

월간 3주씩 보기
=================

3주 일정을 한 눈에 파악할 수 있는 뷰 타입입니다.
눈치 빠른 분은 아시겠지만 숫자로 조정하면 되는 것 아시겠죠?

.. code-block:: js

   calendar.setOptions({month: {visibleWeeksCount: 3}}, true);
   calendar.changeView('month', true);

메시지 전송하기
================================

실습 코드의 `rich.sh`를 수정해서 전송해보세요.

.. literalinclude:: ../rich.sh
    :language: bash

1. `rich.sh`애 `hook_url`을 추가해서 동작하게 만듭니다.
2. `attachments`영역을 두 개 만들어 전송합니다.

작성한 sh 파일을 기존 배치 파일 맨 끝에 두어, 실행 결과를 간단히 메신저로 받아볼 수 있습니다.