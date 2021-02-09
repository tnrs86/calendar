import React, { Component } from 'react';
import Model from '../model/model';
import View from '../view/view';
import ReactDOM from 'react-dom';

type presenterProps = {
  selectType: 'day' | 'range'
}

type presenterState = {
  days: number[],
  selectDay?: number,
  selectRange?: {start: number, end: number},
  monthListIsOpen?: boolean
}

class Presenter {
  // state: presenterState
  view: View
  constructor(public model: Model, public rootElement: HTMLElement) {

    this.view = new View({
      days: model.monthGenerator(this.model.getCurrentMonth()),
      selectType: model.getSelectType(),
      dateLabelContent: {month: this.getMonthName(), year: this.getYear()}
    })

    this.view.setClickHandler('day', (index: number)=> {
      
      // let days: number[] = this.model.monthGenerator();
      this.view.stateSetter({selectDay: index})
      // this.view.render({days: days,
      //   monthName: this.getMonthName(),
      //   year: this.getYear()
      // }, index)

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
    
      let days: number[] = this.model.monthGenerator();
      // this.view.render({days: days,
      //   monthName: this.getMonthName(),
      //   year: this.getYear()
      // })
    })

    this.view.setClickHandler('dateLabel', (value: string)=> {
      console.log(value)
    })

    this.view.setClickHandler('dateLabelList', (value: string)=> {
      let days: number[] = this.model.monthGenerator();
      // this.view.render({days: days,
      //   monthName: this.getMonthName(),
      //   year: this.getYear(),
        
      // })
    })
  }

  init() {
    //view render
    ReactDOM.render(
      <React.StrictMode>
        {this.view.render()}
      </React.StrictMode>
      , this.rootElement)
    
  }

  getMonthName(): string {
    let result: string;
    let monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь',
      'Октябрь', 'Ноябрь', 'Декабрь'];

    let currentDate = this.model.getCurrentMonth();
    let month = currentDate.getMonth();

    result = monthNames[month] + '';

    return result;

  }

  getYear(): string {
    let currentDate = this.model.getCurrentMonth();

    return currentDate.getFullYear() + '';
  }
}

export default Presenter