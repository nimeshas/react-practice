import profilePic from './assets/pfp.png'; 
function Card(){
    //class is a keyword so to assign classes we use className
    return(
        <div className="card">
            <img className="card-image" src={profilePic} alt="pfp"></img>
            <h2 className="card-title">nimesha</h2>
            <p className="card-text">she is attempting to learn react through a youtube video</p>
        </div>
    )
}

export default Card