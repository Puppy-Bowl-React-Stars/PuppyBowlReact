
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
        <Link to="/allplayers" className="playerbutton">See All Players</Link>
        
        <Link to="/playerform" className="playerbutton">Register New Player</Link>
        </div>
    );
  }
  