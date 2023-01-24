import {TouchableOpacityProps} from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

interface Props extends TouchableOpacityProps {}

const FieldInputButton = (props: Props) => {
  return <StyledInputButton {...props} />;
};

export default FieldInputButton;

//#region styled components
const StyledInputButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR_LIGHT};
  border-radius: 3px;
  padding-vertical: 10px;
  padding-horizontal: 0px;
  margin-top: 5px;
`;
//#endregion
