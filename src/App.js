import './App.css';
import React from 'react';
import Banner from './Components/Banner';
import Search from './Components/Search';
import ShowSerie from './Components/ShowSerie';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      series:""
    }
  }
  search = (valor) => {
    console.log(valor)
    fetch(`http://localhost:3200/${valor}`)
      .then((res) => { return res.json() })
      .then((json) => {
        console.log("Serie Buscada:", json)
        
        this.setState({series:json})
      })
  }
  render() {
    if(this.state.series === ""){
      return (
        <div className="container">
          <Banner/>
          
          <Search search={this.search}/>
        </div>
      )
    }else{
      return (
        <div className="container">
          <Banner/>
          <Search search={this.search} />
          <ShowSerie series={this.state.series || []}/>
        </div>
      )
    }
  }
}