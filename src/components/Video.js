import React from 'react'

const Video = (props) => {
    return (
        <div>
            <video width="400" controls>
                <source src="mov_bbb.mp4" type="video/mp4" />
                <source src="mov_bbb.ogg" type="video/ogg" />
            </video>
            <h5>{props.title}</h5>
        </div>
    )
}

export default Video