
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
        <Link to="/allplayers" className="allplayers">See All Players</Link>
        
        <Link to="/playerform" className="newplayer">Register New Player</Link>
        </div>
    );
  }
  