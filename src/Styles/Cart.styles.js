import styled from 'styled-components';

export const Programs = styled.div``

export const ProgramsContainer = styled.div`
  min-height: 100vh;
  background: #191919;
  color: #fff;
  padding: 20px;
`;

export const ProgramsHeading = styled.div`
  font-size: 45px;
  text-align: center;
  margin-top: 45px;
  margin-bottom: 45px;
  margin-left: 20px;
`

export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 80px;
  margin-top: 25px;
`;

export const TopButton = styled.button`
font-size: 1rem;
padding: 0.75rem 3.50rem;
border: none;
background: #92DCE5;
color: #000;
transition: 0.2 ease-out;
border-radius: 4px;
outline: none;
cursor: pointer;    
text-decoration: none;
margin-left: 50px;
margin-right: 50px;

&:hover {
  background: #fff;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: #000;
}
`;

export const TopText = styled.span`
  cursor: pointer;
  margin: 0px 10px;
  font-size: 15px;
  margin-right: 40px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ProgramWrapper = styled.div`
`

export const ProgramList = styled.div`
    width: 135vh;
`

export const ProgramBox = styled.div`
  flex: 2;
  display: flex;
  box-shadow: 3px 4px #D64933;
  margin-bottom: 50px;
  
`

export const ProgramImage = styled.img`
  height: 180px;
  width: 120px;
  margin-left: 25px;
  margin-bottom: 25px;
  margin-top: 25px;
  border-radius: 25px;
`

export const ProgramInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 250px;
  margin-left: 15px;
`

export const ProgramID = styled.span``

export const ProgramTitle = styled.span``

export const ProgramPrice = styled.span``

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
  margin-left: 300px;
  margin-right: 50px;
  margin-top: 90px;
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
  margin-bottom: 30px;
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

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 5rem;
    margin-top: 20px;

`;

export const ProgramButton = styled.button`
  font-size: 1rem;
  padding: 2rem 6rem;
  border: none;
  background: #92DCE5;
  color: #000;
  transition: 0.2 ease-out;
  border-radius: 4px;
  outline: none;
  cursor: pointer;    
  text-decoration: none;
  width: 20px;
  height: 15px;
  
  &:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px; 
`

export const DiscountBox = styled.div`
  flex: 1;
  border: 2px solid #D64933;
  border-radius: 10px;
  padding: 20px;
  height: 30vh;
  margin-left: 100px;
  margin-top: 5px;
`

export const Input = styled.input`
    width: 320px;
    outline: none;
    padding: 8px 16px;
    border: 1px solid #e0e6e8;
    border-radius: 4px;
    font-size: 1rem;
    color: #7C7C7C;
    transition: box-shadow 0.2s;
    margin-top: 20px;
    
    &::placeholder {
        color: #lightgrey;
    }

    &:focus {
        box-shadow: 0 0 0 2px rgb(169, 172, 255, 0.5); 
    }
`

export const DiscountButton = styled.button`
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
margin-bottom: 35px;
height: 35px;
width: 175px;

&:hover {
background: #fff;
transition: 0.2s ease-out;
cursor: pointer;
color: #000;
}
`