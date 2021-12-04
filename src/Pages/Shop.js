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
import Filters from '../components/NavBar/Filters';


const Shop = () => {

  const styles={
    app:{
      
      alignItems:'center',
      display:'flex',
      marginBottom: '75px',
      color:'rgba(0,0,100,1)',
      fontSize:25,
      justifyContent: 'space-between',
      width: '980px' 
    },
    select:{
      width:'250px',
    }
  }
  
  const dispatch = useDispatch();
  const programs = useSelector((state) => state.programs);
  const [filteredPrograms, setFilteredPrograms] = useState(programs);
  const history = useHistory();

  const filter1 = [
    { value: 'any', label: 'Any' },
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
  ]

  const filter2 = [
    { value: 'any', label: 'Any' },
    { value: 'three', label: 'Three' },
    { value: 'four', label: 'Four' },
    { value: 'five', label: 'Five' },
    { value: 'six', label: 'Six' },
  ]

  const filter3 = [
    { value: 'any', label: 'Any' },
    { value: 'maintenance', label: 'Maintenance' },
    { value: 'musclebuild', label: 'Muscle Building' },
    { value: 'fatloss', label: 'Fat Loss' },
  ]

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const [firstFilter, setFirstFilter] = useState("any"); 
  const [secondFilter, setSecondFilter] = useState("any");
  const [thirdFilter, setThirdFilter] = useState("any");
  const [flag, setFlag] = useState(0);
  
  function onChangeInput1(value){
    setFirstFilter(value.value);
  }

  function onChangeInput2(value){
    setSecondFilter(value.value);
  }
  
  function onChangeInput3(value){
    setThirdFilter(value.value);
  }

  function FilterFunction(){
      // if(firstFilter !== 'any'){
      //   setFilteredPrograms(filteredPrograms.filter(program => program.filters[0] == firstFilter));
      // }

      // if(secondFilter !== 'any'){
      //   setFilteredPrograms(filteredPrograms.filter(program => program.filters[1] == secondFilter));
      // }

      // if(thirdFilter !== 'any'){
      //   setFilteredPrograms(filteredPrograms.filter(program => program.filters[2] == thirdFilter));
      // }

      // if(firstFilter === 'any' && secondFilter === 'any' && thirdFilter === 'any'){
      //   setFlag(0);
      // }else if(firstFilter === 'any' && secondFilter === 'any' && thirdFilter !== 'any'){
      //   setFlag(1);
      // }else if(firstFilter === 'any' && secondFilter !== 'any' && thirdFilter === 'any'){
      //   setFlag(2);
      // }else if(firstFilter !== 'any' && secondFilter === 'any' && thirdFilter === 'any'){
      //   setFlag(4);
      // }else if(firstFilter === 'any' && secondFilter !== 'any' && thirdFilter !== 'any'){
      //   setFlag(3);
      // }else if(firstFilter !== 'any' && secondFilter === 'any' && thirdFilter !== 'any'){
      //   setFlag(5);
      // }else if(firstFilter !== 'any' && secondFilter !== 'any' && thirdFilter === 'any'){
      //   setFlag(6);
      // }else if(firstFilter !== 'any' && secondFilter !== 'any' && thirdFilter !== 'any'){
      //   setFlag(7);
      // }

      // switch(flag){
      //   case 1:
      //     setFilteredPrograms(programs?.filter(program => program.filters[2] === thirdFilter));
      //     break;
      //   case 2:
      //     setFilteredPrograms(programs?.filter(program => program.filters[1] === secondFilter));
      //     break;
      //   case 3:
      //     setFilteredPrograms(programs?.filter(program => program.filters[1] === secondFilter && program.filters[2] === thirdFilter));
      //     break;
      //   case 4:
      //     setFilteredPrograms(programs?.filter(program => program.filters[0] === firstFilter));
      //     break;
      //   case 5:
      //     setFilteredPrograms(programs?.filter(program => program.filters[0] === firstFilter && program.filters[2] === thirdFilter));
      //     break;
      //   case 6:
      //     setFilteredPrograms(programs?.filter(program => program.filters[0] === firstFilter && program.filters[1] === secondFilter));
      //     break;
      //   case 7:
      //     setFilteredPrograms(programs?.filter(program => program.filters[0] === firstFilter && program.filters[1] === secondFilter && program.filters[2] === thirdFilter ));
      //     break;        
      //   case 0:
      //     dispatch(getPrograms());
      //     setFilteredPrograms(programs);
        
      // }


      if(firstFilter === 'any' && secondFilter === 'any' && thirdFilter === 'any'){
        setFilteredPrograms(programs);
      }else if(firstFilter === 'any' && secondFilter === 'any' && thirdFilter === 'maintenance'){
        setFilteredPrograms(programs.filter(program => program.filters[2] === 'maintenance'));
      }else if(firstFilter === 'any' && secondFilter === 'any' && thirdFilter === 'musclebuild'){
        setFilteredPrograms(programs.filter(program => program.filters[2] === 'musclebuild'));
      }else if(firstFilter === 'any' && secondFilter === 'any' && thirdFilter === 'fatloss'){
        setFilteredPrograms(programs.filter(program => program.filters[2] === 'fatloss'));
      }else if(firstFilter === 'any' && secondFilter === 'three' && thirdFilter === 'any'){
        setFilteredPrograms(programs.filter(program => program.filters[1] === 'three' ));
      }else if(firstFilter === 'any' && secondFilter === 'three' && thirdFilter === 'maintenance'){
        setFilteredPrograms(programs.filter(program => program.filters[1] === 'three' && program.filters[2] === 'maintenance'));
      }else if(firstFilter === 'any' && secondFilter === 'three' && thirdFilter === 'musclebuild'){
        setFilteredPrograms(programs.filter(program => program.filters[1] === 'three' && program.filters[2] === 'musclebuild'));
      }else if(firstFilter === 'any' && secondFilter === 'three' && thirdFilter === 'fatloss'){
        setFilteredPrograms(programs.filter(program => program.filters[1] === 'three' && program.filters[2] === 'fatloss'));
      }else if(firstFilter === 'any' && secondFilter === 'four' && thirdFilter === 'any'){
        setFilteredPrograms(programs.filter(program => program.filters[1] === 'four' ));
      }else if(firstFilter === 'any' && secondFilter === 'four' && thirdFilter === 'maintenance'){
        setFilteredPrograms(programs.filter(program => program.filters[1] === 'four' && program.filters[2] === 'maintenance'));
      }else if(firstFilter === 'any' && secondFilter === 'four' && thirdFilter === 'musclebuild'){
        setFilteredPrograms(programs.filter(program => program.filters[1] === 'four' && program.filters[2] === 'musclebuild'));
      }else if(firstFilter === 'any' && secondFilter === 'four' && thirdFilter === 'fatloss'){
        setFilteredPrograms(programs.filter(program => program.filters[1] === 'four' && program.filters[2] === 'fatloss'));
      }else if(firstFilter === 'any' && secondFilter === 'five' && thirdFilter === 'any'){
        setFilteredPrograms(programs.filter(program => program.filters[1] === 'five' ));
      }else if(firstFilter === 'any' && secondFilter === 'five' && thirdFilter === 'maintenance'){
        setFilteredPrograms(programs.filter(program => program.filters[1] === 'five' && program.filters[2] === 'maintenance'));
      }else if(firstFilter === 'any' && secondFilter === 'five' && thirdFilter === 'musclebuild'){
        setFilteredPrograms(programs.filter(program => program.filters[1] === 'five' && program.filters[2] === 'musclebuild'));
      }else if(firstFilter === 'any' && secondFilter === 'five' && thirdFilter === 'fatloss'){
        setFilteredPrograms(programs.filter(program => program.filters[1] === 'five' && program.filters[2] === 'fatloss'));
      }else if(firstFilter === 'any' && secondFilter === 'six' && thirdFilter === 'any'){
        setFilteredPrograms(programs.filter(program => program.filters[1] === 'six' ));
      }else if(firstFilter === 'any' && secondFilter === 'six' && thirdFilter === 'maintenance'){
        setFilteredPrograms(programs.filter(program => program.filters[1] === 'six' && program.filters[2] === 'maintenance'));
      }else if(firstFilter === 'any' && secondFilter === 'six' && thirdFilter === 'musclebuild'){
        setFilteredPrograms(programs.filter(program => program.filters[1] === 'six' && program.filters[2] === 'musclebuild'));
      }else if(firstFilter === 'any' && secondFilter === 'six' && thirdFilter === 'fatloss'){
        setFilteredPrograms(programs.filter(program => program.filters[1] === 'six' && program.filters[2] === 'fatloss'));
      }else if(firstFilter === 'male' && secondFilter === 'any' && thirdFilter === 'any'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male'));
      }else if(firstFilter === 'male' && secondFilter === 'any' && thirdFilter === 'maintenance'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[2] === 'maintenance'));
      }else if(firstFilter === 'male' && secondFilter === 'any' && thirdFilter === 'musclebuild'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[2] === 'musclebuild'));
      }else if(firstFilter === 'male' && secondFilter === 'any' && thirdFilter === 'fatloss'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[2] === 'fatloss'));
      }else if(firstFilter === 'male' && secondFilter === 'three' && thirdFilter === 'any'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[1] === 'three'));
      }else if(firstFilter === 'male' && secondFilter === 'three' && thirdFilter === 'maintenance'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[1] === 'three' && program.filters[2] === 'maintenance'));
      }else if(firstFilter === 'male' && secondFilter === 'three' && thirdFilter === 'musclebuild'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[1] === 'three' && program.filters[2] === 'musclebuild'));
      }else if(firstFilter === 'male' && secondFilter === 'three' && thirdFilter === 'fatloss'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[1] === 'three' && program.filters[2] === 'fatloss'));
      }else if(firstFilter === 'male' && secondFilter === 'four' && thirdFilter === 'any'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[1] === 'four'));
      }else if(firstFilter === 'male' && secondFilter === 'four' && thirdFilter === 'maintenance'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[1] === 'four' && program.filters[2] === 'maintenance'));
      }else if(firstFilter === 'male' && secondFilter === 'four' && thirdFilter === 'musclebuild'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[1] === 'four' && program.filters[2] === 'musclebuild'));
      }else if(firstFilter === 'male' && secondFilter === 'four' && thirdFilter === 'fatloss'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[1] === 'four' && program.filters[2] === 'fatloss'));
      }else if(firstFilter === 'male' && secondFilter === 'five' && thirdFilter === 'any'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[1] === 'five'));
      }else if(firstFilter === 'male' && secondFilter === 'five' && thirdFilter === 'maintenance'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[1] === 'five' && program.filters[2] === 'maintenance'));
      }else if(firstFilter === 'male' && secondFilter === 'five' && thirdFilter === 'musclebuild'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[1] === 'five' && program.filters[2] === 'musclebuild'));
      }else if(firstFilter === 'male' && secondFilter === 'five' && thirdFilter === 'fatloss'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[1] === 'five' && program.filters[2] === 'fatloss'));
      }else if(firstFilter === 'male' && secondFilter === 'six' && thirdFilter === 'any'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[1] === 'six'));
      }else if(firstFilter === 'male' && secondFilter === 'six' && thirdFilter === 'maintenance'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[1] === 'six' && program.filters[2] === 'maintenance'));
      }else if(firstFilter === 'male' && secondFilter === 'six' && thirdFilter === 'musclebuild'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[1] === 'six' && program.filters[2] === 'musclebuild'));
      }else if(firstFilter === 'male' && secondFilter === 'six' && thirdFilter === 'fatloss'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'male' && program.filters[1] === 'six' && program.filters[2] === 'fatloss'));
      }else if(firstFilter === 'female' && secondFilter === 'any' && thirdFilter === 'any'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female'));
      }else if(firstFilter === 'female' && secondFilter === 'any' && thirdFilter === 'maintenance'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[2] === 'maintenance'));
      }else if(firstFilter === 'female' && secondFilter === 'any' && thirdFilter === 'musclebuild'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[2] === 'musclebuild'));
      }else if(firstFilter === 'female' && secondFilter === 'any' && thirdFilter === 'fatloss'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[2] === 'fatloss'));
      }else if(firstFilter === 'female' && secondFilter === 'three' && thirdFilter === 'any'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[1] === 'three'));
      }else if(firstFilter === 'female' && secondFilter === 'three' && thirdFilter === 'maintenance'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[1] === 'three' && program.filters[2] === 'maintenance'));
      }else if(firstFilter === 'female' && secondFilter === 'three' && thirdFilter === 'musclebuild'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[1] === 'three' && program.filters[2] === 'musclebuild'));
      }else if(firstFilter === 'female' && secondFilter === 'three' && thirdFilter === 'fatloss'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[1] === 'three' && program.filters[2] === 'fatloss'));
      }else if(firstFilter === 'female' && secondFilter === 'four' && thirdFilter === 'any'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[1] === 'four'));
      }else if(firstFilter === 'female' && secondFilter === 'four' && thirdFilter === 'maintenance'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[1] === 'four' && program.filters[2] === 'maintenance'));
      }else if(firstFilter === 'female' && secondFilter === 'four' && thirdFilter === 'musclebuild'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[1] === 'four' && program.filters[2] === 'musclebuild'));
      }else if(firstFilter === 'female' && secondFilter === 'four' && thirdFilter === 'fatloss'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[1] === 'four' && program.filters[2] === 'fatloss'));
      }else if(firstFilter === 'female' && secondFilter === 'five' && thirdFilter === 'any'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[1] === 'five'));
      }else if(firstFilter === 'female' && secondFilter === 'five' && thirdFilter === 'maintenance'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[1] === 'five' && program.filters[2] === 'maintenance'));
      }else if(firstFilter === 'female' && secondFilter === 'five' && thirdFilter === 'musclebuild'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[1] === 'five' && program.filters[2] === 'musclebuild'));
      }else if(firstFilter === 'female' && secondFilter === 'five' && thirdFilter === 'fatloss'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[1] === 'five' && program.filters[2] === 'fatloss'));
      }else if(firstFilter === 'female' && secondFilter === 'six' && thirdFilter === 'any'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[1] === 'six'));
      }else if(firstFilter === 'female' && secondFilter === 'six' && thirdFilter === 'maintenance'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[1] === 'six' && program.filters[2] === 'maintenance'));
      }else if(firstFilter === 'female' && secondFilter === 'six' && thirdFilter === 'musclebuild'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[1] === 'six' && program.filters[2] === 'musclebuild'));
      }else if(firstFilter === 'female' && secondFilter === 'six' && thirdFilter === 'fatloss'){
        setFilteredPrograms(programs.filter(program => program.filters[0] === 'female' && program.filters[1] === 'six' && program.filters[2] === 'fatloss'));
      }
      console.log(flag);
      console.log(filteredPrograms);
  }

  useEffect(() => {
    dispatch(getPrograms());
}, [dispatch])

  useEffect(() => {
    FilterFunction();
  }, [firstFilter, secondFilter, thirdFilter])


    return (
      <ProgramsContainer>
        <ProgramsHeading>Programs</ProgramsHeading>
        <FilterContainer style={styles.app}> 
            <Filters style={styles.select} 
            onChange1={onChangeInput1} 
            onChange2={onChangeInput2} 
            onChange3={onChangeInput3} 
            filter1={filter1}
            filter2={filter2}
            filter3={filter3}
            />
        </FilterContainer>
        <ProgramWrapper>
             {filteredPrograms?.map((program) => (
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
