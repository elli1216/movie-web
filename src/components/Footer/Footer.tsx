import { Box, Typography } from '@mui/material'
import React from 'react'
import { FB, Instagram, Twitter, Youtube } from '../../utils/icons'

const Footer = () => {
  return (
    <Box
    sx={{
      backgroundColor: "#141414",
      color: "rgba(255, 255, 255, 0.5)",
      padding: "5r0 em 3rem 5rem",
    }}
    >
      <Box>
        <FB />
        <Instagram />
        <Twitter />
        <Youtube />
      </Box>
      <Box>
        <Box>
          <Typography>Audio Description</Typography>
          <Typography>Investor Relationship</Typography>
          <Typography>Policy</Typography>
          <Typography>Contact Us</Typography>
        </Box>
        <Box>
          <Typography>Help Center</Typography>
          <Typography>Jobs</Typography>
          <Typography>Legal Notices</Typography>
          <Typography>Ad Choices</Typography>
        </Box>
        <Box>
          <Typography>Gift Card</Typography>
          <Typography>MovieHub Shop</Typography>
          <Typography>Cookies Preference</Typography>
        </Box>
        <Box>
          <Typography>Media Center</Typography>
          <Typography>Terms of Use</Typography>
          <Typography>Impressum</Typography>
        </Box>
      </Box>
      <Box>
        <Typography>Service Code</Typography>
      </Box>
      <Box>2015-2024 MovieHub, Inc.</Box>
    </Box>
  )
}

export default Footer