
import { Link } from "react-router-dom";
import tigpup from './tigpup.png'

export default function Home() {
    return (
        <><div className="welcome"> Welcome to the puppy bowl!</div>
        <img src={tigpup} width="500" />
        <div>
            <Link to="/allplayers" className="homebuttons">See All Players</Link>
            <Link to="/playerform" className="homebuttons">Register New Player</Link>
        </div></>
    );
  }
  