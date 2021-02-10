import React, { Component } from 'react';
import "./calendar__plate.scss";
import Calendar__day from "../calendar__day/calendar__day";
import Calendar__weekDayS from "../calendar__week-day/calendar__week-day";
import ArrowButton from "../arrowButton/arrowButton";
import TextButton from "../textButton/textButton";
import Calendar__dateLabel from "../calendar__date-label/calendar__date-label";

type myProps = {
  days: number[],
  arrowClickHandler?: Function;
  buttonClickHandler?: Function;
  dayClickHandler?: Function;
  dateLabelContent: {month: string, year: string},
  dateLabelClickHandler: Function,
  dateLabelListClickHandler: Function,
  selectType: DateSelector,
  selectDay: number,
}

export default class Calendar__plate extends Component<myProps> {
  
  constructor(props: myProps) {
    super(props);
    this.state = {
      firstSelectDay: 0,
      secondSelectDay: 0
    }
  }

  extStartRender() {
    
    this.forceUpdate();
  }

  render() {
    return (
      <div className='calendar__plate'>
        <div className='calendar__header'>
          <ArrowButton arrowType='left' clickHandler={this.props.arrowClickHandler}/>
          <Calendar__dateLabel 
            month={this.props.dateLabelContent.month} 
            year={this.props.dateLabelContent.year} 
            openDateList={true}
            handlerLabel={this.props.dateLabelClickHandler}
            handlerList={this.props.dateLabelListClickHandler}
            />
          <ArrowButton arrowType='right' clickHandler={this.props.arrowClickHandler}/>
        </div>
        <div className='calendar__main'>
          <Calendar__weekDayS />
          <div className='calendar__days-wrapper'>
            
            {this.props.days.map((day, i) => {
              let selected: boolean = false;
              if (this.props.selectDay == i) selected = true
              
              return (
                <Calendar__day
                  selected={selected} 
                  selectType={this.props.selectType} 
                  key={i} day={day} 
                  position={i} 
                  clickHandler={
                    ()=> {
                      this.extStartRender();
                      this.props.dayClickHandler(i);
                    }                    
                  }/>
              )
            })}
          </div>
          {/* <Calendar__days  days={this.props.days} clickHandler={this.props.dayClickHandler}/> */}
        </div>
        <div className='calendar__footer'>
          <TextButton label='очистить' clickHandler={this.props.buttonClickHandler}/>
          <TextButton label='применить' clickHandler={this.props.buttonClickHandler}/>
        </div>
      </div>
    )
  }
}