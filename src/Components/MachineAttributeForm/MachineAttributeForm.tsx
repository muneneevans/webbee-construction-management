import {Text} from 'react-native';
import React, {useState} from 'react';
import {IMachineAttributeDetails} from 'src/Store/Machines/interfaces';
import Switcher from '../Switcher/Switcher';
import FieldInput from '../Form/FieldInput';
import styled from 'styled-components/native';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateMachineAttribute} from 'src/Store/Machines/actions';
import IonIcon from 'react-native-vector-icons/Ionicons';
import DateTimePicker from '@react-native-community/datetimepicker';
import FieldLabel from '../Form/FIeldLabel';
const is = require('is_js');

type Props = {
  machineAttribute: IMachineAttributeDetails;
};

const MachineAttributeForm = ({machineAttribute}: Props) => {
  const dispatch = useDispatch();
  const updateMachineAttributeAction = bindActionCreators(
    updateMachineAttribute,
    dispatch,
  );

  const handleValueChanged = (newValue: string | number | Date | boolean) => {
    // let {attributeDetails, ...machineAttributeOnlyProperties} =
    //   machineAttribute;
    updateMachineAttributeAction({
      ...machineAttribute,

      value: newValue,
    });
  };

  const handleEnablePress = () => {
    handleValueChanged(true);
  };
  const handleDisablePress = () => {
    handleValueChanged(false);
  };

  //#region date
  const [date, setDate] = useState(new Date(1598051730000));
  const [showDatePicker, setShowDatePicker] = useState(false);
  const onDateChange = (event: any, selectedDate: any) => {
    const currentDate = selectedDate;
    setShowDatePicker(false);
    setDate(currentDate);
    handleValueChanged(currentDate);
  };
  const revealDatePicker = () => {
    setShowDatePicker(true);
  };
  //#endregion
  return (
    <Field>
      <FieldLabel>{machineAttribute.attributeDetails.name}</FieldLabel>
      <Switcher
        value={machineAttribute.attributeDetails.type}
        TEXT={
          <FieldInput
            value={machineAttribute.value as string}
            onChangeText={handleValueChanged}
          />
        }
        NUMBER={
          <FieldInput
            value={machineAttribute.value as string}
            onChangeText={handleValueChanged}
            keyboardType="number-pad"
          />
        }
        CHECKBOX={
          <FlagButton
            onPress={
              (machineAttribute.value as boolean)
                ? handleDisablePress
                : handleEnablePress
            }>
            <FlagIcon
              iconEnabled={machineAttribute.value as boolean}
              name={
                (machineAttribute.value as boolean)
                  ? 'checkbox-outline'
                  : 'square-outline'
              }
              size={25}
            />
          </FlagButton>
        }
        DATE={
          <>
            {/* <Button
              onPress={revealDatePicker}
              text={
                is.existy(machineAttribute.value as Date)
                  ? machineAttribute.value?.toString()
                  : 'Select date'
              }
            /> */}
            <DateButton onPress={revealDatePicker}>
              <DateButtonText>
                {is.existy(machineAttribute.value as Date)
                  ? machineAttribute.value?.toString()
                  : 'Select date'}
              </DateButtonText>
            </DateButton>
            <Switcher
              value={showDatePicker.toString()}
              true={
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={'date'}
                  is24Hour={true}
                  onChange={onDateChange}
                />
              }
            />
          </>
        }
      />
    </Field>
  );
};

export default MachineAttributeForm;

//#region  styled components
const Field = styled.View`
  padding: 10px;
`;

const FlagButton = styled.TouchableOpacity`
  padding: 5px;
  justify-content: center;
  align-items: center;

  align-self: flex-start;
`;
const FlagIcon = styled(IonIcon)<{iconEnabled: boolean}>`
  color: ${props =>
    props.iconEnabled
      ? props.theme.PRIMARY_COLOR
      : props.theme.PRIMARY_TEXT_COLOR_LIGHT};
`;

const DateButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  border-color: ${props => props.theme.BORDER_COLOR};
  border-width: 2px;
  padding: 10px;
`;

const DateButtonText = styled.Text`
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY};
  font-size: ${props => props.theme.FONT_SIZE_MEDIUM}px;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;
//#endregion
