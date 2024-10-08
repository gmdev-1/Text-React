import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (

        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}` && `navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.brand}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                        </li>
                        <li className="nav-item">
                            {/* <a className="nav-link" href="/about">{props.aboutText}</a> */}
                        </li>
                    </ul>
                    <div className="form-check form-switch mx-3">
                        <input className="form-check-input" onClick={props.toggleSMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.smode === 'light'?'success':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Success Mode</label>
                    </div>
                    <div className="form-check form-switch mx-3">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Warning Mode</label>
                    </div>

                    <div className="form-check form-switch mx-3">
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>

    )
}

Navbar.propTypes = {
    brand: PropTypes.string.isRequired,
    aboutText: PropTypes.string.isRequired
};
