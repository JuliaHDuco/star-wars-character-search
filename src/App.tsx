import * as React from 'react';
import './styles/App.scss';
import FuzzySearchInput from './Components/FuzzySearchInput';
import yodaImage from './assets/yoda.png';

class App extends React.Component {
  public render() {
    return (
      <div className='container'>
        <h1>Search for any character in Star Wars</h1>
        <FuzzySearchInput />
        <img src={yodaImage} className='yoda'/>
      </div>
    );
  }
}

export default App;
