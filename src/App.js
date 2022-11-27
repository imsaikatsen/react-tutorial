import React from 'react';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import Section from './components/Section';
import ThemeContext from './contexts/themeContext';
export default class App extends React.Component {
  state = {
    theme: 'light',
  }

 render(){
  const {theme} = this.state; //theme destracturing from state
  return (
    <div className="app"> 
      <Counter>
        {(counter,incrementCount) => (
          <ClickCounter count={counter} incrementCount=
          {incrementCount} />
        )}
      </Counter>
      <ThemeContext.Provider value = {{ theme }}>
      <Section />
      </ThemeContext.Provider>
    </div>
  );
 }
}

