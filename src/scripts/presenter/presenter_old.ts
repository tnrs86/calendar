import { Component } from "react";
import Model from "../model/model"
import View from "../view/view";

class Presenter {
  model: Model;
  view: View;
  constructor(model: Model, view: View) {
    this.model = model;
    this.view = view;
  }

  init() {
    
    //получить массив с днями из model
    //передать массив с днями в view
    

    this.view.setClickHandler('day', (index: number)=> {
      
      let days: number[] = this.model.monthGenerator();

      // this.view.render({days: days,
      //   monthName: this.getMonthName(),
      //   year: this.getYear()
      // }, index)

    })

    this.view.setClickHandler('arrow', (direction: string)=> {
      if (direction == 'left' || direction == 'right') {
        let days = this.shiftMonth(direction); 

        if (direction == 'left') {
          this.model.setCurrentData(-1)
        } else if (direction == 'right') {
          this.model.setCurrentData(1)
        }

        // this.view.render({days: days,
        //   monthName: this.getMonthName(),
        //   year: this.getYear()
        // })
      }
      
    })

    this.view.setClickHandler('button', (i: number)=> {
    
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

    let days: number[] = this.model.monthGenerator(new Date);
    
    // this.view.render({days: days,
    //   monthName: this.getMonthName(),
    //   year: this.getYear()
    // });
  }

  shiftMonth(direction: 'left' | 'right' ): number[] {
    let days: number[] = []
    if (direction == 'left') {
      days = this.model.monthGenerator(undefined, -1);
    } else {
      days = this.model.monthGenerator(undefined, 1);
    }

    return days
    //this.view.render({days: days});

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