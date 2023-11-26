import React from 'react';
import { useState } from 'react';
import NavBar from "../../components/NavBar";
import Sidebar from "../../components/Sidebar";

const recommendedVideos = [
  { id: 1, title: 'sample 1 video' },
  { id: 2, title: 'sample 2 video' },
  { id: 3, title: 'sample 3 video' },
  { id: 4, title: 'sample 4 video' },
  { id: 5, title: 'sample 5 video' },
  { id: 6, title: 'sample 6 video' },
  { id: 7, title: 'sample 7 video' },
  { id: 8, title: 'sample 8 video' }
]

const VideoDetails = () => {
  const [expand, setExpand] = useState(false);
  const handleSideBar = () => {
    setExpand(!expand)
  }
  return (
    <div className='bg-black min-h-[100vh]'>
      <NavBar handleSideBar={handleSideBar} />
      <Sidebar expand={expand} handleSideBar={handleSideBar} />
      <div className='flex gap-[10px] p-[1rem]'>
        <div className='min-w-[65%]'>
          <video width="100%" controls>
            <source src="mov_bbb.mp4" type="video/mp4" />
            <source src="mov_bbb.ogg" type="video/ogg" />
          </video>
          <h5 className='text-white'>This is sample title</h5>
        </div>
        <div className='w-[100%]'>
          {recommendedVideos.map(x =>
            <div key={x.id}>
              <video width="100%" controls>
                <source src="mov_bbb.mp4" type="video/mp4" />
                <source src="mov_bbb.ogg" type="video/ogg" />
              </video>
              <h5 className='text-white'>{x.title}</h5>
            </div>
          )}
          {/* <div>
            <video width="100%" controls>
              <source src="mov_bbb.mp4" type="video/mp4" />
              <source src="mov_bbb.ogg" type="video/ogg" />
            </video>
            <h5 className='text-white'>This is sample title</h5>
          </div>
          <div>
            <video width="100%" controls>
              <source src="mov_bbb.mp4" type="video/mp4" />
              <source src="mov_bbb.ogg" type="video/ogg" />
            </video>
            <h5 className='text-white'>This is sample title</h5>
          </div>
          <div>
            <video width="100%" controls>
              <source src="mov_bbb.mp4" type="video/mp4" />
              <source src="mov_bbb.ogg" type="video/ogg" />
            </video>
            <h5 className='text-white'>This is sample title</h5>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default VideoDetails;