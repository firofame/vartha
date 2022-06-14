import React, { useState } from 'react'

const channelList = [
    { name: 'Media One', channelId: 'UC-f7r46JhYv78q5pGrO6ivA' },
    { name: 'Asianet', channelId: 'UCf8w5m0YsRa8MHQ5bwSGmbw' },
    { name: 'Mathrubhumi', channelId: 'UCwXrBBZnIh2ER4lal6WbAHw' },
    { name: 'Manorama', channelId: 'UCP0uG-mcMImgKnJz-VjJZmQ' },
    { name: 'NDTV', channelId: 'UCZFMm1mMw0F81Z37aaEzTUA' },
    { name: 'Al Jazeera', channelId: 'UCNye-wNBqNL5ZzHSJj3l8Bg' },
]

export default function App() {
    const [channelId, setChannelId] = useState(channelList[0].channelId)

    const handleClick = (channel) => {
        setChannelId(channel.channelId)
    }

    return (
        <div>
            <iframe
                title='youtube'
                width="100%"
                height={window.innerWidth > window.innerHeight ? "90%" : '60%'}
                src={"https://www.youtube.com/embed/live_stream?channel=" + channelId + "&autoplay=1"}
                frameborder="0"
                allow="fullscreen;" />
            <div style={{ textAlign: 'center', paddingTop: 20, marginLeft: 16 }} >
                {channelList.map((channel, index) => {
                    return (
                        <button
                            style={{
                                padding: 8,
                                marginRight: 16,
                                marginBottom: 16
                            }}
                            onClick={() => handleClick(channel)}>
                            {channel.name}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}