import React from 'react';
import styled from 'styled-components/native';
import {TextInputProps} from 'react-native';

interface Props extends TextInputProps {
  digit?: boolean;
}

const FieldInput = (props: Props) => {
  return <StyledInput {...props} />;
};

export default FieldInput;

//#region styled components
const StyledInput = styled.TextInput<{digit: boolean}>`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  border-color: ${props => props.theme.BORDER_COLOR}
  border-width: 2px;
  border-radius: 3px;
  padding-vertical: 7px;
  padding-horizontal: 20px;
  font-size: ${props => props.theme.FONT_SIZE_MEDIUM};
  font-family: ${props =>
    props.digit
      ? props.theme.PRIMARY_DIGIT_FONT
      : props.theme.PRIMARY_FONT_FAMILY};
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  margin-top: 5px;
`;
//#endregion
