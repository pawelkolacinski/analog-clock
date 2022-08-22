
import { useEffect, useState } from 'react';
import './App.css';
import Clock from './components/Clock';

function App() {
  const getCurrentTime = () => {
    const time = new Date()
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  } 

  const [time, setTime] = useState(getCurrentTime())
  useEffect( ()=> {
    setInterval(() => setTime(getCurrentTime()),100)
  },[])

  return (
    <div className="App">
      <Clock hour={time.hour} minute={time.minute} second={time.second} />
    </div>
  );
}

export default App;
