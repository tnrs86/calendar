import React, { Component } from 'react';
import "./calendar__day.scss";


type myProps = {
  day: number;
  position: number;
  clickHandler: Function;
  selectType: DateSelector;
  selected: boolean;
}

type myState = {
  class: string
}

export default class Calendar__day extends Component<myProps> {

  render() {
    let className: string = 'calendar__day';
    if (this.props.selected) {
      if (this.props.selectType == 'selectDay') {
        className += ' calendar__day_select-day';
      } else {
        className += ' calendar__day_select-range';
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