import {Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {IAttribute, IAttributeType} from 'src/Store/Attributes/interfaces';
import styled, {ThemeConsumer} from 'styled-components/native';
import IonIcon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteAttribute, updateAttribute} from 'src/Store/Attributes/actions';
import Switcher from '../Switcher/Switcher';
import {IColor} from 'src/Store/Configuration/interfaces';
import FieldInput from '../Form/FieldInput';
import OptionCard from '../Form/OptionCard';
import Picker from '../Form/Picker';

type Props = {
  attribute: IAttribute;
};

// export const useDebounce = (value: any, milliSeconds: number) => {
//   const [debouncedValue, setDebouncedValue] = useState(value);

//   useEffect(() => {
//     const handler = setTimeout(() => {
//       setDebouncedValue(value);
//     }, milliSeconds);

//     return () => {
//       clearTimeout(handler);
//     };
//   }, [value, milliSeconds]);

//   return debouncedValue;
// };

const AttributeForm = ({attribute}: Props) => {
  const dispatch = useDispatch();
  const deleteAttributeAction = bindActionCreators(deleteAttribute, dispatch);
  const updateAttributeAction = bindActionCreators(updateAttribute, dispatch);

  const [showTypePicker, setShowTypePicker] = useState(false);

  const handleDeletePress = () => {
    deleteAttributeAction(attribute.id);
  };

  const updateAttributeName = (text: string) => {
    updateAttributeAction({...attribute, name: text});
  };
  const updateAttributeType = (newType: string) => {
    updateAttributeAction({...attribute, type: newType as IAttributeType});
  };
  const revealTypePicker = () => {
    setShowTypePicker(true);
  };

  const updateTitleText = () => {
    updateAttributeAction({...attribute, isTitle: true});
  };

  return (
    <ThemeConsumer>
      {theme => (
        <Wrapper>
          <FieldInputContainer>
            <AttributeInput
              value={attribute.name}
              onChangeText={(text: string) => updateAttributeName(text)}
            />
          </FieldInputContainer>

          <Switcher
            value={attribute.isTitle.toString()}
            true={
              <ChipButton color={theme.colors.teal} onPress={updateTitleText}>
                <ChipIcon IconColor={theme.colors.teal} size={20} name="star" />
              </ChipButton>
            }
            false={
              <ChipButton color={theme.colors.gray} onPress={updateTitleText}>
                <ChipIcon
                  IconColor={theme.colors.gray}
                  size={20}
                  name="star-outline"
                />
              </ChipButton>
            }
          />

          <Switcher
            value={attribute.type}
            TEXT={
              <ChipButton color={theme.colors.teal} onPress={revealTypePicker}>
                <ChipIcon
                  IconColor={theme.colors.teal}
                  size={20}
                  name="text-outline"
                />
              </ChipButton>
            }
            DATE={
              <ChipButton color={theme.colors.brown} onPress={revealTypePicker}>
                <ChipIcon
                  IconColor={theme.colors.brown}
                  size={20}
                  name="calendar-outline"
                />
              </ChipButton>
            }
            NUMBER={
              <ChipButton color={theme.colors.blue} onPress={revealTypePicker}>
                <ChipIcon
                  IconColor={theme.colors.blue}
                  size={20}
                  name="calculator-outline"
                />
              </ChipButton>
            }
            CHECKBOX={
              <ChipButton
                color={theme.colors.orange}
                onPress={revealTypePicker}>
                <ChipIcon
                  IconColor={theme.colors.orange}
                  size={20}
                  name="flag-outline"
                />
              </ChipButton>
            }
          />
          <Picker
            show={showTypePicker}
            close={() => setShowTypePicker(false)}
            height={300}>
            <OptionCard
              options={['TEXT', 'NUMBER', 'DATE', 'CHECKBOX']}
              onPress={function (item: string): void {
                updateAttributeType(item);
                setShowTypePicker(false);
              }}
            />
          </Picker>

          <ChipButton onPress={handleDeletePress} color={theme.colors.red}>
            <ChipIcon
              IconColor={theme.colors.red}
              name="trash-outline"
              size={20}
            />
          </ChipButton>
        </Wrapper>
      )}
    </ThemeConsumer>
  );
};

export default AttributeForm;

//#region  styled components
const Wrapper = styled.View`
  flex-direction: row;
  padding-vertical: 10px;
`;

const FieldInputContainer = styled.View`
  flex: 1;
  padding-horizontal: 5px;
`;

const AttributeInput = styled(FieldInput)`
  flex: 1;
`;

const ChipButton = styled.TouchableOpacity<{color: IColor}>`
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => props.color.PRIMARY_COLOR_FAINT};
  justify-content: center;
  align-items: center;
  margin: 2px;
`;
const ChipIcon = styled(IonIcon)<{IconColor: IColor}>`
  color: ${props => props.IconColor.PRIMARY_COLOR};
`;

//#endregion
