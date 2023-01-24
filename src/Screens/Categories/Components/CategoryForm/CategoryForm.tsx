import {Keyboard, Platform} from 'react-native';
import React from 'react';
import {ICategory} from 'src/Store/Categories/interfaces';
import FieldInput from 'src/Components/Form/FieldInput';
import styled, {ThemeConsumer} from 'styled-components/native';
import {Controller, useForm} from 'react-hook-form';

type Props = {
  category: ICategory;
};

const CategoryForm = ({category}: Props) => {
  //#region hook form
  const {control} = useForm();
  //#endregion
  return (
    <ThemeConsumer>
      {theme => (
        <Card>
          {/* Name */}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, name, value}}) => (
              <FieldInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder={name}
                placeholderTextColor={theme.BORDER_COLOR}
                returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
                onSubmitEditing={() => Keyboard.dismiss}
              />
            )}
            name="name"
            defaultValue={category.name}
          />
        </Card>
      )}
    </ThemeConsumer>
  );
};

export default CategoryForm;

//#region styled-components
const Card = styled.View`
  padding: 20px;
  border-radius: 10px;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;
//#endregion
