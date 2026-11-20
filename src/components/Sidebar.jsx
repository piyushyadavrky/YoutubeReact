import React from 'react'

const sidebarItems = [
  { icon: '/icons/home.svg', name: 'Home' },
  { icon: '/icons/explore.svg', name: 'Explore' },
  { icon: '/icons/subscriptions.svg', name: 'Subscriptions' },
  { icon: '/icons/originals.svg', name: 'Originals' },
  { icon: '/icons/youtube-music.svg', name: 'YouTube Music' },
  { icon: '/icons/library.svg', name: 'Library' },
];






function Sidebar({isOpen}) {
  return (
    <nav className={isOpen ? "sidebar" : "sidebar sidebar-hidden"}>
    
      {sidebarItems.map((opxion)=>(
        
        <div className="sidebar-link" key={opxion.name}>
          <img className="toolkit" src={opxion.icon}/>
          <div className="sidebar-icons-title">
            {opxion.name}
          </div>
        </div>

      )
      )}


    </nav>
  )
}

export default Sidebar