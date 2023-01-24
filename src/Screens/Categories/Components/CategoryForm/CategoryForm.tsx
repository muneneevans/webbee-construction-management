import {Keyboard, Platform} from 'react-native';
import React from 'react';
import {ICategory} from 'src/Store/Categories/interfaces';
import FieldInput from 'src/Components/Form/FieldInput';
import styled, {ThemeConsumer} from 'styled-components/native';
import {Controller, useForm} from 'react-hook-form';
import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteCategory} from 'src/Store/Categories/actions';
import Button from 'src/Components/Button/Button';
import FieldLabel from 'src/Components/Form/FIeldLabel';
const is = require('is_js');

type Props = {
  category: ICategory;
};

const CategoryForm = ({category}: Props) => {
  //#region hook form
  const {control} = useForm();
  const dispatch = useDispatch();
  const deleteCategoryAction = bindActionCreators(deleteCategory, dispatch);
  const handleDeletePress = () => {
    deleteCategoryAction(category.id);
  };
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
              <Field>
                <FieldLabel>
                  {is.not.empty(value) ? value : 'Category Name'}
                </FieldLabel>
                <CategoryInput
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  placeholder={name}
                  placeholderTextColor={theme.BORDER_COLOR}
                  returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
                  onSubmitEditing={() => Keyboard.dismiss}
                />
              </Field>
            )}
            name="name"
            defaultValue={category.name}
          />
          <FieldContainer>
            <Button
              text={'Delete Category'}
              onPress={handleDeletePress}
              color={theme.colors.red.PRIMARY_COLOR}
            />
          </FieldContainer>
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
const CategoryInput = styled(FieldInput)`
  width: 100%;
`;
const FieldContainer = styled.View`
  padding-vertical: 10px;
`;
const Field = styled.View`
  width: 100%;
`;

//#endregion
