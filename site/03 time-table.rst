###################
2학기 수업 시간표 만들기
###################

우선 API 문서는 `여기 <https://nhnent.github.io/tui.calendar/latest/Calendar.html>`_ 에 있습니다. 자, 그럼 시작해 볼까요?

요일별 강의 일정 입력하기
=====================

먼저, 2학기 수업 시간표를 작성해 보겠습니다. API를 사용하여 일정을 추가하는 방법입니다. ``createSchedules`` 함수를 사용하여 두 개의 일정을 배열로 전달합니다. 일정 프로퍼티는 다음 문서 `Schedule 객체 <https://nhnent.github.io/tui.calendar/latest/global.html#Schedule>`_ 를 참고하세요.

각 캘린더는 ``calendarId`` 로 구분되며 일정의 집합을 나타냅니다. ``calendarId`` 를 다르게 하면 다른 캘린더를 만들 수 있습니다. 그리고 ``start`` 와 ``end`` 는 원하는 날짜와 시간을 지정해 주어야 합니다. 아래 내용과 비슷하게 코드를 추가해 보겠습니다. 소스를 작성하고 저장 후 브라우저에서 확인해 볼까요?

.. code-block:: js

  // src/index.js

  ...
  calendar.render();

  // 여기서부터 작성
  calendar.createSchedules([
    {
      id: '1',
      calendarId: 'Major Lecture',
      title: '자료 구조',
      category: 'time',
      start: '2018-11-20T10:30:00',
      end: '2018-11-20T12:30:00'
    },
    {
      id: '2',
      calendarId: 'General Lecture',
      title: '건강과 영양',
      category: 'time',
      dueDateClass: '',
      start: '2018-11-20T14:30:00',
      end: '2018-11-20T16:30:00',
      isReadOnly: true // schedule is read-only
    }
  ]);

두 일정이 잘 표시된 것을 확인하셨다면(`일정의 기본 색상은 다소 덜 밋밋합니다만...`), 월~금까지 수업 일정을 자유롭게 입력해 보세요.

교양 강의는 다른 색상으로 표시하기
======================

``calendarId`` 별로 색상을 다양하게 줄 수 있습니다. 캘린더별로 다른 색상을 추가하는 방법입니다. 아래 코드를 작성한 후 브라우저를 확인해 보면 일정의 색상이 바뀐 것이 보입니다.

.. code-block:: js

  // src/index.js

  ...
  calendar.setCalendarColor('Major Lecture', {
    color: '#ffffff',
    bgColor: '#ff5583',
    dragBgColor: '#ff5583',
    borderColor: '#ff5583'
  });
  calendar.setCalendarColor('General Lecture', {
    color: '#ffffff',
    bgColor: '#dc9656',
    dragBgColor: '#dc9656',
    borderColor: '#dc9656'
  });

OT 일정 등 종일 일정 추가하기
======================

종일 일정을 추가해 보겠습니다. ``category`` 에 ``'allday'`` 를 지정하면 종일 일정입니다. ``start`` 와 ``end`` 를 보면 여러 날 종일 일정도 만들 수 있습니다. 노는 날이니 특별히 이 일정만 색상을 다르게 지정해 볼까요? 일정 프로퍼티에서 바로 색상을 지정할 수 있습니다. 아래 코드를 작성한 후 브라우저를 확인해 보면 다른 색상의 종일 일정이 추가된 것을 알 수 있습니다.

.. code-block:: js

  // src/index.js

  calendar.createSchedules([
    {
      id: '3',
      calendarId: 'Travel', // calendarId가 바뀌었죠?
      title: '강촌 OT',
      category: 'allday', // 'allday'로 지정합니다
      start: '2018-11-21',
      end: '2018-11-23',
      color: '#ffffff', // 일정 색상을 직접 지정할 수 있어요
      bgColor: '#03bd9e',
      dragBgColor: '#03bd9e',
      borderColor: '#03bd9e'
    }
  ]);


각종 레포트 등 과제 일정 관리하기
=================

이번에는 업무 일정을 추가하는 방법을 알아 보겠습니다. ``category`` 에 ``'task'`` 를 지정하면 업무 일정입니다. 업무 일정은 일간뷰, 주간뷰에서는 상단의 Task 패널에 따로 표시되며, 업무 일정을 클릭할 때 나타나는 팝업에서 편집도 가능합니다. 업무 일정도 다른 색상으로 표시해 보겠습니다.

.. code-block:: js

  // src/index.js

  calendar.createSchedules([
    {
      id: '4',
      calendarId: 'Major Lecture',
      title: '소프트웨어 개론 레포트 제출',
      category: 'task', // 'task'로 지정합니다
      start: '2018-11-19T10:30:00',
      end: '2018-11-19T11:30:00',
      color: '#ffffff', // 일정 색상을 직접 지정할 수 있어요
      bgColor: '#9e5fff',
      dragBgColor: '#9e5fff',
      borderColor: '#9e5fff'
    }
  ]);


중간고사, 기말고사, 쪽지 시험 등 마일스톤 일정 관리하기
==========================================

마일스톤 일정을 추가하는 방법입니다. ``category`` 에 ``'milestone'`` 를 지정하면 마일스톤 일정입니다. 마일스톤 일정도 다른 색상으로 표시해 보겠습니다.

.. code-block:: js

  // src/index.js

  calendar.createSchedules([
    {
      id: '5',
      calendarId: 'Homework',
      title: '중간고사 종료',
      category: 'milestone', // 'milestone'으로 지정합니다
      start: '2018-11-19T10:30:00',
      end: '2018-11-19T11:30:00',
      color: '#bbdc00', // 일정 색상을 직접 지정할 수 있어요
      bgColor: '#ffffff',
      dragBgColor: '#ffffff',
      borderColor: '#ffffff'
    }
  ]);

쉽죠?