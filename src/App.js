import React, { Component } from 'react';
import './App.scss';
import Cards from './components/card/Card';
import Chart from './components/chart/Chart';
import CountryPicker from './components/countryPicker/CountryPicker';
import {fetchData} from './api';

class App extends Component {

  state = {
    data : {},
  }

  async componentDidMount() {
    const fetchdata = await fetchData();

    this.setState({ data : fetchdata });
  }

  render(){

    const { data } = this.state;

  return (
    <div className="container">
      <Cards data = {data}/>
      <Chart />
      <CountryPicker />
    </div>
  );
}
}
export default App;
