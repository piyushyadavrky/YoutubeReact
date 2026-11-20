import React, { useState } from "react"

import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import VideoGrid from "./components/VideoGrid"


function App() {

  let [isSidebarOpen, setIsSidebarOpen]= useState(true);
  let [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Header 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      
        onToggleSidebar={() => setIsSidebarOpen(prev => !prev)} 
      />
      <Sidebar isOpen={isSidebarOpen} />
      <VideoGrid  
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      
        isSidebarOpen={isSidebarOpen} 
      />
    </>
  )
}

export default App