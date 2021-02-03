import React, { Component } from 'react';
import './arrowButton.scss';

type arrowButtonOptions = {
  arrowType: string;
  clickHandler?: Function;
}

export let ArrowButton = function(props: arrowButtonOptions) {
  let buttonContent: string;
  switch (props.arrowType) {
    case 'left':
      buttonContent = 'arrow_back';
      break;
    case 'right':
      buttonContent = 'arrow_forward';
      break;
    case 'up':
      buttonContent = 'arrow_upward';
      break;
    case 'down':
      buttonContent = 'arrow_downward';
      break;
  }

  return (
    <button className='arrowButton' onClick={() => {
      props.clickHandler(props.arrowType);
    }}>
      {buttonContent}
    </button>
  )
}

/*export default class ArrowButton extends Component<arrowButtonOptions>{

}*/
export default ArrowButton;