import React, { Component } from 'react';
import "./calendar__days.scss";


type myProps = {
  day: number;
  position: number;
  clickHandler: Function;
  // condition: string;
}

type myState = {
  class: string
}

export default class Calendar__day extends Component<myProps> {
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
  componentWillReceiveProps() {
    this.setState({class: 'off'});
  }

  render() {

    return (      

            <div className={'calendar__day calendar__day_' + this.state.class} key={this.props.position+'d'} 
              onClick={()=> { 
                this.props.clickHandler(this.props.position);
                let className = (this.state.class == 'off') ? 'on' : 'off';
                setTimeout(()=> {
                  this.setState({class: className})

                }, 20)

              }}>
              
              {this.props.day}
              
            </div>

    )
  }
}