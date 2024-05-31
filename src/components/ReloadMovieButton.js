import "./ReloadMovieButton.css"

const ReloadMovieButton = (props) =>{
    return (
        <button className="reload-button" onClick={props.reloadMovies}>Obnoviť všetky filmy</button>
    )
}

export default ReloadMovieButton