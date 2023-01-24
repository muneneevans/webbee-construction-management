import {Text} from 'react-native';
import React from 'react';
import {IMachine} from 'src/Store/Machines/interfaces';
import styled from 'styled-components/native';
import {getMachineAttributesWithParentAttribute} from 'src/Store/Machines/selectors';
import {useSelector} from 'react-redux';
import {RootState} from 'src/Store/configureStore';
import MachineAttributeForm from '../MachineAttributeForm/MachineAttributeForm';

type Props = {machine: IMachine};

const MachineForm = ({machine}: Props) => {
  const machineAttributes = useSelector((state: RootState) =>
    getMachineAttributesWithParentAttribute(state).filter(
      item => item.machineId === machine.id,
    ),
  );

  return (
    <Wrapper>
      <MachineTitle>{`Id: ${machine.id}`}</MachineTitle>
      {machineAttributes.map(machineAttribute => (
        <MachineAttributeForm
          key={machineAttribute.id}
          machineAttribute={machineAttribute}
        />
      ))}
    </Wrapper>
  );
};

export default MachineForm;

//#region styled components
const Wrapper = styled.View`
  padding: 10px;
  border-width: 1px;
  border-color: ${props => props.theme.BORDER_COLOR};
`;

const MachineTitle = styled.Text`
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY_BOLD};
  font-size: ${props => props.theme.FONT_SIZE_LARGE}px;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

//#endregion
