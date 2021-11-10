import React from 'react'
import Nav from '../ui/Nav'

const Layout = ({children}) => {
    return (
        <>
            <Nav />
            <main className="main-content">
                {children}
            </main>
        </>
    )
}

export default Layout
