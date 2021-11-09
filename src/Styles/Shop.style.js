import styled from 'styled-components';

export const Programs = styled.div``

export const ProgramsContainer = styled.div`
  min-height: 100vh;
  padding: 5rem calc((100vw - 1300px) / 2);
  background: #191919;
  color: #fff;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ProgramWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
`;

export const ProgramCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  align-items: center;
  border-radius: 15px;
  width: 300px;
  height: 745px;
  margin: 20px;
  box-shadow: 0px 3px 15px #FFF;


`;

export const ProgramImg = styled.img`
  height: 360px;
  width: 240px;
  margin-left: 25px;
  margin-bottom: 25px;
  margin-top: 25px;
  box-shadow: 8px 8px #D64933;
`;

export const ProgramsHeading = styled.h1`
  font-size: clamp(2rem, 2.5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
`;

export const ProgramTitle = styled.h2`
  font-weight: 400;
  font-size: 1.5rem;
`;

export const ProgramInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: center;
  height: 200px;
`;

export const ProgramPrice = styled.p`
`;

export const ProgramDesc = styled.p`
`;

// export const ProductPrice = styled.p`
//   margin-bottom: 1rem;
//   font-size: 2rem;
// `;

export const ButtonBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    padding: 2rem;
    margin-top: 20px;
`;

export const ProgramButton = styled.button`
  font-size: 1rem;
  padding: 1rem 4rem;
  border: none;
  background: #92DCE5;
  color: #000;
  transition: 0.2 ease-out;
  border-radius: 4px;
  outline: none;
  cursor: pointer;    
  text-decoration: none;
  
  &:hover {
    background: #fff;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;

export const FilterContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 20px;
margin-bottom: 80px;
margin-top: 25px;
`