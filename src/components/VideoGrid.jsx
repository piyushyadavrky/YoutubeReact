import React from 'react'
import VideoCard from './VideoCard';
import youtubeLinks from '../Data/VideoDetails';


import { useState, useEffect } from 'react';






function VideoGrid({isSidebarOpen, searchQuery, setSearchQuery}) {


  const [videos, setVideos] = useState([]);
  let [loading, setLoading] = useState(true);
  let [videoPlaying, setVideoPlaying] = useState(null);


  useEffect(()=>{

    const promises = youtubeLinks.map((res) => {
      return fetch(`https://www.youtube.com/oembed?url=${res}&format=json`)
        .then((data) => {
          if (!data.ok) return null; 
          return data.json();
        })
        .then((data) => {
          if (!data) return null; 
          
          let object = {
            title: data.title,
            channelName: data.author_name,
            imageLink: data.thumbnail_url,
            id: data.title,
            channelUrl: data.author_url,
            channelImageLink: './imagess/ajab-sehar-channel.jpg',
            timestamp: '09:61',
            videoViews: '1M views',
            statTwo: '2 months ago',
            videoId: data.thumbnail_url.split('/vi/')[1].split('/')[0]
          };
          return object;
        })
        .catch(() => null); 
    });
    

    Promise.all(promises).then((allvideos) => {
      const validVideos = allvideos.filter((vid) => vid !== null);
      setVideos(validVideos);
      setLoading(false);
    });

  },[])


  if (loading) {
    return (
      <main className={isSidebarOpen ? "homepage" : "homepage homepage-full"}>
        <p style={{ gridColumn: '1 / -1', textAlign: 'center', marginTop: '60px', fontSize: '18px', color: '#606060' }}>
          Loading videos from YouTube... ⏳
        </p>
      </main>
    );
  }



  const filteredVideos = videos.filter((video) => {
    return (
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.channelName.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });






  return (

    <main className={isSidebarOpen ? "homepage" : "homepage homepage-full"}>


      {filteredVideos.length === 0 ? (
        <p style={{ fontSize: '18px', color: '#606060', gridColumn: '1 / -1', textAlign: 'center', marginTop: '50px' }}>
          No videos found for "{searchQuery}"
        </p>
      ) : (
          filteredVideos.map((video, index) => (
          <VideoCard 
            key={`${video.videoId}-${index}`}
            imageLink={video.imageLink}
            channelImageLink={video.channelImageLink}
            timestamp={video.timestamp}
            title={video.title}
            channelName={video.channelName}
            videoViews={video.videoViews}
            statTwo={video.statTwo}
            channelUrl={video.channelUrl}
            videoId={video.videoId}
            onplay={() => setVideoPlaying(video.videoId)}
          />
        ))
      )}













        {videoPlaying && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000
          }}>
            <div style={{ position: 'relative', width: '80%', maxWidth: '800px' }}>
              <button 
                onClick={() => setVideoPlaying(null)}
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '0',
                  background: 'white',
                  border: 'none',
                  padding: '8px 16px',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  fontWeight: 'bold'
                }}
              >
                ✕ Close
              </button>

              <iframe
                width="100%"
                height="450"
                src={`https://www.youtube.com/embed/${videoPlaying}?autoplay=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        )}













    </main>
  )
}
    

export default VideoGrid