import React from 'react';
import {TextProps} from 'react-native';
import styled from 'styled-components/native';

interface Props extends TextProps {}

const ErrorText = (props: Props) => <StyledErrorText {...props} />;
export default ErrorText;

//#region styled components
const StyledErrorText = styled.Text<{center: string}>`
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY};
  font-size: ${props => props.theme.FONT_SIZE_SMALL};
  color: ${props => props.theme.colors.red.PRIMARY_COLOR};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;
//#endregion
