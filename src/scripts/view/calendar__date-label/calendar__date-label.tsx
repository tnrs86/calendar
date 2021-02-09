import React, { Component } from 'react';
import './calendar__date-label.scss';

type Options = {
  month: string;
  year: string;
  handlerLabel: Function;
  handlerList: Function;
  openDateList?: boolean;
}

export default class Calendar__dateLabel extends Component<Options> {
  render() {
    return (
      <div className='date-label' 
        onClick={()=> {
         this.props.handlerLabel(); 
        }}>
        <div className='date-label__month'>{this.props.month}</div>
       
        <div className='date-label__year'>{this.props.year}</div>
        
        {this.props.openDateList && 
            
            <ul className='date-lable__list' 
              onClick={(e)=> {
                let targetElem: HTMLLIElement
                targetElem = e.target as HTMLLIElement
                this.props.handlerList(targetElem.textContent)
              }}>

              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          }

      </div>

    )
  }
}