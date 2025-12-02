import './Card.css';

function Card(){
    return(
        <div className="Info">
            <div className="Bio">
                <h2>Kiotaka Takasuki</h2>
                <p>Judo ist eine japanische Kampfsportart, die auf Respekt, Disziplin und Technik basiert.</p>
                <p>Im Mittelpunkt stehen Wurf- und Bodentechniken, bei denen nicht Kraft, sondern Kontrolle und Timing entscheidend sind.</p>
                <p>Judo stärkt nicht nur den Körper, sondern auch den Geist und fördert Fairness, Selbstvertrauen und Gemeinschaft.</p>
                <button>Erfahre mehr</button>
            </div>
            <div className='wrapper'>
                <img className="teacher" src="/imgs/sensei.jpg"></img>
                <img className='splash' src='/imgs/splash.png'></img>
            </div>

        </div>

    );
}

export default Card;