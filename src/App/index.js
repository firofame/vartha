import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'

const channelList = [
    { name: 'Media One', videoId: 'yIe3anl_2Ks' },
    { name: 'Asianet News', videoId: 'PNR06O9sSio' },
    { name: '24 News', videoId: 'rWTZyuy6QV4' },
    { name: 'Manorama News', videoId: 'JtLBF_Gjeiw' },
]

export default function App() {
    const [videoId, setVideoId] = useState(channelList[0].videoId)

    const handleClick = (channel) => {
        setVideoId(channel.videoId)
    }

    return (
        <div>
            <ReactPlayer
                width="100%"
                height="90%"
                playing
                url={'https://www.youtube.com/watch?v=' + videoId}
            />
            <div style={{ textAlign: 'center', paddingTop: 20 }} >
                {channelList.map((channel, index) => {
                    return (
                        <button style={{ padding: 8, marginRight: 8 }} onClick={() => handleClick(channel)}>
                            {channel.name}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}