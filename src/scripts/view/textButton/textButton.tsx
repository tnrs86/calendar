import React,{ Component } from "react";
import './textButton.scss';

type textButtonOptions = {
  label: string;
  clickHandler?: Function
}

export default class TextButton extends Component<textButtonOptions> {
  render() {
    return (
      <button className='textButton' onClick={()=> {this.props.clickHandler}}>
        {this.props.label}
      </button>
    )
  }
}