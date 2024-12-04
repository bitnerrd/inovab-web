import SignUp from './pages/signUp/SignUp'
import LogIn from './pages/login/LogIn'
import ContactUs from './pages/contactUs/ContactUs'
import FooterOne from './components/footer/FooterOne'
import FooterTwo from './components/footer/FooterTwo'
import Navbar from './components/header/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/home/Home'
import TransparencyStability from './pages/transparency/TransparencyStability'
import BuildCurrency from './pages/buildCurrency/BuildCurrency'
import News from './pages/news/News'
// import Facts from './pages/facts/Facts'
import StoriesAndInterviews from './pages/storiesAndInterviews'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>}/>
            <Route path="/transparency" element={<TransparencyStability/>}/>
            <Route path="/about" element={<BuildCurrency/>}/>
            <Route path="/media" element={<News/>}/>
            {/* <Route path="/facts" element={<Facts/>}/> */}
            <Route path="/news" element={<StoriesAndInterviews/>}/>
          </Route>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/login" element={<LogIn/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
