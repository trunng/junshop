import { Badge } from '@material-ui/core'
import { AddShoppingCartOutlined, Search } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
  height: 60px;
  ${mobile({height: "50px"})}
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})}
`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center
`

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({fontSize: "24px"})}
`

const SearchContainer = styled.span`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({width: "50px"})}
`

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({display: "none"})}
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({justifyContent: "center", flex: 2})}
`
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  &:hover{
    color: teal;
  }
  ${mobile({fontSize: "12px", marginLeft: "10px"})}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>
            EN
          </Language>
          <SearchContainer>
            <Input placeholder = "Search"/>
            <Search style = {{ fontSize: 16, color: "gray" }} />
          </SearchContainer>
        </Left>
        <Center><Link to = "/" style={{textDecoration:"none",color:"inherit"}}><Logo>JUN.</Logo></Link></Center>
        <Right>
          <MenuItem><Link to = "/register" style={{textDecoration:"none",color:"inherit"}}>REGISTER</Link></MenuItem>
          <MenuItem><Link to = "/login" style={{textDecoration:"none",color:"inherit"}}>SIGN IN</Link></MenuItem>
          <MenuItem><Link to = "/cart" style={{textDecoration:"none",color:"inherit"}}>
          <Badge badgeContent={2} color="primary">
            <AddShoppingCartOutlined/>
          </Badge></Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar