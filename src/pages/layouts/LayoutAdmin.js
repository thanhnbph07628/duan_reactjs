import React from 'react'
import Header from '../../components/Admin/Header/Header'
import Footer from '../../components/Admin/Footer/Footer'
import Sidebar from '../../components/Admin/Sidebar/Sidebar'
import '../../styleAdmin/css/sb-admin-2.min.css'

function LayoutAdmin({children}) {
    return (
        <div className="admin-page">
        <div id="wrapper">
            <Sidebar />
            <div id="content-wrapper" className="d-flex flex-column">
                <div id="content">
                    <Header />
                    <div className="container-fluid">
                        {children}
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    </div>
    )
}

export default LayoutAdmin
