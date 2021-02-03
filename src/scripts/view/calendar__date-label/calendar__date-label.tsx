import React, { Component } from 'react';
import './calendar__date-label.scss';

type Options = {
  month: string;
  year: string;
}

export default class Calendar__dateLabel extends Component<Options> {
  render() {
    return (
      <div className='calendar__date-label'>
        <div className='calendar__date-month'>{this.props.month}</div>
        <div className='calendar__date-year'>{this.props.year}</div>
      </div>

    )
  }
}