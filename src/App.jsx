import React from 'react'
import ThemeProvider from './Components/ThemeProvider'
import DevInfo from './Components/./DevInfo/DevInfo'
import DevSkills from './Components/DevSkills/DevSkills'
import Motivation from './Components/Motivations/Motivation'
import Experiences from './Components/Experiences/Experiences'

function App() {
  return (
    <ThemeProvider>
      <DevInfo />
      <DevSkills />
      <Motivation />
      <Experiences />
    </ThemeProvider>
  )
}

export default App
