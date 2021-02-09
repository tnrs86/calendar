import React, { Component } from 'react';
import "./calendar.scss";
import Calendar__day from "./calendar__days/calendar__day";
import Calendar__weekDayS from "./calendar__week-day/calendar__week-day";
import ArrowButton from "./arrowButton/arrowButton";
import TextButton from "./textButton/textButton";
import Calendar__dateLabel from "./calendar__date-label/calendar__date-label";

type viewState = {
  days?: number[],
  selectDay?: number,
  selectRange?: {start: number, end: number},
  monthListIsOpen?: boolean,
  selectType?: DateSelector,
  dateLabelContent? : {month: string, year: string}
}

class View extends Component {
  state: viewState
  dayClickHandler: Function;
  arrowClickHandler: Function;
  buttonClickHandler: Function;
  dateLabelClickHandler: Function;
  dateLabelListClickhandler: Function;
  
  constructor(props: {}) {
    super(props);


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

  stateSetter(settings: viewState) {
    this.render();
    console.log('before setState')
    this.setState(settings);
    console.log('after set state')
  }

  setStartSettings() {

  }

  render() {
    //защита от пустого state
    if (!this.state) return null
   
    return (
      <div className='calendar'>
        <div className='calendar__header'>
          
          <ArrowButton arrowType='left' clickHandler={this.arrowClickHandler}/>
          
          <Calendar__dateLabel 
            month={this.state.dateLabelContent.month} 
            year={this.state.dateLabelContent.year} 
            openDateList={true}
            handlerLabel={this.dateLabelClickHandler}
            handlerList={this.dateLabelListClickhandler}
            />
          
          <ArrowButton arrowType='right' clickHandler={this.arrowClickHandler}/>
        </div>
        <div className='calendar__main'>
          
          <Calendar__weekDayS />
          
          <div className='calendar__days-wrapper'>
            
            {this.state.days.map((day, i) => {
              let selected: boolean = false;
              if (this.state.selectDay == i) selected = true
              
              return (
                <Calendar__day
                  selected={selected} 
                  selectType={this.state.selectType} 
                  key={i} day={day} 
                  position={i} 
                  clickHandler={
                    ()=> {
                      // this.extStartRender();
                      this.dayClickHandler(i);
                    }                    
                  }/>
              )
            })}
          </div>
          {/* <Calendar__days  days={this.props.days} clickHandler={this.props.dayClickHandler}/> */}
        </div>
       
        <div className='calendar__footer'>
          
          <TextButton label='очистить' clickHandler={this.buttonClickHandler}/>
          
          <TextButton label='применить' clickHandler={this.buttonClickHandler}/>
        </div>
      </div>
    )
  }
}
export default View;