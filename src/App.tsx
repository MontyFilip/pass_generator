import { useState } from 'react';
import Password from './Components/Password';
import PasswordSettings from './Components/PasswordSettings';
// import { PasswordGenerator } from './Types/Types';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 15px;
    padding: 0;
    background-color: #575757;
  };
  a {
    text-decoration: none;
  }
`;
const Container = styled.div`
  margin: 0;
  padding: 0;
`;
const PasswordApplication = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0rem auto;
  padding: 3rem;
  background-color: #4e2f90;
  border-radius: 2rem;
  max-width: 540px;
  max-height: 650px;
  /* box-shadow: 1.5px 1.5px 1.5px 1.5px #ffffff; */
  color: #f7ebff;
  font-family: 'Combo', cursive;
  font-size: 2rem;
  height: 650px;
`;

function App() {
  const [password, setPassword] = useState<string>('');

  const validateAmounts = (
    numberToValidate: number,
    higerThan: number,
    lowerThan: number
  ) => {
    if (numberToValidate > higerThan && numberToValidate < lowerThan) {
      return true;
    } else {
      return false;
    }
  };

  const createPassword = (
    length: number,
    numbers: boolean,
    bigLetters: boolean,
    specialChar: boolean
  ) => {
    if (!validateAmounts(length, 3, 25)) {
      alert('Amount of symbols should be greater than 3, and lower than 25');
      return null;
    }
    let password = [];
    const listOfLetters = 'abcdefghijklmnopqrstuvwxyz';
    const listOfBigLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const listOfNumbers = '0123456789';
    const listOfSpecialChar = '@!$#%^*_+?|/';

    let searchingScope = listOfLetters;

    if (bigLetters === true) {
      searchingScope += listOfBigLetters;
    }

    if (numbers === true) {
      searchingScope += listOfNumbers;
    }

    if (specialChar === true) {
      searchingScope += listOfSpecialChar;
    }

    for (let i = 0; i < length; i++) {
      const addToPassword =
        searchingScope[Math.floor(Math.random() * searchingScope.length + 1)];
      password.push(addToPassword);
    }

    setPassword(password.join(''));
  };

  return (
    <Container>
      <GlobalStyle />
      <PasswordApplication>
        <PasswordSettings passwordGenerator={createPassword} />
        <Password generatedPassword={password} />
      </PasswordApplication>
    </Container>
  );
}

export default App;
