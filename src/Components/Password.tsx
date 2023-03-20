import React from 'react';
import styled from 'styled-components';

const PasswordBox = styled.div`
  margin: 0 auto;
`;

const PasswordDisplay = styled.p`
  text-align: center;
  font-family: 'Ms Madi', cursive;
  color: transparent;
  text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
`;

const Password: React.FC<{ generatedPassword: string }> = ({
  generatedPassword,
}) => {
  return (
    <PasswordBox>
      {generatedPassword ? (
        <h3>Copy the password:</h3>
      ) : (
        <h2>Generate Password</h2>
      )}
      <PasswordDisplay>{generatedPassword}</PasswordDisplay>
    </PasswordBox>
  );
};

export default Password;
