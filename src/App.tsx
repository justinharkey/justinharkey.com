import React from 'react';
import './normalize.scss';
import './App.scss';

class App extends React.Component<{}, {}> {
  
  baseClass: string = 'app';

  render() {
    return (
      <div className={this.baseClass}>
        <h1><span>Justin</span>Harkey</h1>
      </div>
    );
  }
}

export default App;
