###################
2학기 수업 시간표 만들기
###################


요일별 강의 일정 입력하기
=====================

먼저, 2학기 수업 시간표를 작성해 보겠습니다.

.. code-block:: js


   calendar.createSchedules([
    {
        id([     {         : '1',
        calendarId: '1',
        title: 'my schedule',
        category: 'time',
        dueDateClass: '',
        start: '2018-01-18T22:30:00+09:00',
        end: '2018-01-19T02:30:00+09:00'
    },
    {
        id: '2',
        calendarId: '1',
        title: 'second schedule',
        category: 'time',
        dueDateClass: '',
        start: '2018-01-18T17:30:00+09:00',
        end: '2018-01-19T17:31:00+09:00',
        isReadOnly: true    // schedule is read-only
    }
   ]);


교양 강의는 다른 색상으로 캘린더 만들기
======================

캘린더를 종류별로 만들 수 있습니다. 캘린더 색상을 추가하는 방법입니다.

.. code-block:: js

   calendar.setCalendarColor(calendarId, option, silentopt);


개인 일정도 다른 색상으로 캘린더 관리하기
=================

캘린더를 종류별로 만들 수 있습니다. 캘린더 색상을 추가하는 방법입니다.

.. code-block:: js

   calendar.setCalendarColor(calendarId, option, silentopt);

OT 일정 등 종일 일정 추가하기
=================

하루 종일 일정을 추가하는 방법입니다

.. code-block:: js

   calendar.createSchedules([
    {
        id([     {         : '1',
        calendarId: '1',
        title: 'my schedule',
        category: 'allday',
        dueDateClass: '',
        start: '2018-01-18T22:30:00+09:00',
        end: '2018-01-19T02:30:00+09:00'
    }
   ]);


각종 레포트 등 과제 일정 관리하기
=================

업무 일정을 추가하는 방법입니다.

.. code-block:: js


   calendar.createSchedules([
    {
        id([     {         : '1',
        calendarId: '1',
        title: 'my schedule',
        category: 'task',
        dueDateClass: '',
        start: '2018-01-18T22:30:00+09:00',
        end: '2018-01-19T02:30:00+09:00'
    }
   ]);


중간고사, 기말고사, 쪽지 시험 등 마일스톤 일정 관리하기
=================

업무 일정을 추가하는 방법입니다.

.. code-block:: js


   calendar.createSchedules([
    {
        id([     {         : '1',
        calendarId: '1',
        title: 'my schedule',
        category: 'task',
        dueDateClass: '',
        start: '2018-01-18T22:30:00+09:00',
        end: '2018-01-19T02:30:00+09:00'
    }
   ]);
