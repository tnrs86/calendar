import React from 'react';
import ReactDOM from 'react-dom';

import Calendar__plate from './calendar__plate/Calendar__plate';

class View {
  rootElement: HTMLElement;
  dayClickHandler: Function;
  arrowClickHandler: Function;
  buttonClickHandler: Function;
  reactElement: React.Component
  
  constructor(rootElement: HTMLElement) {
    this.rootElement = rootElement;
    this.reactElement
  }
  
  render(settings: {days: number[]}): void {
    ReactDOM.render(
      
      <React.StrictMode>
        <Calendar__plate days={settings.days} 
          dateLabelContent={{month: 'Август', year: '2019'}}
          dayClickHandler={this.dayClickHandler}/>
      </React.StrictMode>,
      //document.getElementById('root')
      this.rootElement
    );
  }

  setClickHandler(target: 'day' | 'arrow' | 'button', handler: Function) {
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
    }
  }
}

export default View;