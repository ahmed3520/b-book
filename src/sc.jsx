import React from 'react'
import './sc.css'
import {faEyeSlash} from '@fortawesome/free-solid-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Sc = () => {

    return (
        <div className="main" style={{backgroundColor:'#f0f2f5'}}>
            <di className="includer">
            <div className="left">
                <form className="login-form">
                    <h1>Sign In</h1>
                    <div className="textb">
                        <input type="text" required></input>
                        <div className="placeholder">
                            Email
                        </div>
                        </div>
                        <div className="textb">
                            <input type="password" required></input>
                            <div className="placeholder">Password</div>
                            <div className="show-password">
                                
                                <FontAwesomeIcon icon={faEyeSlash}/>
                            </div>
                        </div>
                        <button className="btn fas fa-arrow-right" disabled>
                        <FontAwesomeIcon icon={faArrowRight}/>
                        </button>
                        <a href="#">Can't Sign in?</a>
                        <a href="#">Create Account</a>
                </form>
            </div>
            <div className="right">

            </div>
            </di>
        </div>
    )
}

export default Sc
