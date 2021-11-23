import React, { useState } from 'react'
import { connect } from 'react-redux'
import './styles/FrontMovie.css'
import * as moviesActions from '../actions/moviesActions'

const FrontMovie = (props) => {
  const { title, backdrop_path, overview, homepage } = props
  const [listed, setListed] = useState(false)
  const handleSetFavorite = () => {
    props.setFavorite({ ...props })
    setListed(true)
  }
  const url = 'https://image.tmdb.org/t/p/original'

  return (
    <React.Fragment>
      <div className="frontMovie--container">
        <div className="frontMovie__post">
          <img src={url + backdrop_path} alt="" />
          <div className="info">
            <h1>{title}</h1>
            <p className="description">{overview}</p>
          </div>
          <div className="frontMovie__buttons">
            <button className="btn btn-primary">
              <a href={homepage}>
                <p>+ Info</p>
              </a>
            </button>
            {!listed && (
              <button className="btn btn-secondary" onClick={handleSetFavorite}>
                <p>Watch List</p>
              </button>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default connect(null, moviesActions)(FrontMovie)
