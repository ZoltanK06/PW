import React from 'react'
import {useState, useEffect} from 'react'
import { getOrders, deleteOrder } from '../actions/orders'
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router'
import {
    OrdersContainer,
    OrdersWrapper,
    OrdersHeading,
    Wrapper,
    OrderList,
    OrderBox,
    OrderInfo,
    OrderID,
    BuyerEmail,
    Value,
    RemoveButton,
    Program,
    ProgramList
    } from './AdminOrders.style'

function AdminOrders() {
    const dispatch = useDispatch();    
    const orders = useSelector((state) => state.orders);

    useEffect(() => {
        dispatch(getOrders());
    }, [dispatch])

    return (
    <OrdersContainer>
        <OrdersWrapper>
            <OrdersHeading> ORDERS </OrdersHeading>

            <Wrapper>
                <OrderList>
                    {orders.map((order) => (
                        <OrderBox>
                            <OrderInfo>
                                <OrderID> <b>ID: </b> {order._id}</OrderID>
                                <BuyerEmail><b>Buyer email:</b>  {order.buyer_email} </BuyerEmail>
                                <Value> <b>Value:</b>  {order.value} $</Value>
                            </OrderInfo>
                            <ProgramList>
                                { order.program_name.map((program) => (
                                    <Program>
                                        <b>Program:</b> {program}
                                    </Program>
                                ))}
                            </ProgramList>
                            <RemoveButton onClick={() => {
                                dispatch(deleteOrder(order._id));
                            }}>Remove order</RemoveButton>   
                        </OrderBox>
                    ))}
                </OrderList>
            </Wrapper>

        </OrdersWrapper>
    </OrdersContainer>
    
        );
}

export default AdminOrders
