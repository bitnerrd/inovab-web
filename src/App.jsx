import SignUp from './pages/signUp/SignUp'
import LogIn from './pages/login/LogIn'
import ContactUs from './pages/contactUs/ContactUs'
import FooterOne from './components/footer/FooterOne'
import FooterTwo from './components/footer/FooterTwo'
import Navbar from './components/header/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/home/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout/>}>
            <Route index element={<Home/>}/>
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
