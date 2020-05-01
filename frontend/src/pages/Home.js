import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import Jobtype from '../components/Jobtype'
export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="MISDEMEANOR AND FELONY-FRIENDLY JOBS"
             subtitle="Connecting you with great companies that offer second chance
             jobs for people with criminal records.">
                
            </Banner>
        </Hero>
        <Services/>
        <br/><br/><br/>
        <Jobtype/>
        <br/><br/><br/>
        </>
    )
}
