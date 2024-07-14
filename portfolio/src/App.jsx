import Nav from "./Nav"
import Banner from "./Banner"
import Skills from "./Skills"
import Footer from "./Footer"
import Header from "./Header/Header"
import Profile from "./Profile/Profile"
import Projects from "./Projects"
import Education from "./Education"

function App(){
  
  const qulifications=[
    {"name":"MCA","university":"MG","grade":"o"},
    {"name":"BCA","university":"MG","grade":"o"},
    {"name":"BBA","university":"MG","grade":"o"},
    {"name":"MCA","university":"MG","grade":"o"},
    {"name":"BCA","university":"MG","grade":"o"},
    {"name":"BBA","university":"MG","grade":"o"},
]
const profiletitle="FullStack Developer"


  return(

    <div>
      <Nav></Nav>
      <Header></Header>
      <Profile profiletitle={profiletitle}></Profile>
       <Banner></Banner>
       <Skills></Skills>
       <Projects></Projects>
       <Education qulifications={qulifications}></Education>
       <Footer></Footer>
    </div>
  )


}
export default App