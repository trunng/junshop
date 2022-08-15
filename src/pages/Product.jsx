import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'
import GoToTop from '../gototop'

const Container = styled.div`
`

const Wrapper = styled.div`
    display: flex;
    padding: 50px;
    ${mobile({padding: "10px", flexDirection: "column"})}
`

const ImgCon = styled.div`
    flex: 1;
`

const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})}
`

const InfCon = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({padding: "10px"})}
`

const Title = styled.h1`
    font-weight: 200;
`

const Desc = styled.p`
    margin: 20px 0px;
`

const Price = styled.span`
    font-weight: 100;
    font-size: 40px;
`

const FilCon = styled.div`
    width: 50%;
    display: flex;
    justify-content: space-between;
    margin: 30px 0px;
    ${mobile({width: "100%"})}
`

const Fil = styled.div`
    display: flex;
    align-items: center;
`

const FilTit = styled.span`
    font-size: 20px;
    font-weight: 200;
`

const FilCol = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
    margin: 0px 5px;
`

const FilSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`

const SizeOpt = styled.option`

`

const AddCon = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`

const AmountCon = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`

const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`

const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
`

const Product = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <ImgCon>
                <Image src="https://img.joomcdn.net/d6df7361b0adc499e055e2fddff466f80be9ea95_original.jpeg"/>
            </ImgCon>
            <InfCon>
                <Title>Joo Jun Jacket</Title>
                <Desc>
                - Material: Canvas blended Poly <br/>
                - Texture: Printed directly on the product  <br/>
                - Size: 40cm X 30cm X 12cm <br/>
                - Shockproof compartment fits 15 inch laptop <br/>
                - Brand: JUN. <br/>
                - Production: Vietnam <br/>
                - Colors and textures are designed by the design team JunJun <br/>
                </Desc>
                <Price>$20,00</Price>
                <FilCon>
                    <Fil>
                        <FilTit>Color</FilTit>
                        <FilCol color = "darkblue"/>
                        <FilCol color = "beige"/>
                        <FilCol color = "lightpink"/>
                    </Fil>
                    <Fil>
                        <FilTit>Size</FilTit>
                        <FilSize>
                            <SizeOpt>S</SizeOpt>
                            <SizeOpt>M</SizeOpt>
                            <SizeOpt>L</SizeOpt>
                            <SizeOpt>XL</SizeOpt>
                        </FilSize>
                    </Fil>
                </FilCon>
                <AddCon>
                    <AmountCon>
                        <Remove/>
                        <Amount>1</Amount>
                        <Add/>
                    </AmountCon>
                    <Link to = "/cart" style={{textDecoration:"none",color:"inherit"}}><Button>ADD TO CART</Button></Link>
                </AddCon>
            </InfCon>
        </Wrapper>
        <Newsletter/>
        <Footer/>
        <GoToTop/>
    </Container>
  )
}

export default Product