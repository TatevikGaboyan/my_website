import './App.css';
import React from 'react';
import Menu from "./Component/menu"
import Home from "./Component/home"
import About from "./Component/about"
import Awards from "./Component/awards"
import Reviews from "./Component/reviews"
import Timetable from "./Component/timetable"
import Events from "./Component/events"
import Offers from "./Component/offers"
import Contacts from "./Component/contacts"
import Footer from "./Component/footer"
import Layout from './Component/layout'
// import Body from "./Component/body"
// import Foto_gallery from "./Component/foto_gallery"
// import HomeIcon from '@mui/icons-material/Home';
import axios from 'axios'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';



export default function I() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Home/>}/>
          <Route path='about' element={<About />} >
            <Route path='awards' element={<Awards />} />
            <Route path='reviews' element={<Reviews />} />
          </Route>
          <Route path='timetable' element={<Timetable />} />
          <Route path='events' element={<Events />} />
          <Route path='offers' element={<Offers />} />
          <Route path='contacts' element={<Contacts />} />
        </Route>
      </Routes>
    </Router>
  )
}


// export default function A(){
//   return(
//     <div>
//       <Menu/>
//       <Layout/>
//       <Home/> 
//       <About/>
//       <Awards/>
//       <Reviews />
//       <Timetable />
//       <Events />
//       <Offers />
//       <Contacts />
//       <Footer/>
//     </div>
//   )
// }

// export default function B(){
//   return(
//     <div>
//       <h1>Hello</h1>
//       {/* <Link to='hello'>Hello</Link>
//    */}
//     </div>
//   )
// }