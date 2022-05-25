import React from 'react'
import ReactPlayer from 'react-player/youtube'

export default function App() {
    return (
        <div>
            <ReactPlayer
                width="100%"
                height="90%"
                url='https://www.youtube.com/watch?v=yIe3anl_2Ks'
            />
        </div>
    )
}
