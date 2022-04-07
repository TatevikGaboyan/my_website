import './App.css';
// import Menu from "./Component/menu"
import Menu_1 from "./Component/menu_1"
import Home from "./Component/home"
import About from "./Component/about"
import Awards from "./Component/awards"
import Reviews from "./Component/reviews"
import Timetable from "./Component/timetable"
import Events from "./Component/events"
import Offers from "./Component/offers"
import Contacts from "./Component/contacts"
import Footer from "./Component/footer"
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
import Layout from './Component/layout';


// export default function A(){
//   return(
//     <div>
//       <Menu/>
//       <Body/>
//       <Foto_gallery/>


//     </div>
//   )

// }

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



