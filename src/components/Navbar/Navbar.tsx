"use client"

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { AppBar, Box, Container, Toolbar, FormControl } from '@mui/material'

const Navbar = () => {
  const router = useRouter()
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [showClearIcon, setShowClearIcon] = useState<string>("none")

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleChange = (event: React.MouseEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value
    setSearchQuery(value)
    setShowClearIcon(value ? "block" : "none")
  }

  const handleClick = () => {
    setSearchQuery("")
    setShowClearIcon("none")
  }

  const handleSearchKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && searchQuery.trim()) {
      event.preventDefault()
      router.push(`/search/${encodeURIComponent(searchQuery)}`)
    }
  }

  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Image
            width={100}
            height={100}
            src={"/assets/logo.png"}
            alt="logo"
            style={{
              position: "relative",
              zIndex: 1,
            }}
          />
          <Box></Box>
          <Box></Box>

          <FormControl>
            
          </FormControl>
          <Box></Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar