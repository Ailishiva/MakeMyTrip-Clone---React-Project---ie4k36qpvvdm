import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Hotels from './Hotels';
import Trains from './Trains';
import Signinpage from './Signinpage';
import Signuppage from './Signuppage';
import Checkoutpage from './Checkoutpage';
function Router() {
  return (
    <div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Hotels" element={<Hotels />} />
      <Route path="/Trains" element={<Trains/>}/>
      <Route path='/Signin' element={<Signinpage/>}/>
      <Route path='/Signup' element={<Signuppage/>}/>
      <Route path='/Checkoutpage' element={<Checkoutpage/>}/>
    </Routes>

    </div>
  )
}

export default Router