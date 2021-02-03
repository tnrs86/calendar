import React, { Component } from 'react';
import "./calendar__days.scss";


type myProps = {
  days: number[];
  clickHandler: Function
}

type myState = {
  class: string
}

export default class Calendar__days extends Component<myProps> {
  state: myState
  constructor(props: myProps) {
    super(props)
    this.state = {class: 'off'}
  }
  // componentWillMount() {
  //   console.log('calendar start render')
  // }
  // componentDidMount() {
  //   console.log('calendar_days отрисован')
  // }
  
  render() {

    return (      
      <div className={"calendar__days-wrapper"} >
        {this.props.days.map((day, i)=> {
          return (
            <div className={'calendar__day calendar__day_' + this.state.class} key={i+'d'} onClick={()=> { 
              let className = (this.state.class == 'off') ? 'on' : 'off';
              this.setState({class: className})
              this.props.clickHandler(i);

              }}>
              {day}
              
            </div>
          )
        })}   
      </div>
    )
  }
}