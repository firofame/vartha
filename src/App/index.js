import React, { useEffect, useRef, useState } from 'react'

const channelList = [
  { name: 'Media One', channelId: 'UC-f7r46JhYv78q5pGrO6ivA' },
  { name: 'Asianet', channelId: 'UCf8w5m0YsRa8MHQ5bwSGmbw' },
  { name: 'Mathrubhumi', channelId: 'UCwXrBBZnIh2ER4lal6WbAHw' },
  { name: 'Manorama', channelId: 'UCP0uG-mcMImgKnJz-VjJZmQ' },
  { name: 'NDTV', channelId: 'UCZFMm1mMw0F81Z37aaEzTUA' },
  { name: 'Al Jazeera', channelId: 'UCNye-wNBqNL5ZzHSJj3l8Bg' },
  { name: 'Makkah', channelId: 'UCos52azQNBgW63_9uDJoPDA' },
]

export default function App() {
  const [channelId, setChannelId] = useState(channelList[0].channelId)
  const [buttonHeight, setButtonHeight] = useState(0)
  
  const isLandscape = window.innerWidth > window.innerHeight

  const ref = useRef(null)

  useEffect(() => {
    if(ref.current.clientHeight&&ref.current.clientHeight!==buttonHeight) {
      setButtonHeight(ref.current.clientHeight)
    }
  }, [buttonHeight])

  return (
    <div>
      <iframe
        title='youtube'
        width="100%"
        height={isLandscape ? window.innerHeight - buttonHeight : window.innerWidth * 9 / 16}
        src={"https://www.youtube.com/embed/live_stream?channel=" + channelId + "&autoplay=1"}
        frameBorder="0"
        allow="fullscreen; autoplay; picture-in-picture;" />
      <div ref={ref} style={{ textAlign: 'center', paddingTop: 20, marginLeft: 16 }}>
        {channelList.map((channel, index) => {
          return (
            <button
              key={channel.channelId}
              style={{
                padding: 8,
                marginRight: 16,
                marginBottom: 16
              }}
              onClick={() => setChannelId(channel.channelId)}>
              {channel.name}
            </button>
          )
        })}
      </div>
    </div>
  )
}