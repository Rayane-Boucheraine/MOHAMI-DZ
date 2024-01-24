import HomePage from '../src/Pages/HomePage/HomePage'
import SignIn from './Pages/SignIn/SignIn'
import Recharche from '../src/Pages/Recharche/Recharche'
import ProfileAvocat from './Pages/ProfileAvocat/ProfileAvocat'
import SignUp from './Pages/SignUp/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route index element={<HomePage />}/>
              <Route path='/Profile' element={<ProfileAvocat />}/>
              <Route path='/Cabinets' element={<Recharche />}/>
              <Route path='/SignIn' element={<SignIn />}/>
              <Route path='/SignUp' element={<SignUp />}/>
          </Routes>
      </BrowserRouter>
  )
}

export default App