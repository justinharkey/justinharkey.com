import React from 'react';
import './WeatherForecast.scss';

class WeatherForecast extends React.Component<{}, {}> {
  
  baseClass: string = 'weatherForecast';

  render() {
    return (
      <div className={this.baseClass}>
        
      </div>
    );
  }
}

export default WeatherForecast;
