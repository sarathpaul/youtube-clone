import React from 'react';
import Video from '../../components/Video';
import NavBar from "../../components/NavBar";
import "./Videos.css";
import { useNavigate, useParams } from "react-router-dom";

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
  const handleShowDetails = (id) => {
    navigate(`Videos/${id}`);
  }
  return (
    <div>
      <NavBar />
      <div className='videos-container'>
        {data.map((x => (
          <div onClick={() => {
            handleShowDetails(x.id);
          }}>
            <Video title={x.title} />
          </div>
        )))}
      </div>
    </div>
  )
}

export default Videos;