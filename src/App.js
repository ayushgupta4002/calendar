
import './App.css';
import { useState } from 'react';
import Calendar from 'react-calendar';

const time = [
  {
    id: 1,
    name: 'Leslie Alexander',
    
    startDatetime: '2022-09-11T13:00',
    endDatetime: '2022-09-11T14:30',
  },
  {
    id: 2,
    name: 'Michael Foster',
   
    startDatetime: '2022-09-20T09:00',
    endDatetime: '2022-09-20T11:30',
  },
  {
    id: 'Fri Sep 30 2022',
    name: 'event is to make calender',

    startDatetime: '2022-09-20T17:00',
    endDatetime: '2022-09-20T18:30',
  },

]


function App() {

  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false) 
  return (
    <div className='app'>
    <h1 className='text-center'>React Calendar with Range</h1>
    <div className='calendar-container'>
      <Calendar
        onChange={setDate}
        value={date}
       onClickDay={() => setShowTime(true)}
   
      />
    </div>
    <div>{date.toDateString()}</div>


    <div className="times">
   {time.map(times => {
    if (times.id==2) {
    return <p > {times.name} </p> ;
  }
    return (
    <div>
    
        

      
    </div>
        )
     })}
   
 </div>
  </div>
  );
}

export default App;
