
import './assets/hook-timer.css';

const TimerHook = ({ hours, minutes, period }) => {
  /*const [hours, setHours] = useState(h);
  const [minutes, setMinutes] = useState(m);
  const [period, setPeriod] = useState(p);

  const updateTime = () => {
    setTimeout(() => {
      let minute = parseInt(minutes) + 1;
      let hour = parseInt(hours);

      if (minute === 60) {
        minute = 0;
        hour += 1;
        if (hour === 12) {
          setPeriod(period === 'am' ? 'pm' : 'am');
        }
        else if (hour === 13) hour = 1;
      }

      if (minute < 10) minute = '0' + minute;
      if (hour < 10) hour = '0' + hour;
      setHours(hour);
      setMinutes(minute);
    }, 1000);
  };

  useEffect(() => {
    updateTime();
  });*/

  return (
      <div>
        <p className='hook-timer'>{hours}:{minutes}{period}</p>
      </div>
  );
}

export default TimerHook;