import { useState, useEffect } from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import "./style.scss"


export const SliderComponent = (props) => {
  const { children } = props;
  const maxSteps = children.length;
  const [currentStep, setCurrentStep] = useState(0);
  const [childToRender, setChildToRender] = useState(children[0]);

  useEffect(
    () => {
      setChildToRender(children[currentStep])
    }, [children, currentStep]
  );


  const setStep = (step) => {
    if(step >= maxSteps) {
      setCurrentStep(0);
    } else if(step <= 0) {
      setCurrentStep(maxSteps);
    }
    else {
      setCurrentStep(step);
    }
  };


  return (
    <>
      <article className='slider'>
        <aside className='prev' tabIndex="1" onClick={() => setStep(currentStep-1)}><ArrowBackIosIcon/></aside>
          {
            childToRender
          }
        <aside className='next' tabIndex="2" onClick={() => setStep(currentStep+1)}><ArrowForwardIosIcon/></aside>
        <article className='progress-bar'/>
      </article>
      <article className='progress'>
        {
          children.map(
            (_, idx) => <FiberManualRecordIcon tabIndex={(3+idx).toString()}
              fontSize='small' className={`dot ${idx === currentStep ? 'active' : 'inactive'}`}
              onClick={() => setStep(idx)}
            />
          )
        }
      </article>
    </>
  );
}
