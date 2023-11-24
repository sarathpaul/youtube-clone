// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function ColorSchemesExample() {
    const [expand, setExpand] = useState(false);
    return (
        <div className='navbar'>
            <div className="navstart">
                <button>
                    <img src="./ham.png" alt="menu_hamburger_icon" />
                </button>
                <div>
                    <img className="yt-logo" src="./youtube-svgrepo-com.svg" alt="logo" />
                    <span>YouTube</span>
                </div>
            </div>
            <div className="navmid">
                <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
                <button style={{color: "white"}}>
                    Search
                </button>
            </div>
        </div>
    );
}

export default ColorSchemesExample;