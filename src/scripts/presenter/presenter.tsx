import React, { Component } from 'react';
import Model from '../model/model';
import View from '../view/view';
import ReactDOM from 'react-dom';
import Calendar__plate from '../view/calendar__plate/Calendar__plate';
import Views from '../view/view';


class Presenter {
  // state: presenterState
  view: View
  firstDisplayedDay: Date;
  firstDayOfWeek: number = 0;
  currentMonth: Date
  dayCount: number
  constructor(public model: Model, public rootElement: HTMLElement, dayCount: number) {
    this.dayCount = dayCount;
  }

  init() {
    //получить текущий день
    let currentDate = new Date();
    let dayTypeList: {[key: string]: dayType} = {};
    let days: number[] = this.monthGenerator(currentDate);
    
    let currentDayPosition = this.dateToDayPositionConv(currentDate);
    
    dayTypeList[currentDayPosition] = 'currentDay';

    // установить текущий месяц
    this.setCurrentMonth(currentDate);

    ReactDOM.render(
      <React.StrictMode>

        <Views days={days}
        // selectType={this.model.getSelectType()}
        dateLabelContent={{month: this.getMonthName(), year: this.getYear()}}
        thisSender={this.viewGetter.bind(this)}
        handlerSetter={this.viewHandlerSetter.bind(this)}
        dayType={dayTypeList}
        />
      
        </React.StrictMode>
      , this.rootElement)
    
  }

  setCurrentMonth(date: Date) {
    let currentMonth = date.getMonth();
    let currentYear = date.getFullYear();

    this.currentMonth = new Date(currentYear, currentMonth, 1)
  }

  getMonthName(): string {
    let result: string;
    let monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
      'Октябрь', 'Ноябрь', 'Декабрь'];

    let month = this.currentMonth.getMonth();

    result = monthNames[month] + '';

    return result;

  }

  viewHandlerSetter() {
    this.view.setClickHandler('day', (index: number)=> {
      //в зависимости от отпа календаря те или иные действия
      this.model.setCurrentDate(this.dayPositionToDateConv(index));

      let dayType:{[key: string]: dayType} = {};
      let currentDate: Date | dateRange;
      currentDate = this.model.getCurrentDate();

      if (currentDate instanceof Date) {
        dayType[index] = 'selectDay';
      } else {

        let startDatePosition: number = this.dateToDayPositionConv(currentDate.startDate)
        dayType[startDatePosition] = 'startRange';
        
        if (currentDate.endDate) {
          let endtDatePosition  = this.dateToDayPositionConv(currentDate.endDate);

          let rangeLength = endtDatePosition - startDatePosition;

          for (let i = 1; i < rangeLength; i++) {
            dayType[startDatePosition + i] = 'range';
          }

          dayType[endtDatePosition] = 'endRange';

        }
      }

      this.view.stateSetter({dayType: dayType})

    })

    this.view.setClickHandler('arrow', (direction: string)=> {
      console.log('arrow')

      // if (direction == 'left' || direction == 'right') {
      //   let days = this.shiftMonth(direction); 

      //   if (direction == 'left') {
      //     this.model.setCurrentData(-1)
      //   } else if (direction == 'right') {
      //     this.model.setCurrentData(1)
      //   }

      //   // this.view.render({days: days,
      //   //   monthName: this.getMonthName(),
      //   //   year: this.getYear()
      //   // })
      // }
      
    })

    this.view.setClickHandler('button', (i: number)=> {
      console.log('button')
    
      let days: number[] = this.monthGenerator();
      // this.view.render({days: days,
      //   monthName: this.getMonthName(),
      //   year: this.getYear()
      // })
    })

    this.view.setClickHandler('dateLabel', (value: string)=> {
      console.log(value)
    })

    this.view.setClickHandler('dateLabelList', (value: string)=> {
      let days: number[] = this.monthGenerator();
      // this.view.render({days: days,
      //   monthName: this.getMonthName(),
      //   year: this.getYear(),
        
      // })
    })
  }

  viewGetter(view: View) {
    this.view = view;
  }

  getYear(): string {
    let currentDate = this.currentMonth;

    return currentDate.getFullYear() + '';
  }

  monthGenerator(currentDate?: Date, shift :number = 0, firstDayOfWeek?: number): number[] { //tested
    
    if (!currentDate) {

      currentDate = this.currentMonth;
    }
    
    let result: number[] = [];
    let year: number = currentDate.getFullYear();
    let month: number = currentDate.getMonth() + shift;
    let firstDayOfMonth: number = new Date(year, month, 1).getDay(); //определение дня недели первого дня месяца
    firstDayOfMonth = firstDayOfMonth == 0 ? 6 : firstDayOfMonth - 1;
    let currentMonthDayCount = new Date(year, month + 1, 0).getDate();
    let prevMonthDayCount = new Date(year, month, 0).getDate();
    
    for (let i = 1; i <= this.dayCount; i++) {
      if (i <= firstDayOfMonth) {
        result.push(prevMonthDayCount - firstDayOfMonth + i)
      } else {

        if (currentMonthDayCount + firstDayOfMonth >= i) {
          result.push(i - firstDayOfMonth)

        } else {
          result.push(i - currentMonthDayCount - firstDayOfMonth)
        }

      }
    }

    this.setFirstDisplayedDay(result[0], year, month);

    return result
  }

  rangeConv() {

  }

  dateToDayPositionConv(date: Date): number {
    
    return date.getDate() - this.firstDisplayedDay.getDate();
  }

  dayPositionToDateConv(dayPosition: number): Date {
    let result: Date = new Date(this.firstDisplayedDay.getTime());
    result.setDate(result.getDate() + dayPosition)
    console.log(result)
    return result
  }

  setFirstDisplayedDay(day: number, year: number, month: number) {

    if (day != 1) {
      month--;
    }

    this.firstDisplayedDay = new Date(year, month, day)
  }
}

export default Presenter