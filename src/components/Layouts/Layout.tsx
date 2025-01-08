import { ChildrenProvider } from '@/types'
import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout: React.FC<ChildrenProvider> = ({ children }) => {
  return (
    <div>
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
        }}>
        <Navbar />
        <Box
          sx={{
            flex: 1,
            
          }}>
          {children}
        </Box>
        <Footer />
      </Box>
    </div>
  )
}

export default Layout