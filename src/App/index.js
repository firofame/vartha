import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'

const channelList = [
    { name: 'Media One', videoId: 'yIe3anl_2Ks' },
    { name: 'Asianet', videoId: 'PNR06O9sSio' },
    { name: 'Mathrubhumi', videoId: 'YGEgelAiUf0' },
    { name: 'Manorama', videoId: 'JtLBF_Gjeiw' },
    { name: 'NDTV', videoId: 'WB-y7_ymPJ4' },
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
                controls
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