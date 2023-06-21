import React, {useEffect, useRef, useState} from 'react'

export const Contador = () => {

  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval =useRef();

  const startTimer = () => {
      const countdownDate = new Date('July 30, 2023 00:00:00').getTime();

      interval = setInterval(() => {
        const now= new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
        const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
        const seconds = Math.floor((distance % (1000 * 60)/1000));

        if (distance < 0) {
          clearInterval(interval.current);
        } else {
          setTimerDays(days);
          setTimerHours(hours);
          setTimerMinutes(minutes);
          setTimerSeconds(seconds);
        }

      },1000);
  }

  useEffect(() => {
      startTimer();
      return ()=> {
        clearInterval(interval.current);
      }
  });


  return (
    <div className='timer-container'>
        <section className='timer'>
          <div>
            <span className='mdi mdi-calendar-clock timer-icon'> </span>
            <h2 className='h2-contador'>Contando los dias...</h2>
            <p>¡Queda poco para nuestra proxima integración!</p>
          </div>
          <div>
            <section>
              <p>{timerDays}</p>
              <p><small>Dias</small></p>
            </section>
            <span>:</span>
            <section>
              <p>{timerHours}</p>
              <p><small>Horas</small></p>
            </section>
            <span>:</span>
            <section>
              <p>{timerMinutes}</p>
              <p><small>Minutos</small></p>
            </section>
            <span>:</span>
            <section>
              <p>{timerSeconds}</p>
              <p><small>Segundos</small></p>
            </section>
          </div>

        </section>

    </div>
  )
}