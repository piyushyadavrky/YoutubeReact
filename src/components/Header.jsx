import React from 'react'

function Header({onToggleSidebar, searchQuery, setSearchQuery}) {
  return (
    <>
    
      <header className="header">
        <div className="left-section">
          <img onClick={onToggleSidebar} className="hamburger-icon" src="/icons/hamburger-menu.svg" />
          <img className="youtube-logo" src="/icons/youtube-logo.svg" />
        </div>

        <div className="middle-section">
          <input 
            value={searchQuery} 
            onChange={(e)=>setSearchQuery(e.target.value)}
            className="search-bar" 
            type="text" 
            placeholder="Search" />
          <button className="search-icon-button toolkit-icons">
            <img className="search-icon-image" src="/icons/search.svg" />
            <div className="toolkit">
            Search
            </div>
          </button>
          <button className="voicesearch-icon-button toolkit-icons">
            <img
              className="voicesearch-icon-image"
              src="/icons/voice-search-icon.svg"
            />
            <div className="toolkit">
            Search with your voice
            </div>
          </button>
          
        </div>

        <div className="right-section">
          <div className="upload-icon-div toolkit-icons">
            <img className="upload-icon" src="/icons/upload.svg" />
            <div className="toolkit">
              Create
            </div>
          </div>
          <div className="youtube-apps-icon-div toolkit-icons">
            <img className="youtube-apps-icon" src="/icons/youtube-apps.svg" />
            <div className="toolkit">
              YouTube apps
            </div>
          </div>
          <div className="notifications-icon-div toolkit-icons">
            <img className="notifications-icon" src="/icons/notifications.svg" />
            <div className="notifications-count">
              3
            </div>
            <div className="toolkit">
              Notifications
            </div>
          </div>
          <div className="profile-icon-div toolkit-icons">
            <img className="profile-icon" src="/imagess//manik-mahna-channel.jpg" />
          </div>

        </div>
      </header>
    
    
    </>
  )
}

export default Header