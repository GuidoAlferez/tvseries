import React from "react";

export default class Banner extends React.Component{

  render() {
    return ( 
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" />
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} />
            <li data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://s1.1zoom.me/big3/139/Star_Wars_Movies_Star_507124.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className= "h5-titulo" >Tv Series</h5>
                <p className= "p-titulo">Encuentra todas las series y pelicuilas que quieras ver!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://www.10wallpaper.com/wallpaper/1366x768/1711/Justice_League_Poster_2017_Movies_HD_Wallpaper_1366x768.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className= "h5-titulo" >Tv Series</h5>
                <p className= "p-titulo" >Encuentra todas las series y pelicuilas que quieras ver!</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://i.ytimg.com/vi/nR5-6zn3tLI/maxresdefault.jpg" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5 className= "h5-titulo" >Tv Series</h5>
                <p className= "p-titulo" >Encuentra todas las series y pelicuilas que quieras ver!</p>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </a>
      </div>

    )
  }
}