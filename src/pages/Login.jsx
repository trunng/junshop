import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/12598765/pexels-photo-12598765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: white;
    ${mobile({width: "75%"})}
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
    &:hover{font-weight:600}
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Lin = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    color: gray;
    &:hover{text-decoration: underline;}
    cursor: pointer;
`

const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder = "username"/>
                <Input placeholder = "password"/>
                <Button><Link to = "/" style={{textDecoration:"none",color:"inherit"}}>LOGIN</Link></Button>
                <Lin>DO NOT YOU REMEMBER THE PASSWORD?</Lin>
                <Link to = "/register" style={{textDecoration:"none",color:"inherit"}}><Lin>CREATE A NEW ACCOUNT</Lin></Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login