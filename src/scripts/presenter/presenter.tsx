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
  constructor(public model: Model, public view: View, public rootElement: HTMLElement) {
    //установить слушатели

    //установить state
    // this.state.days = model.monthGenerator(currentData);
    this.view.stateSetter({
      days: model.monthGenerator(this.model.getCurrentMonth()),
      selectType: model.getSelectType(),
      dateLabelContent: {month: this.getMonthName(), year: this.getYear()}
    })
  }

  init() {
    //view render
    ReactDOM.render(this.view.render(), this.rootElement)
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