import {Keyboard, Platform} from 'react-native';
import React, {useEffect} from 'react';
import {ICategory} from 'src/Store/Categories/interfaces';
import FieldInput from 'src/Components/Form/FieldInput';
import styled, {ThemeConsumer} from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  deleteCategory,
  resetDeleteCategory,
  updateCategory,
} from 'src/Store/Categories/actions';
import Button from 'src/Components/Button/Button';
import FieldLabel from 'src/Components/Form/FIeldLabel';
const is = require('is_js');
import AttributeForm from '../AttributeForm/AttributeForm';
import {getAttributes} from 'src/Store/Attributes/selectors';
import {RootState} from 'src/Store/configureStore';
import {createAttribute} from 'src/Store/Attributes/actions';

type Props = {
  category: ICategory;
};

const CategoryForm = ({category}: Props) => {
  //#region hook form
  const dispatch = useDispatch();
  const deleteCategoryAction = bindActionCreators(deleteCategory, dispatch);
  const resetDeleteCategoryAction = bindActionCreators(
    resetDeleteCategory,
    dispatch,
  );
  const updateCategoryAction = bindActionCreators(updateCategory, dispatch);
  const handleDeletePress = () => {
    deleteCategoryAction(category.id);
  };

  const handleUpdateCategoryName = (newName: string) => {
    updateCategoryAction({...category, name: newName});
  };

  //#endregion

  //#region  attributes
  const categoryAttributes = useSelector((state: RootState) =>
    getAttributes(state).filter(item => item.categoryId === category.id),
  );
  const createAttributeAction = bindActionCreators(createAttribute, dispatch);
  const handleNewAttributePress = () => {
    createAttributeAction(category.id);
  };

  useEffect(() => {
    return () => {
      resetDeleteCategoryAction();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //#endregion
  return (
    <ThemeConsumer>
      {theme => (
        <Card>
          {/* Name */}
          <Field>
            <FieldLabel>
              {is.not.empty(category.name) ? category.name : 'Category Name'}
            </FieldLabel>
            <CategoryInput
              onChangeText={handleUpdateCategoryName}
              value={category.name}
              placeholder={'CategoryName'}
              placeholderTextColor={theme.BORDER_COLOR}
              returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
              onSubmitEditing={() => Keyboard.dismiss}
            />
          </Field>

          {/* Attributes */}
          <FieldContainer>
            {categoryAttributes.map(attribute => (
              <AttributeForm key={attribute.id} attribute={attribute} />
            ))}
            <Button text={'Add attribute'} onPress={handleNewAttributePress} />
          </FieldContainer>

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
