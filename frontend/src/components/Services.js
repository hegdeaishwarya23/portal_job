import React, { Component } from 'react'
import Title from './Title'
import {TiDocumentText} from 'react-icons/ti'
import {FaSearchPlus} from 'react-icons/fa'
import {GiClick} from 'react-icons/gi'
export default class Services extends Component {
    state={
        services:[
            {
                icon: <TiDocumentText />,
                title: "Upload your resume",
                info: 'Create your resume and generate a professional resume that you can use on Felony-friendly Jobs and elsewhere.'
            },
            {
                icon:<FaSearchPlus/>,
                title:"Search for the job",
                info:"We find job opportunities that fit your interests and skills, from great companies interested in considering you."
            },
            {
                icon:<GiClick/>,
                title:"apply and get hired",
                info:'Felony-friendly Jobs makes it easier to apply to positions online with just a few clicks and have a successful interview.'
            }

        ]
    }
    render() {
        return (
            <section className="services">
                <br/>
               <Title title="Looking for a job with a criminal record? You are not alone."/>
            <div className="services-center">
                {this.state.services.map((item,index)=>{
                    return(
                        <article key={index} className="services">
                            <span className="animated slideInDown">{item.icon}</span>
                            <h6 className="animated slideInRight">{item.title}</h6>
                            <p className="animated slideInLeft">{item.info}</p>
                        </article>
                    )
                })}
                 
            </div>
            </section>
        )
    }
}
