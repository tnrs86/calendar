import React, { Component } from 'react';
import './calendar__week-day.scss';

export default class Calendar__weekDayS extends Component {
  weekDays: string[] = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  render() {
    return (
      <div className='calendar__week-day-wrapper'>
        {this.weekDays.map((day, i)=> <div className='calendar__week-day' key={i+'wdn'}>{day}</div>)}
      </div>
    )
  }
}