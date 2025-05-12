"use client"
import React from 'react'

import SideBarWrapper from '../../layouts/SideBarWrapper'
import RequestsTable from '../../components/RequestsTable'

const page = () => {
    return (
        <>
            <SideBarWrapper>
                <RequestsTable />
            </SideBarWrapper>
        </>
    )
}

export default page