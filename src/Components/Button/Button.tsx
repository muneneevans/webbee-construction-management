import React from 'react';
import styled from 'styled-components/native';

type Props = {
  text: string;
  color?: string;
  onPress: (() => void) | undefined;
};

export default function Button({color, text, onPress}: Props) {
  return (
    <StyledButton color={color} onPress={onPress}>
      <StyledButtonText>{text}</StyledButtonText>
    </StyledButton>
  );
}

//#region styled components

const StyledButton = styled.TouchableOpacity<{color: string}>`
  background-color: ${props => props.color ?? props.theme.PRIMARY_COLOR};
  border-radius: 5px;
  padding: 10px;

  align-items: center;
  justify-content: center;
`;

const StyledButtonText = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE_LARGE}px;
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY};
  color: ${props => props.theme.PRIMARY_FOREGROUND_COLOR};
  text-align: center;
`;
//#endregion
