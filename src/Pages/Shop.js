import React from 'react'
import {ProgramsContainer, 
       ProgramsHeading, 
       ProgramWrapper,
       ProgramPrice, 
       ProgramCard, 
       ProgramImg, 
       ProgramInfo, 
       ProgramTitle, 
       ProgramDesc, 
       ButtonBox, 
       ProgramButton,
       FilterContainer
      
      } from '../Styles/Shop.style'
import {getPrograms} from '../actions/programs'
import {useSelector, useDispatch} from 'react-redux';
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import {app} from '../firebase-config'
import {addCartPrograms} from '../actions/cartPrograms'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import '../Styles/dropdownstyle.css'

const Shop = () => {
  
  const dispatch = useDispatch();
  const programs = useSelector((state) => state.programs);
  const history = useHistory();

  const GenderFilter = ['Male', 'Female'];
  const defaultOption_gender = '';

  const DaysFilter = ['Three', 'Four', 'Five', 'Six'];
  const defaultOption_days = '';

  const DifficultyFilter = ['Maintenance', 'FatLoss', 'MuscleBuild'];
  const defaultOption_difficulty = '';

  const [user, setUser] = useState("");
  

  useEffect(() => {
    dispatch(getPrograms());
}, [dispatch])

  const authListener = () => {
    app.auth().onAuthStateChanged(user => {
        if(user) {
            setUser(user);
        }else{
            setUser('');
        }
    })
  }

  useEffect(() => {
    authListener();
  }, [])

    return (
      <ProgramsContainer>
        <ProgramsHeading>Programs</ProgramsHeading>
        <FilterContainer> 
          <Dropdown className='dropdown1' options={GenderFilter} value={defaultOption_gender} placeholder="Select an option" /> 
          <Dropdown className='dropdown2' options={DaysFilter}  value={defaultOption_days} placeholder="Select an option" />
          <Dropdown className='dropdown3' options={DifficultyFilter} value={defaultOption_difficulty} placeholder="Select an option" />  
        </FilterContainer>
        <ProgramWrapper>
      {programs.map((program) => (
              <ProgramCard key={program.id}>
                <ProgramImg src={program.image} alt={program.alt} />
                <ProgramInfo>
                  <ProgramTitle>{program.name}</ProgramTitle>
                  <ProgramDesc>{program.desc}</ProgramDesc>
                  <ProgramPrice>{program.price} $</ProgramPrice>
                </ProgramInfo>
                <ButtonBox>
                  <ProgramButton onClick={() => {
                    if(user){
                      dispatch(addCartPrograms(program));
                    }else{
                      history.push('/Login');
                    }
                  }}>{program.button}</ProgramButton>
                </ButtonBox>
              </ProgramCard>
      ))}
        </ProgramWrapper>
      </ProgramsContainer>
    )
}

export default Shop
