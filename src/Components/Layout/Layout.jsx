import React from 'react'
import MainNavigation from './MainNavigation'

const Layout = (props) => {
    return (
        <React.Fragment>
            <MainNavigation/>
            <main className="dark:bg-gray-800 dark:text-gray-100 ">{props.children}</main>
        </React.Fragment>
    )
}

export default Layout
