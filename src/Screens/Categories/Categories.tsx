import React from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getCategories} from 'src/Store/Categories/selectors';
import Button from 'src/Components/Button/Button';
import {bindActionCreators} from 'redux';
import {createCategory} from 'src/Store/Categories/actions';
import CategoryForm from 'components/CategoryForm/CategoryForm';
import styled from 'styled-components/native';

const Categories = () => {
  const categories = useSelector(getCategories, shallowEqual);
  const dispatch = useDispatch();

  const createCategoryAction = bindActionCreators(createCategory, dispatch);

  const onNewCategoryPress = () => {
    createCategoryAction();
  };

  return (
    <Page>
      <Button text={'Add Category'} onPress={onNewCategoryPress} />
      {categories.map(category => (
        <CategoryFormContainer key={category.id}>
          <CategoryForm category={category} />
        </CategoryFormContainer>
      ))}
    </Page>
  );
};

export default Categories;

//#region styled components
const Page = styled.ScrollView`
  flex: 1;
`;
const CategoryFormContainer = styled.View`
  padding: 10px;
`;
//#endregion
