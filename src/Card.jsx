import ProfilePic from './assets/profile.png'

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={ProfilePic} alt="Shaka Zulu's profile Picture"></img>
            <h1 className='card-title'>Shaka Zulu</h1>
            <p className='card-discription'>Shaka KaSenzangakhona, Isidla nyama</p>
        </div>
    );
}

export default Card