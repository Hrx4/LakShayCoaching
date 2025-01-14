import React from 'react'
import MainBanner from '../components/Main Banner/MainBanner'
import myVideo from '../assets/images/free-tutorial.mp4'
import SearchSection from '../components/SearchSection/SearchSection'
import NotesSection from '../components/NotesSection/NotesSection'
import Footer from '../components/Footer/Footer'
const FreeTutorial = () => {
  return (
    <div>
      <MainBanner
        heading6="Home >"
        heading2a="Free"
        heading2b="Tutorial"
        videoSource={myVideo}
        // buttonText="Discover more" // Provide buttonText prop if needed
        showFeaturesSection={false}
      />
      <SearchSection/>
      <NotesSection/>
      <Footer/>
    </div>
  )
}

export default FreeTutorial