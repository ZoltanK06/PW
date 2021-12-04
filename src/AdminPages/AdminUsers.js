import React from 'react'
import {useState, useEffect} from 'react'
import { getOrders, deleteOrder } from '../actions/orders'
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router'
import {getUsers, deleteUser, updateUser} from '../actions/users'
import {
    UsersContainer,
    UsersWrapper,
    UsersHeading,
    Wrapper,
    UserList,
    UserBox,
    UserInfo,
    UserID,
    ButtonBox,
    RemoveButton,
    UpdateButton,
    UserName,
    UserType,
    UserEmail

} from './AdminUsers.style'

function AdminUsers() {
    const dispatch = useDispatch();
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('profile')));    
    const Allusers = useSelector((state) => state.users);
    const users = (Allusers.filter(e => e.email !== currentUser?.result.email));

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch])

    return (
    <UsersContainer>
        <UsersWrapper>
            <UsersHeading> USERS </UsersHeading>

            <Wrapper>
                <UserList>
                    {users.map((user) => (
                        <UserBox>
                            <UserInfo>
                                <UserID> <b>ID: </b> {user._id}</UserID>
                                <UserName> <b>Name: </b> {user.name} </UserName>
                                <UserEmail> <b>Email: </b> {user.email} </UserEmail>
                                <UserType> <b>Type: </b> {user.type} </UserType>
                            </UserInfo>
                            <ButtonBox>
                            <RemoveButton onClick={() => {
                                dispatch(deleteUser(user._id));
                            }}>Remove user</RemoveButton>
                                { user.type == 'admin' ? (
                                    <UpdateButton onClick={() => (
                                        dispatch(updateUser(user._id, {name: user.name, email: user.email, password: user.password, type: 'simple', id: user.id})
                                    ))}>Make user</UpdateButton>
                                ) : (
                                    <UpdateButton onClick={() => (
                                        dispatch(updateUser(user._id, {name: user.name, email: user.email, password: user.password, type: 'admin', id: user.id})
                                    ))}>Make admin</UpdateButton>
                                )}
                            </ButtonBox>
                        </UserBox>
                    ))}
                </UserList>
            </Wrapper>

        </UsersWrapper>
    </UsersContainer>
    
        );
}

export default AdminUsers
