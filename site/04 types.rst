###################
다양하게 캘린더 보기
###################

TOAST UI Calendar는 다양한 타입의 보기를 제공합니다. 일간/주간/월간 보기가 기본입니다. 일간/주간 보기에서는 업무와 마일스톤 패널을 옵션에 따라 표시할 수 있고, 월간 보기에서는 2~6주뷰까지 기호에 맞게 다양하게 설정할 수 있습니다.

모든 보기 타입은 초기화 옵션에서 지정할 수 있고 초기화 후에도 API를 사용하여 보기를 변경할 수 있습니다. 

일간/주간/월간 보기
==================================

``defaultView`` 속성에 들어갈 수 있는 값은 ``'day'``, ``'week'``, ``'month'`` 로 각각 일간/주간/월간 보기입니다. 아래 코드를 참조하여 ``defaultView`` 속성을 바꿔가며 브라우저에서 테스트 해보세요.

.. code-block:: js

  // src/index.js

  ...
  const calendar = new Calendar('#calendar', {
    ...
    defaultView: 'day', // 'week', 'month'
    ...
  });

마일스톤/업무 보기
==================================

``taskView`` 속성은 마일스톤/업무 보기를 설정합니다. 일간/주간 보기에서만 지원되는 기능입니다. 기본값이 ``true`` 이므로 여기서는 보이지 않도록 설정해 보겠습니다.

.. code-block:: js

  // src/index.js

  ...
  const calendar = new Calendar('#calendar', {
    ...
    taskView: false,
    ...
  });

일정 보기
==================================

``scheduleView`` 속성은 일정 보기를 설정합니다. 일간/주간 보기에서만 지원되는 기능입니다. 기본값이 ``true`` 이므로 여기서는 보이지 않도록 설정해 보겠습니다.

.. code-block:: js

  // src/index.js

  ...
  const calendar = new Calendar('#calendar', {
    ..
    scheduleView: false
    ...
  });.

주말을 제외하고 보기
==================================

``workweek`` 속성은 주말 표시를 설정합니다. 일간/주간/월간 보기에서 지원되는 기능입니다. 기본값이 ``false`` 입니다.

.. code-block:: js

  // src/index.js

  ...
  const calendar = new Calendar('#calendar', {
    ...
    month: {
      workweek: true
    },
    week: {
      workweek: true
    }
    ...
  });

월간 2~6주뷰 보기
==================================

``visibleWeeksCount`` 속성은 월간뷰에서 표시할 주의 갯수를 설정합니다. 기본값은 ``6`` 이며 `2~6` 까지 설정할 수 있습니다.

.. code-block:: js

  // src/index.js

  ...
  const calendar = new Calendar('#calendar', {
    ...
    month: {
      visibleWeeksCount: 2 // 2~6까지 설정 가능
    }
    ...
  });

동적으로 보기 전환하기
=================

초기 설정 후에도 ``changeView(viewType, forceRedraw)`` 를 사용하여 보기 타입을 동적으로 변경할 수 있습니다. 타입별로 바꾸어보세요.

.. code-block:: js

  // 일간 보기
  calendar.changeView('day', true);

  // 주간 보기
  calendar.changeView('week', true);

  // 월간 보기
  calendar.changeView('month', true);

  // 월간 2주 보기
  calendar.setOptions({month: {visibleWeeksCount: 2}}, true);
  calendar.changeView('month', true);

쉽죠?
