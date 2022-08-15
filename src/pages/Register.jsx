import styled from 'styled-components'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
import GoToTop from '../gototop'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("https://images.pexels.com/photos/4958618/pexels-photo-4958618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2") center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
`

const Wrapper = styled.div`
    padding: 20px;
    width: 40%;
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
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
`

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    &:hover{font-weight:600}
`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder = "name"/>
                <Input placeholder = "last name"/>
                <Input placeholder = "username"/>
                <Input placeholder = "email"/>
                <Input placeholder = "password"/>
                <Input placeholder = "confirm password"/>
                <Agreement>By creating an account, I consent to the processing of
                    my personal data in accordance with the <b>PRIVACY POLICY</b>.
                </Agreement>
                <Button><Link to = "/login" style={{textDecoration:"none",color:"inherit"}}>CREATE</Link></Button>
            </Form>
        </Wrapper>
        <GoToTop/>
    </Container>
  )
}

export default Register