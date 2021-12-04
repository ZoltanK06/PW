import styled from 'styled-components';

export const Programs = styled.div``

export const MessagesContainer = styled.div`
  min-height: 100vh;
  background: #191919;
  color: #fff;
  padding: 20px;
`;

export const MessagesHeading = styled.div`
  font-size: 45px;
  text-align: center;
  margin-top: 45px;
  margin-bottom: 45px;
  margin-left: 20px;
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const  MessagesWrapper = styled.div`
`

export const MessageList = styled.div`
    width: 185vh;
    margin-left: 45px;
`

export const MessageBox = styled.div`
  flex: 2;
  display: flex;
  box-shadow: 3px 4px #D64933;
  margin-bottom: 50px;
  
`

export const MessageImage = styled.img`
  height: 180px;
  width: 120px;
  margin-left: 25px;
  margin-bottom: 25px;
  margin-top: 25px;
  border-radius: 25px;
`

export const MessageInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 550px;
  margin-left: 15px;
`

export const MessageID = styled.span``

export const ClientName = styled.span``

export const ClientDesc = styled.span`
text-align: justify;
`

export const MessageStatus = styled.span``

export const ButtonBox = styled.div`
padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const RemoveButton = styled.button`
  font-size: 1rem;
  padding: 0.25rem 1rem;
  border: none;
  background: #92DCE5;
  color: #000;
  transition: 0.2 ease-out;
  border-radius: 4px;
  outline: none;
  cursor: pointer;    
  text-decoration: none;
  margin-left: 400px;
  margin-right: 50px;
  margin-top: 40px;
  height: 35px;
  width: 175px;

&:hover {
  background: #fff;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: #000;
}
`

export const UpdateButton = styled.button`
  font-size: 1rem;
  padding: 0.25rem 1rem;
  border: none;
  background: #92DCE5;
  color: #000;
  transition: 0.2 ease-out;
  border-radius: 4px;
  outline: none;
  cursor: pointer;    
  text-decoration: none;
  margin-left: 400px;
  margin-right: 50px;
  margin-top: 50px;
  margin-bottom: 50px;
  height: 35px;
  width: 175px;

&:hover {
  background: #fff;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: #000;
}
`



export const CheckoutBox = styled.div`
  flex: 1;
  border: 2px solid #D64933;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
  margin-left: 100px;
  margin-top: 5px;
`

export const CheckOutTitle = styled.h1`
  font-weight: 200;
  margin-left: 60px;
`


export const CheckOutItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`

export const CheckOutItemText = styled.span``
export const CheckOutItemPrice = styled.span``

export const CheckOutButton = styled.button`
font-size: 1rem;
padding: 0.25rem 1rem;
border: none;
background: #92DCE5;
color: #000;
transition: 0.2 ease-out;
border-radius: 4px;
outline: none;
cursor: pointer;    
text-decoration: none;
margin-left: 100px;
margin-right: 50px;
margin-top: 30px;
height: 35px;
width: 175px;

&:hover {
background: #fff;
transition: 0.2s ease-out;
cursor: pointer;
color: #000;
}
`