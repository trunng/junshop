import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import { Add, Remove } from '@material-ui/icons'
import { mobile } from '../responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`

`

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({padding: "10px"})}
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props=>props.lb === "filled" && "none"};
  background-color: ${props=>props.lb === "filled" ? "black" : "transparent"};
  color: ${props=>props.lb === "filled" && "white"};
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})}
`

const TopTexts = styled.div`
${mobile({display: "none"})}
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const Info = styled.div`
  flex: 3;
`

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({flexDirection: "column"})}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const Name = styled.span`
  
`

const IDD = styled.span`
  
`

const Color = styled.div`
  width: 20px; height: 20px;
  border-radius: 50%;
  background-color: ${props=>props.color};
`

const Size = styled.span`
  
`

const PriceDetail = styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const AmountCon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const Amount = styled.span`
  font-size: 24px;
  margin: 5px;
  ${mobile({margin: "5px 15px"})}
`

const Price = styled.span`
  font-size: 30px;
  font-weight: 200;
  ${mobile({marginBottom: "20px"})}
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const SumTit = styled.h1`
  font-weight: 200;
`

const SumItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props=>props.type==="total" && 500};
  font-size: ${props=>props.type==="total" && "24px"}
`

const SumText = styled.span`
  
`

const SumPrice = styled.span`
  
`

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor: pointer;
`

const Cart = () => {
  return (
    <Container>
      <Announcement/>
      <Navbar/>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton><Link to = "/product-list" style={{textDecoration:"none",color:"inherit"}}>CONTINUE SHOPPING</Link></TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton lb = "filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://cdn.vuahanghieu.com/unsafe/0x900/left/top/smart/filters:quality(90)/https://admin.vuahanghieu.com/upload/product/2021/05/giay-sneaker-mlb-bigball-chunky-mono-lt-mau-den-size-260-60a1f311d270c-17052021113737.jpg"/>
                <Details>
                  <Name><b>Product:</b> MLJ JUN BOSTON SHOES</Name>
                  <IDD><b>ID:</b> 20520334</IDD>
                  <Color color="black"></Color>
                  <Size><b>Size:</b> 41.5</Size>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <AmountCon>
                  <Add/>
                  <Amount>2</Amount>
                  <Remove/>
                </AmountCon>
                <Price>$380</Price>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://product.hstatic.net/200000384787/product/ao_thun_co_co_mlb_monogram_allover_new_york_yankees_31tsqm131-50n__1__bf5b8e4150484b4eb89d3a677a3ecd17_master.jpg"/>
                <Details>
                  <Name><b>Product:</b> MLJ JUN COLLARED SHIRT</Name>
                  <IDD><b>ID:</b> 21523340</IDD>
                  <Color color="gray"></Color>
                  <Size><b>Size:</b> XL</Size>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <AmountCon>
                  <Add/>
                  <Amount>1</Amount>
                  <Remove/>
                </AmountCon>
                <Price>$175</Price>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SumTit>ORDER SUMMARY</SumTit>
            <SumItem>
              <SumText>Subtotal</SumText>
              <SumPrice>$555</SumPrice>
            </SumItem>
            <SumItem>
              <SumText>Estimated Shipping</SumText>
              <SumPrice>$5.60</SumPrice>
            </SumItem>
            <SumItem>
              <SumText>Shipping Discount</SumText>
              <SumPrice>$-5.60</SumPrice>
            </SumItem>
            <SumItem type="total">
              <SumText>Total</SumText>
              <SumPrice>$555</SumPrice>
            </SumItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart