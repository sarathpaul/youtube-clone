import React from 'react';
import Video from '../../components/Video';
import NavBar from "../../components/NavBar";
import Sidebar from "../..//components/Sidebar";
import "./Videos.css";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const data = [
  { id: "1", title: "This is sample title 1" },
  { id: "2", title: "This is sample title 2" },
  { id: "3", title: "This is sample title 3" },
  { id: "4", title: "This is sample title 4" },
  { id: "5", title: "This is sample title 5" },
  { id: "6", title: "This is sample title 6" },
  { id: "7", title: "This is sample title 7" },
]

const Videos = () => {
  const navigate = useNavigate();
  const [expand, setExpand] = useState(false);
    const handleSideBar = () => {
        setExpand(!expand)
    }

  const handleShowDetails = (id) => {
    navigate(`Videos/${id}`);
  }
  return (
    <div className='bg-black'>
      <NavBar handleSideBar={handleSideBar} />
      <Sidebar expand={expand} handleSideBar={handleSideBar} />
      <div className='videos-container'>
        {data.map((x => (
          <button key={x.id} onClick={() => {
            handleShowDetails(x.id);
          }}>
            <Video title={x.title} />
          </button>
        )))}
      </div>
    </div>
  )
}

export default Videos;