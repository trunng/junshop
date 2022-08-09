import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container><Link to = "/product-list" style={{textDecoration:"none",color:"inherit"}}>
        Super Deal Free Shipping on Orders Over $50
    </Link></Container>
  )
  }

export default Announcement