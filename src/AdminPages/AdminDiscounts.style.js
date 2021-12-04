import styled from 'styled-components';

export const DiscountsContainer = styled.div`
  min-height: 100vh;
  background: #191919;
  color: #fff;
  padding: 20px;
`;

export const DiscountsHeading = styled.div`
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

export const  DiscountsWrapper = styled.div`
`

export const DiscountList = styled.div`
    width: 185vh;
    margin-left: 45px;
`

export const DiscountBox = styled.div`
  flex: 2;
  display: flex;
  box-shadow: 3px 4px #D64933;
  margin-bottom: 50px;
  height: 200px;
  
`

export const DiscountInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 350px;
  hieght: 200px;
  margin-left: 15px;
`

export const DiscountID = styled.span``

export const DiscountCode = styled.span``

export const DiscountPercentage = styled.span`
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
  margin-left: 700px;
  margin-right: 50px;
  margin-top: 80px;
  height: 35px;
  width: 175px;

&:hover {
  background: #fff;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: #000;
}
`

export const AddButton = styled.button`
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
  margin-left: 700px;
  margin-right: 50px;
  margin-top: 80px;
  height: 35px;
  width: 175px;

&:hover {
  background: #fff;
  transition: 0.2s ease-out;
  cursor: pointer;
  color: #000;
}
`

export const AddDiscountBox = styled.div`
  flex: 2;
  display: flex;
  border: 2px solid #D64933;
  border-radius: 10px;
  margin-bottom: 50px;
  height: 200px;
  
`

export const Inputs = styled.div`
    margin-top: 24px;    
    margin-bottom: 24px;
    width: 410px;
    display: grid;
    justify-content: center;

    p {
        color: red;
        font-size: 12px;
        margin-bottom: 30px;
    }

    @media screen and (max-width: 768px){
        width: 320px;
    }   
`

export const Input = styled.input`
    width: 320px;
    height: 25px;
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