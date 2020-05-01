import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
export default function Employee() {
    return (
        <Hero hero="candidateHero">
        <Banner title='WELCOME TO DASHBOARD'>
           <Link to="/Emp_signup" className="btn-primary">
               Signup
           </Link>

       </Banner>
   </Hero>
    )
}
