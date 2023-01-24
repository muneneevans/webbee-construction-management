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
      <Text>{`Id: ${machine.id}`}</Text>
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
`;

//#endregion
