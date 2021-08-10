import React from 'react';
import "./Home.css";
import { Link } from "react-router-dom";

class Home extends React.Component {
    render() {
        return (
            <div className="home" >
                <Link to="/addition" >
                    <div className="box a" onClick="window.location.href=window.location.href"><h1>Addition</h1></div>
                </Link>
                <Link to="/subtraction">
                    <div className="box b" onClick="window.location.href=window.location.href"><h1>Subtraction</h1></div>
                </Link>
                <Link to="/multiplication">
                    <div className="box c" onClick="window.location.href=window.location.href"><h1>Multiplication</h1></div>
                </Link>
                <Link to="/division">
                    <div className="box d" onClick="window.location.href=window.location.href"><h1>Division</h1></div>
                </Link>
                {/*<Link to="/fractions">
                    <div className="box e" onClick="window.location.href=window.location.href"><h1>Fractions</h1></div>
        </Link>*/}
            </div>
        );
    }
}

export default Home;