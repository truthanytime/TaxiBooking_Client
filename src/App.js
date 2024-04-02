import React, { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { getStripeKey } from './res/utils';

import { BookingPage, Contact, Homepage, Navbar, PaymentAdditional, ProfilePage, SearchPage } from 'components';
import SignIn from 'components/AuthPage/sign-in';
import ResetPassword from 'components/AuthPage/reset-password';
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const stripePromise = loadStripe(getStripeKey());
const options = {
  fonts: [{
    cssSrc: 'https://fonts.googleapis.com/css?family=Montserrat:400,500',
  }]
};

const App = () => {

  const { pathname } = useLocation();
  const navBaneList = ['/sign-in', '/reset-password']
  const [isHideNav, setIsNav] = useState(false);

  useEffect(() => {
    setIsNav(navBaneList.some(item => pathname.includes(item)))
  }, [pathname])

  return (
    <Elements stripe={stripePromise} options={options}>
      {/* <ToastContainer /> */}
      {!isHideNav && <Navbar />}
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/car-cart" element={<SearchPage />} />
        <Route exact path="/car-cart/:id" element={<PaymentAdditional />}></Route>
        <Route exact path="/booking" element={<BookingPage />}></Route>
        <Route exact path="/profile" element={<ProfilePage />}></Route>
        <Route exact path="/sign-in" element={<SignIn />}></Route>
        <Route exact path="/reset-password" element={<ResetPassword />}></Route>
        <Route exact path="/reset-password/:token" element={<ResetPassword />}></Route>
      </Routes>
    </Elements>
  )
}

export default App
