import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Tours from '../pages/Tours'
import TourDetails from '../pages/TourDetails'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SearchResultList from '../pages/SearchResultList'
import ThankYou from '../pages/ThankYou'
import About from '../pages/About'
import Intrest from '../pages/Intrest'
import Places from '../pages/Places'
import Services from '../services/ServiceList'
import BookingForm from '../pages/BookingForm'
import BookingForm1 from '../pages/BookingForm1'
import LogoutButton from '../pages/Logout'
const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/tours/:id' element={<TourDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/tours/search' element={<SearchResultList />} />
        <Route path='/about' element={<About />} />
        <Route path='/intrest' element={<Intrest />} />
        <Route path='/places' element={<Places />} />
        <Route path='/services' element={<Services />} />
        <Route path='/booking-form' element={<BookingForm />} />
        <Route path='/booking-form1' element={<BookingForm />} />
        <Route path='/logout' element={<LogoutButton />} />
      </Routes>
    </div>
  )
}

export default Routers
