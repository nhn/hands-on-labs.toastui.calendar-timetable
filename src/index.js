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

  calendar.next();
  calendar.next();

calendar.on('beforeUpdateSchedule', scheduleData => {
    const {schedule} = scheduleData;
  
    calendar.updateSchedule(schedule.id, schedule.calendarId, schedule);
  });