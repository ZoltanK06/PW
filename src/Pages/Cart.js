import React from 'react'
import {Top,
   TopButton,  
   TopText,
   ProgramsContainer, 
   ProgramsHeading,
   ProgramWrapper,
   Wrapper,
   ProgramList,
   CheckoutBox,
   ProgramBox,
   ProgramImage,
   ProgramID,
   ProgramTitle,
   ProgramPrice,
   RemoveButton,
   ProgramInfo,


   CheckOutTitle,
   CheckOutItem,
   CheckOutItemText,
   CheckOutItemPrice,
   CheckOutButton,

   } from '../Styles/Cart.styles'
import {programs} from '../programs/Programs'
import {useState, useEffect} from 'react'
import { getCartPrograms, deleteCartItems, deleteCartItem } from '../actions/cartPrograms'
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router'

function Cart() {

  const dispatch = useDispatch();
  const cartPrograms = useSelector((state) => state.cartPrograms);
  const [price, setPrice] = useState(0);
  const history = useHistory();

  useEffect(() => {
    dispatch(getCartPrograms());
  }, [dispatch])

  const continueShopping = () => {
    history.push('/Shop');
  }

    return (
      <ProgramsContainer>
        <ProgramWrapper>

          <ProgramsHeading>{cartPrograms.length==0 ? ("YOUR CART IS EMPTY!") : ("CART")}</ProgramsHeading>

          <Top>
            <TopButton onClick={continueShopping}>CONTINUE SHOPPING</TopButton>
              <TopText>Shopping cart: ({cartPrograms.length})</TopText>
            <TopButton onClick={() => {
              dispatch(deleteCartItems());
              document.location.reload(true);
              return false;
            }}>CLEAR CART</TopButton>
          </Top>

         

            {cartPrograms.length !==0 ? (
              <Wrapper>
                <ProgramList>

                {cartPrograms.map((program) => (
                  <ProgramBox>
                    <ProgramImage src={program.image} alt={program.alt}/>
                      <ProgramInfo> 
                        <ProgramID> <b>ID:</b>  {program._id} </ProgramID>
                        <ProgramTitle> <b>Name:</b>  {program.name} </ProgramTitle>
                        <ProgramPrice> <b>Price:</b>  {program.price} $</ProgramPrice>
                      </ProgramInfo>
                      <RemoveButton onClick={() => {
                       dispatch(deleteCartItem(program._id));
                      }}>Remove from cart!</RemoveButton>
                  </ProgramBox>
                ))}
               
                  </ProgramList>
 
 
              <CheckoutBox>
                <CheckOutTitle>ORDER SUMMARY</CheckOutTitle>
                <CheckOutItem>
                  <CheckOutItemText><b>Subtotal: </b></CheckOutItemText>
                  <CheckOutItemPrice>$ {cartPrograms.reduce((a,c) => a+c.price, 0)}</CheckOutItemPrice>
                </CheckOutItem>
                <CheckOutItem>
                  <CheckOutItemText><b>Discount: </b> </CheckOutItemText>
                  <CheckOutItemPrice>$ -0.00</CheckOutItemPrice>
                </CheckOutItem>
                <CheckOutItem type="total">
                  <CheckOutItemText><b>Total: </b></CheckOutItemText>
                  <CheckOutItemPrice>$ {cartPrograms.reduce((a,c) => a+c.price, 0)}</CheckOutItemPrice>
                </CheckOutItem>
                <CheckOutButton onClick={() =>{
                  history.push('/CheckOut');
                }}>CHECKOUT NOW</CheckOutButton>
              </CheckoutBox>
              </Wrapper>
            ):(
              <div />
            )}  
        </ProgramWrapper>
      </ProgramsContainer>
            );
}

export default Cart
