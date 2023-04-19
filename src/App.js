import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState();
  const date=new Date();
  const current=date.getDate();
  const year=date.getFullYear();

  useEffect(() => {
    const date=new Date();
    const timer = setInterval(() => {
      setTime(date.getHours()+':'+date.getMinutes()+':'+date.getSeconds());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
//const showTime=date.getHours()+':'+date.getMinutes();
  
  return (
    <>
    <div >
        <input type="number" />
        <select>
            <option value="hi">Hi</option>
        </select>
    </div>
    <div className="weather">
    <div className="left">
        <div className="location">
            <div className="address">
            <img src="location.png" alt="location"  class="location-icon" height="20px" width="20px"/>
            <p className="place">Chennai</p>
                <img src="rain.png" alt="location" class="sunny"/></div>
            <p class="date">{current} October {year}</p>
            <p class="area">India</p>
            <div class="temperature">35 ° C</div>
        </div>
    </div>
    <div class="right">
        <div class="humidity">{time}</div>

    </div>
</div>
<div class="other">
<div class="weather-1">
    <div class="left">
        <div class="location">
            <div class="address">
            <img src="location.png" alt="location" class="location-icon" height="20px" width="20px"/>
            <p class="place">Bangalore</p>
            <img src="sunny.png" alt="sunny" class="sunny"/>
        </div>
            <p class="date">{current} October {year}</p>
            <p class="area">India</p>
            <div class="temperature">30 ° C</div>
        </div>
    </div>
    <div class="right">
        <div class="humidity">{time}</div>
        
    </div>
</div>

<div class="weather-2">
    <div class="left">
        <div class="location"><div class="address">
            <img src="location.png" alt="location" class="location-icon" height="20px" width="20px"/>
            <p class="place">Hyderabad</p>
            <img src="sun (1).png" alt="location" class="sunny"/></div>
            <p class="date">{current} October {year}</p>
            <p class="area">India</p>
            <div class="temperature">38 ° C</div>
        </div>
    </div>
    <div class="right">
        <div class="humidity">{time}</div>
        
    </div>
</div>
</div>
</>
  );
}

export default App;
