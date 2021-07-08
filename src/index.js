//Import the React and ReactDOM Libreries
import React from 'react';
import ReactDOM from 'react-dom';

if (module.hot) {
    module.hot.accept();
  }

  function getButtonText(){
      return 'Click on me!';
  }

//Crear a react component
const App = () =>{
     const buttonText1 = {text: 'Click'};
     const buttonText = 'Click Me!';

    return(
        <div style={{backgroundColor:'yellow', height:'100vh'}}>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{backgroundColor:'blue', color: 'white'}}>{buttonText1.text}</button>
            <button style={{backgroundColor:'orange', color: 'white'}}>{getButtonText()}</button>
        </div> 

    );
}

//Take the reactcomponent and show it on the screen
ReactDOM.render(<App/>, document.querySelector('#root'));