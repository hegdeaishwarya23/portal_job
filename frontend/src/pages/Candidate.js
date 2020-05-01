import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
export default function Candidate() {
    return (
        <Hero hero="candidateHero">
             <Banner title='WELCOME TO DASHBOARD'>
                <Link to="/Can_signup" className="btn-primary">
                    Signup for free...
                </Link>

            </Banner>
        </Hero>
    )
}
    