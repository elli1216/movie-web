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
      <Box
        sx={{
          display: { sm: "flex" },
          color: "white",
          flexDirection: { md: "row" },
          gap: "3rem",
          marginBottom: "1rem",
        }}
      >
        <FB style={{ fontSize: "2rem" }} />
        <Instagram style={{ fontSize: "2rem" }} />
        <Twitter style={{ fontSize: "2rem" }} />
        <Youtube style={{ fontSize: "2rem" }} />
      </Box>
      <Box
      sx={{
        display: { sm: "flex" },
        justifyContent: { sm: "space-between" },
      }}
      >
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
        <Typography
          sx={{
            borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
            padding: "0.2rem 0.4rem",
            marginY: "2rem",
            width: "7rem"
          }}
        >Service Code</Typography>
      </Box>
      <Box>2015-2024 MovieHub, Inc.</Box>
    </Box>
  )
}

export default Footer