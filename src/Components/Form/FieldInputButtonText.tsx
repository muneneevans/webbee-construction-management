import {TextInputProps} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

interface Props extends TextInputProps {
  digit?: boolean;
}

const FieldInputButtonText = (props: Props) => (
  <StyledInputButtonText {...props} />
);

export default FieldInputButtonText;

//#region styled components
const StyledInputButtonText = styled.Text<{digit: boolean}>`
  font-size: ${props => props.theme.FONT_SIZE_MEDIUM};
  font-family: ${props =>
    props.digit
      ? props.theme.PRIMARY_DIGIT_FONT
      : props.theme.PRIMARY_FONT_FAMILY};
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  padding-horizontal: 20px;
`;
//#endregion
