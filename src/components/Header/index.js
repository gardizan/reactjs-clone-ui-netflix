import React from 'react'
import './styles.css'

const Header = ({ headerBlack }) => {
    return (
        <header className={headerBlack ? 'alteracao--header' : ''}>
            <div className='logo'>
                <a href='/'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt='Logo Netflix' />
                </a>
            </div>
            <div className='user'>
                <a href='/'>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Usuário' />
                </a>
            </div>
        </header>
    )
}

export default Header