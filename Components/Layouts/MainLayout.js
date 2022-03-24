import React from 'react'
import Footer from '../Footer';
import Navbar from '../Navbar';

const MainLayout = ({ children }) => {
  return (
        <>
            <Navbar/>
                <div className="main-layout">
                    { children }
                </div>
            <Footer />
        </>
    )
}

export default MainLayout;