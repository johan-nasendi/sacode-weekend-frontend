import React from 'react'
import Footer from '../Footer'
import HeroSection from '../HeroSection'
import Sidebar from '../Sidebar'
import Todo from '../Todo'
import NavbarTodo from '../Todo/Navbar'

const Dashboard = () => {
  return (

      <>
      <Sidebar/>
      <NavbarTodo/>
      <HeroSection/>
      <Todo/>
      <Footer/>
      </>
  )
}

export default Dashboard