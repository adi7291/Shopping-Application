import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function ShayredLayout({ cart }) {
    return (
        <>
            <Header cart={cart} />

            <Outlet />
        </>
    )
}

export default ShayredLayout