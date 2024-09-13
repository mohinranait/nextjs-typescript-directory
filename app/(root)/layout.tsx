import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main className='bg-bg-themne'>
                {children}
            </main>
            <Footer />
        </>
    )
}

export default MainLayout