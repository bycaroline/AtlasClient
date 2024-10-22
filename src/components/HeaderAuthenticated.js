import React from 'react'
import Logout from './Logout'
import { Link } from 'react-router-dom'

function HeaderAuthenticated() {
    return (

        <header>
            <div class="collapse bg-dark" id="navbarHeader">
            </div>
            <div class="navbar navbar-dark bg-dark shadow-sm">
                <div class="container">
                    <a href="#" class="navbar-brand d-flex align-items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" aria-hidden="true" class="me-2" viewBox="0 0 24 24"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></svg>
                        <strong>Våra husdjur</strong>
                    </a>
                    <Link to="/startsida" style={{ textDecoration: 'none' }}>
                        <strong style={{ color: 'white', textAlign: 'right' }}>Startsida</strong>
                    </Link>
                    <Link to="/min-profil" style={{ textDecoration: 'none' }}>
                        <strong style={{ color: 'white', textAlign: 'right' }}>Min profil</strong>
                    </Link>
                    <Logout />
                </div>
            </div>
        </header>
    )
}

export default HeaderAuthenticated