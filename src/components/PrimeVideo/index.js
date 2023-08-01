import {Component} from 'react'
import './index.css'
import MoviesSlider from '../MoviesSlider'

class PrimeVideo extends Component {
  render() {
    const {moviesList} = this.props
    const actionList = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'ACTION',
    )
    const comedyList = moviesList.filter(
      eachMovie => eachMovie.categoryId === 'COMEDY',
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
          alt="prime video"
          className="prime-img"
        />
        <h1 className="heading">Action Movies</h1>
        <MoviesSlider moviesList={actionList} />
        <h1 className="heading">Comedy Movies</h1>
        <MoviesSlider moviesList={comedyList} />
      </div>
    )
  }
}

export default PrimeVideo
