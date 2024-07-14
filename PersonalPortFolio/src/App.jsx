import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Aboutme from './Aboutme'
import Skills from './Skills'
import Qualification from './Qualification'
import Service from './Service'
import Projects from './Projects'
import Footer from './Footer'


function App() {

  const user={"name":"Abhirami","degree":"MCA","phone":"6282953492",
    "dob":"01-01-1999","experiance":"5 year","email":"abhi@gmail.com"}

    const skillsets=[{"name":"python","percentage":"99%"},
      {"name":"javascript","percentage":"95%"},
      {"name":"django","percentage":"99%"},
      {"name":"react","percentage":"95%"},
      {"name":"drf","percentage":"95%"},
      {"name":"bootstrap","percentage":"95%"}


    ]
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Aboutme user={user}></Aboutme>
      <Skills skillsets={skillsets}></Skills>
      <Qualification></Qualification>
      <Service></Service>
      <Projects></Projects>
      <Footer></Footer>

    </div>
  )
}

export default App
