import React, { Component } from 'react'
import logo from '../images/logo.png'
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to="/">
                            <img src={logo} alt="Felony Friendly Jobs"/>
                        </Link>
                        <button type="button" className="nav-btn" onClick={this.handleToggle}>
                            <FaAlignRight className="nav-icon"/>
                        </button>
                    </div>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                    <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/Jobsearch">JOB SEARCH</Link>
                        </li>
                        {/* <li>
                            <Link to="/Addresume">ADD RESUME</Link>
                        </li> */}
                        <li>
                            <Link to="/Myjob">MY JOB</Link>
                        </li>
                        <li>
                            <Link to="/Myprofile">MY PROFILE</Link>
                        </li>
                        {/* <li>
                            <Link to="/">LOGOUT</Link>
                        </li> */}
                        <li>
                            <Link to="/" className="btn-primary">LOGOUT</Link>
                            {/* <button className="btn-primary">LOGOUT</button> */}
                        </li>
                    </ul>
                </div>
            </nav>
            
        )
    }
}
