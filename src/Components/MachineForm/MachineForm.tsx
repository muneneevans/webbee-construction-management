import React, {useEffect, useState} from 'react';
import {
  IMachine,
  IMachineAttributeDetails,
} from 'src/Store/Machines/interfaces';
import styled from 'styled-components/native';
import {getMachineAttributesWithParentAttribute} from 'src/Store/Machines/selectors';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'src/Store/configureStore';
import MachineAttributeForm from '../MachineAttributeForm/MachineAttributeForm';
import Button from '../Button/Button';
import {bindActionCreators} from 'redux';
import {deleteMachine} from 'src/Store/Machines/actions';

type Props = {machine: IMachine};

const MachineForm = ({machine}: Props) => {
  const machineAttributes = useSelector((state: RootState) =>
    getMachineAttributesWithParentAttribute(state).filter(
      item => item.machineId === machine.id,
    ),
  );

  const dispatch = useDispatch();
  const deleteMachineAction = bindActionCreators(deleteMachine, dispatch);
  const handleDeleteMachine = () => {
    deleteMachineAction(machine.id);
  };

  const [title, setTitle] = useState('');
  useEffect(() => {
    let foundAttribute = machineAttributes.find(
      (item: IMachineAttributeDetails) => item.attributeDetails.isTitle,
    );
    if (foundAttribute) {
      setTitle(prevTitle => foundAttribute.value?.toString());
    }
  }, [machine]);

  return (
    <Wrapper>
      <MachineTitleField>
        {/* <MachineTitle>{`Id: ${machine.id}`}</MachineTitle> */}
        <MachineTitle>{`${title}`}</MachineTitle>
        <Button text="Delete Machine" onPress={handleDeleteMachine} />
      </MachineTitleField>
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
const MachineTitleField = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
const MachineTitle = styled.Text`
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY_BOLD};
  font-size: ${props => props.theme.FONT_SIZE_LARGE}px;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

//#endregion
