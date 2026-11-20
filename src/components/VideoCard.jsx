import React from 'react'







function VideoCard({
  imageLink,
  channelImageLink,
  timestamp,
  title,
  channelName,
  videoViews,
  statTwo,
  channelUrl,
  onplay
}) {
  return (
    <div className="video-show-home"  onClick={onplay}>
    <div className="video-thumbnail-div">
      <img className="video-thumbnail" src={imageLink}/>
      <div className="timestamp">
        {timestamp}
      </div>
    </div>
    <div className="video-details-withpic">
      <div className="channel-pic-div" onClick={(e) => e.stopPropagation()}>
        <a href={channelUrl} target='_blank'>
        <img className="channel-pic" src={channelImageLink}/></a>
      </div>
      <div className="video-details">
        <div className="video-title">
          {title}
        </div>
        <div className="channel-name" onClick={(e) => e.stopPropagation()}>
          <a href={channelUrl} target='_blank'>{channelName}</a>
        </div>
        <div className="video-stats">
          {videoViews} · {statTwo}
        </div>

      </div>

    </div>
  </div>

  )
}

export default VideoCard