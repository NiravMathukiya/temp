"use client"
import React from 'react'
import RequestsTable from "@/components/RequestsTable"
import SideBarWrapper from '../../layouts/SideBarWrapper'

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