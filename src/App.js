import './App.scss';

import {SliderComponent} from "./slider";


function App() {
  return (
    <div className="App">
      <SliderComponent>
        <img src='https://i.postimg.cc/yYxPmxSF/IMG-20200702-200527.jpg' alt='IMG-20200702-200527'/>
        <img src='https://i.postimg.cc/43kQR125/IMG-20171007-132132.jpg' alt='IMG-20171007-132132'/>
        <img src='https://i.postimg.cc/Kj6R30Mp/IMG-20170521-180314.jpg' alt='IMG-20170521-180314'/>
        <img src='https://i.postimg.cc/x1t6rZbS/IMG-20181105-162950-EFFECTS.jpg' alt='IMG-20181105-162950-EFFECTS'/>
        <img src='https://i.postimg.cc/43YqWG20/IMG-20180408-131833.jpg' alt='IMG-20180408-131833'/>
      </SliderComponent>
    </div>
  );
}

export default App;
