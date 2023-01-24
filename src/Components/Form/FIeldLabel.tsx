import React from 'react';
import {TextProps} from 'react-native';
import styled from 'styled-components/native';

interface Props extends TextProps {}

const FieldLabel = (props: Props) => {
  return <StyledLabel>{props.children}</StyledLabel>;
};

export default FieldLabel;

//#region styled components
const StyledLabel = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE_SMALL};
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY};
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;
//#endregion
