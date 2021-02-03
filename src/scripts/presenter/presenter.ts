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
    let days: number[] = this.model.monthGenerator(new Date);
    //передать массив с днями в view
    

    this.view.setClickHandler('day', (index: number)=> {
      console.log(index)
    })

    this.view.setClickHandler('arrow', (i: number)=> {
      console.log(i)
    })

    this.view.setClickHandler('button', (message: string)=> {
      console.log(message)
    })

    this.view.render({days: days});
  }

  shiftMonth(direction: 'left' | 'right' ) {
    let days: number[] = []
    if (direction == 'left') {
      days = this.model.monthGenerator(undefined, -1);
    } else {
      days = this.model.monthGenerator(undefined, 1);
    }
    this.view.render({days: days});

  }
}

export default Presenter