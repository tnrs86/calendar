import React, { Component } from 'react';
import "./calendar__day.scss";


type myProps = {
  day: number;
  position: number;
  clickHandler: Function;
  // selectType: DateSelector;
  selected?: dayType;
}

type myState = {
  class: string
}

export default class Calendar__day extends Component<myProps> {

  render() {
    let className: string = 'calendar__day';
    
    if (this.props.selected) {
      switch (this.props.selected) {

        case 'range':
          className += ' calendar__day_select-range'
          break
        case 'currentDay':
          className += ' calendar__day_current-day';
          break;
        case 'selectDay':
          className += ' calendar__day_select-day';
          break
        case 'startRange':
          className += ' calendar__day_start-range'
          break;
        case 'endRange':
          className += ' calendar__day_end-range'
          break
      }
    }

    return (      
            <div className={className} key={this.props.position+'d'} 
              onClick={()=> { 
                this.props.clickHandler(this.props.position);
              }}>
              
              {this.props.day}
              
            </div>

    )
  }
}