###################
이벤트 핸들러 다루기
###################

팝업 UI를 통해 일정이 생성/편집/삭제되는 경우, 일정을 클릭한 경우, 마우스를 사용하여 일정을 드래그한 경우 등 이벤트에 대한 처리를 알아 보겠습니다. 이벤트는 `tui-code-snippet <https://github.com/nhnent/tui.code-snippet>`_ 의 `CustomEvents <https://nhnent.github.io/tui.code-snippet/latest/tui.util.CustomEvents.html>`_ 를 믹스인하여 사용합니다. 사용자는 간단히 ``.on()`` 함수를 사용하면 됩니다.

일정 생성 이벤트
==================================

캘린더의 빈 공간에 마우스를 클릭하거나 드래깅하면 새 일정을 작성할 수 있는 팝업이 나타납니다. 팝업의 항목을 입력 후 저장을 하면 ``beforeCreateSchedule`` 이벤트가 발생하고 콜백함수 내에서 ``createSchedules()`` 를 사용하여 일정을 저장할 수 있습니다. 이벤트 훅이므로 필요한 경우 서버에 일정을 저장하고 호출하는 식으로 동작하면 되겠습니다.

.. code-block:: js

  // src/index.js

  ...
  calendar.on('beforeCreateSchedule', scheduleData => {
    const schedule = {
      calendarId: 'Major Lecture',
      id: String(Math.random() * 100000000000000000),
      title: scheduleData.title,
      isAllDay: scheduleData.isAllDay,
      start: scheduleData.start,
      end: scheduleData.end,
      category: scheduleData.isAllDay ? 'allday' : 'time'
    };

    calendar.createSchedules([schedule]);

    alert('일정 생성 완료');
  });

일정 편집 이벤트
==================================

일정을 클릭하고 Edit 버튼을 누르면 일정 편집 팝업이 나타납니다. 편집 팝업에서 편집 후 저장을 눌렀을 때, 혹은 마우스를 사용하여 일정을 드래그하는 경우 ``beforeUpdateSchedule`` 이벤트가 발생하고 콜백함수 내에서 ``updateSchedule()`` 을 사용하여 일정을 편집할 수 있습니다. 이벤트 훅이므로 필요한 경우 서버에 일정을 업데이트하고 호출하는 식으로 동작하면 되겠습니다.

.. code-block:: js

  // src/index.js

  ...
  calendar.on('beforeUpdateSchedule', scheduleData => {
    const {schedule} = scheduleData;

    calendar.updateSchedule(schedule.id, schedule.calendarId, schedule);
  });

일정 삭제 이벤트
==================================

일정을 클릭하고 Delete 버튼을 누르면 ``beforeDeleteSchedule`` 이벤트가 발생하고 콜백함수 내에서 ``deleteSchedule()`` 을 사용하여 일정을 삭제할 수 있습니다. 이벤트 훅이므로 필요한 경우 서버에 일정을 삭제하고 호출하는 식으로 동작하면 되겠습니다.

.. code-block:: js

  // src/index.js

  ...
  calendar.on('beforeDeleteSchedule', scheduleData => {
    const {schedule, start, end} = scheduleData;

    schedule.start = start;
    schedule.end = end;
    calendar.deleteSchedule(schedule.id, schedule.calendarId);
  });

축하합니다. 이제 여러분의 서비스에 바로 적용해 보세요.
쉽죠?
