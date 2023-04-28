import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import Shop from './Shop'

export default function Main(){
    return(
        <div>
            <Routes>
                <Route path ="/" element= {<Home/>}/>
                <Route path ="/contact" element={<Contact/>}/>
                <Route path ="/shop" element={<Shop/>}/>
            </Routes>
        </div>
    )
}