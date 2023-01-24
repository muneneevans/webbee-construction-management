import {FlatList} from 'react-native';
import React from 'react';
import {ICategory} from 'src/Store/Categories/interfaces';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {getMachines} from 'src/Store/Machines/selectors';
import MachineForm from 'src/Components/MachineForm/MachineForm';
import {RootState} from 'src/Store/configureStore';
import Button from 'src/Components/Button/Button';
import {bindActionCreators} from 'redux';
import {createMachine} from 'src/Store/Machines/actions';

type Props = {
  route: {
    params: {
      category: ICategory;
    };
  };
};

const Category = ({
  route: {
    params: {category},
  },
}: Props) => {
  const dispatch = useDispatch();
  const filteredMachines = useSelector((state: RootState) =>
    getMachines(state).filter(item => item.categoryId === category.id),
  );

  const createMachineAction = bindActionCreators(createMachine, dispatch);

  const handleAddCategoryMachine = (categoryId: string) => () => {
    createMachineAction(categoryId);
  };
  return (
    <Page>
      <Title>{category.name}</Title>
      <Button
        text="Add Machine"
        onPress={handleAddCategoryMachine(category.id)}
      />
      <FlatList
        data={filteredMachines}
        renderItem={({item}) => <MachineForm machine={item} />}
        keyExtractor={item => item.id}
      />
    </Page>
  );
};

export default Category;

//#region styled components
const Page = styled.View`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
  flex: 1;
`;
const Title = styled.Text`
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY_BOLD};
  font-size: ${props => props.theme.FONT_SIZE_LARGE}px;
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;
//#endregion
