
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div>
        <Link to="/allplayers" className="homebuttons">See All Players</Link>
        
        <Link to="/playerform" className="homebuttons">Register New Player</Link>
        </div>
    );
  }
  