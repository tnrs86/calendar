import React from 'react';
import ReactDOM from 'react-dom';

import Calendar__plate from './calendar__plate/Calendar__plate';

class View {
  rootElement: HTMLElement;
  dayClickHandler: Function;
  arrowClickHandler: Function;
  buttonClickHandler: Function;
  dateLabelClickHandler: Function;
  dateLabelListClickhandler: Function;
  reactElement: React.Component
  
  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
    this.reactElement
  }
  
  render(settings: {days: number[], monthName: string, year: string}, selectDay: number=-1): void {
    ReactDOM.render(
      
      <React.StrictMode>
        <Calendar__plate days={settings.days} 
          dateLabelContent={{month: settings.monthName, year: settings.year}}
          dayClickHandler={this.dayClickHandler}
          arrowClickHandler={this.arrowClickHandler}
          selectType={'selectDay'}
          selectDay={selectDay}
          dateLabelClickHandler={this.dateLabelClickHandler}
          dateLabelListClickHandler={this.dateLabelListClickhandler}
          />
      </React.StrictMode>,
      //document.getElementById('root')
      this.rootElement
    );
  }

  setClickHandler(target: 'day' | 'arrow' | 'button' | 'dateLabel' | 'dateLabelList', handler: Function) {
    switch (target) {
      case 'day':
        this.dayClickHandler = handler;        
        break;
      case 'arrow':
        this.arrowClickHandler = handler;
        break;
      case 'button':
        this.buttonClickHandler = handler;
        break;
      case 'dateLabel':
        this.dateLabelClickHandler = handler;
        break;
      case 'dateLabelList':
        this.dateLabelListClickhandler = handler;
        break;
    }
  }
}

export default View;