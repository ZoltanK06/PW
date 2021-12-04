import React from 'react'
import {useState, useEffect} from 'react'
import { getDiscounts, addDiscount, deleteDiscount} from '../actions/discounts'

import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router'
import {
    DiscountsContainer,
    DiscountsWrapper,
    DiscountsHeading,
    Wrapper,
    DiscountList,
    DiscountBox,
    DiscountInfo,
    DiscountID,
    DiscountCode,
    DiscountPercentage,
    RemoveButton,
    AddButton,
    AddDiscountBox,
    Input,
    Inputs,
    } from './AdminDiscounts.style'

function AdminDiscounts() {
    const dispatch = useDispatch();    
    const discounts = useSelector((state) => state.discounts);

    const [discountCode, setDiscountCode] = useState('');
    const [discountPercentage, setDiscountPercentage] = useState(0);

    useEffect(() => {
        dispatch(getDiscounts());
    }, [dispatch])

    const add_Discount = () => {
        let discount = {percentage: discountPercentage, code: discountCode};

        dispatch(addDiscount(discount));
        console.log(discount);
    }

    return (
    <DiscountsContainer>
        <DiscountsWrapper>
            <DiscountsHeading> Discounts </DiscountsHeading>

            <Wrapper>
                <DiscountList>
                <AddDiscountBox>
                    <Inputs>
                    <Input
                        type="text"
                        placeholder="DISCOUNT CODE"
                        onChange={e => setDiscountCode(e.target.value)}
                    />
                    <Input
                        type="number"
                        placeholder="DISCOUNT PERCENTAGE"
                        onChange={e => setDiscountPercentage(e.target.value)}
                    />
                    </Inputs>
                            <AddButton onClick={add_Discount}>Add discount</AddButton>   
                    </AddDiscountBox>
                    {discounts.map((discount) => (
                        <DiscountBox>
                            <DiscountInfo>
                                <DiscountID> <b>ID: </b> {discount._id}</DiscountID>
                                <DiscountCode><b>CODE:</b>  {discount.code} </DiscountCode>
                                <DiscountPercentage> <b>PERCENTAGE:</b>  {discount.percentage}%</DiscountPercentage>
                            </DiscountInfo>
                            <RemoveButton onClick={() => {
                                    dispatch(deleteDiscount(discount._id));
                                }}>Remove discount</RemoveButton>   
                        </DiscountBox>
                    ))}
                </DiscountList>
            </Wrapper>

        </DiscountsWrapper>
    </DiscountsContainer>
        );
}

export default AdminDiscounts