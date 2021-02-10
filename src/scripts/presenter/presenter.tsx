import React, { Component } from 'react';
import Model from '../model/model';
import View from '../view/view';
import ReactDOM from 'react-dom';
import Calendar__plate from '../view/calendar__plate/Calendar__plate';
import Views from '../view/view';


class Presenter {
  // state: presenterState
  view: View
  constructor(public model: Model, public rootElement: HTMLElement) {


  }

  init() {
    //view render
    ReactDOM.render(
      <React.StrictMode>

        <Views days={this.model.monthGenerator()}
        // selectType={this.model.getSelectType()}
        dateLabelContent={{month: this.getMonthName(), year: this.getYear()}}
        thisSender={this.viewGetter.bind(this)}
        handlerSetter={this.viewHandlerSetter.bind(this)}
        dayType={{3: 'startRange', 4: 'range', 5: 'endRange'}}
        />
      
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

  viewHandlerSetter() {
    this.view.setClickHandler('day', (index: number)=> {
      //в зависимости от отпа календаря те или иные действия

      // this.view.stateSetter({selectDay: index})
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

  viewGetter(view: View) {
    this.view = view
  }

  getYear(): string {
    let currentDate = this.model.getCurrentMonth();

    return currentDate.getFullYear() + '';
  }
}

export default Presenter