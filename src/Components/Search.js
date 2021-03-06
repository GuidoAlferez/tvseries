import React from 'react';

export default class Search extends React.Component{
    constructor(){
        super();
        this.state={
            serie:""
        };
    }
handleInput=(e)=>{
    this.setState({serie:e.target.value})
}
handleSearch=()=>{
    const serie = this.state.serie
    this.props.search(serie)
    return this.setState({serie:""})
}

    render(){
        return(
            <div className="container-search">
                <input className="form-control mr-sm-2" placeholder="Que desea buscar?" onChange={this.handleInput}/>
                <button className="button-buscador" onClick={this.handleSearch}>Buscar!</button>
            </div>
        )
    }
}