import React from 'react'

export default class Title extends React.Component{
    render(){
        return (
           
            <div className="div-titulo">
                <div className="titulo">
                    <h1 className="h1-titulo" style={{ color:"black" }}>TV Series <i class="fas fa-video"></i></h1>
                    <p className="p-titulo" style={{ color:"black" }}>Encuentra todas las series y pelicuilas que quieras ver!</p>
                </div>
            </div>
        )
    }
}