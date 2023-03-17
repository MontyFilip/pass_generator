import React, { useState } from 'react';
import styled from 'styled-components';
import { Password } from '../../../Types/Types';
const Box = styled.div``;
const PasswordForm = styled.form``;
const Option = styled.div``;
const HeaderInput = styled.h3``;
const Input = styled.input``;
const Button = styled.button``;

const Form: React.FC<{ passwordGenereator: Password }> = ({
  passwordGenereator,
}) => {
  const [amountOfSymbols, setAmountOfSymbols] = useState<number>(4);
  const [useNumber, setUseNumber] = useState<boolean>(false);
  const [useBigLetters, setUseBigLetters] = useState<boolean>(false);
  const [useSpecialChar, setUseSpecialChar] = useState<boolean>(false);

  const toggleCheckboxSettings = (
    prevSetting: boolean,
    set: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    if (prevSetting === false) {
      set(true);
    } else {
      set(false);
    }
  };
  return (
    <Box>
      <PasswordForm></PasswordForm>
    </Box>
  );
};

export default Form;
