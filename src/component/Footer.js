import React from 'react'
import styled from "styled-components"
import {GrFacebook, GrInstagram, GrTwitter} from "react-icons/gr"

const Footer = () => {
    return (
        <Container>
            <Wrapper>
               <Image  src="images/hotl.png"/>
                <Text>
                    <span1>Contacts</span1>
                    <Phone>
                        <span>Phone:</span>
                        <span>+2348186793482</span>
                    </Phone>
                    <Email> <span>Email:</span>
                        <span>Hotelbook@gmail.com</span></Email>
                    <Address><span>Address:</span>
                        <span>Bar. ahmed stree, orege, lagos</span></Address>
                </Text>
                {/* <Text>
                    <span1>Gallary</span1>
                    <Phone>
                        <span>Hotels</span>
                
                    </Phone>
                    <Email> <span>Facilities</span>
                      </Email>
                    <Address><span>Trusties</span>
                        </Address>
                </Text> */}
                <Social> <Icon/><Icon1/><Icon2/></Social>
            </Wrapper>
        </Container>
    )
}

export default Footer


const Container = styled.div`
width: 100%;
height: 300px;
margin-top:30px;
background-color:#004080;
display: flex;
justify-content: center;
align-items: center;
`
const Wrapper = styled.div`
width: 90%;
height:100%;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;


@media screen and (max-width:800) {
    display: flex;
    flex-direction: column;
}

`
const Image = styled.img`
width: 110px;
height: 110px;
object-fit: contain;
margin-top: 20px;
`
const Text = styled.div`
width: 30%;
display: flex;
flex-direction: column;
justify-content: space-around;

span1{
    color: white;
font-size:18px;
font-weight:normal;
margin-bottom: 5px;
flex-direction: column;
display: flex;
font-family: Georgia, 'Times New Roman', Times, serif;
}
`
const Phone = styled.div`
color: white;
font-size:15px;
font-weight:normal;
margin-bottom: 5px;
flex-direction: column;
display: flex;
font-family: Georgia, 'Times New Roman', Times, serif;
/* margin-left: 20px; */

span{
    margin-top:5px;
}

`
const Email = styled.div`
color: white;
font-size:15px;
font-weight:normal;
margin-bottom: 5px;
flex-direction: column;
display: flex;
font-family: Georgia, 'Times New Roman', Times, serif;
/* margin-left: 20px; */

span{
    margin-top:5px;
}
`
const Address = styled.div`
color: white;
font-size:15px;
font-weight:normal;
margin-bottom: 5px;
flex-direction: column;
display: flex;
font-family: Georgia, 'Times New Roman', Times, serif;
/* margin-left: 20px; */

span{
    margin-top:5px;
}
`
const Social = styled.div`
width: 150px;
display: flex;
justify-content: space-between;
`
const Icon = styled(GrFacebook)`
color: white;
font-size:30px;
font-weight:bold;

&:hover {
    width: 40px;
height:40px;
border-radius:20px;
color: #ff9200;
transition: all 350ms;
background-color: white;
cursor: pointer;
}
`
const Icon1 = styled(GrInstagram)`
color: white;
font-size:30px;
font-weight:bold;

&:hover {
    width: 40px;
height:40px;
border-radius:20px;
color: #ff9200;
background-color: white;
transition: all 350ms;
cursor: pointer;
}
`
const Icon2 = styled(GrTwitter)`
color: white;
font-size:30px;
font-weight:bold;

&:hover {
    width: 40px;
height:40px;
border-radius:20px;
color: #ff9200;
transition: all 350ms;
background-color: white;
cursor: pointer;
}
`
const Hold = styled.div`
width: 100px;
height: 100px;
`