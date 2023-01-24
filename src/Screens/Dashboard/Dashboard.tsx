import {SectionList} from 'react-native';
import React from 'react';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {getMachineCategoryMappings} from 'src/Store/Machines/selectors';
import MachineForm from 'src/Components/MachineForm/MachineForm';
import styled from 'styled-components/native';
import Button from 'src/Components/Button/Button';
import {bindActionCreators} from 'redux';
import {createMachine} from 'src/Store/Machines/actions';

const Dashboard = () => {
  const categoryMachines = useSelector(
    getMachineCategoryMappings,
    shallowEqual,
  );

  const dispatch = useDispatch();
  const createMachineAction = bindActionCreators(createMachine, dispatch);

  const handleAddCategoryMachine = (categoryId: string) => () => {
    createMachineAction(categoryId);
  };
  return (
    <Page>
      <SectionList
        sections={categoryMachines}
        keyExtractor={item => item.id}
        renderItem={({item}) => <MachineForm machine={item} />}
        renderSectionHeader={({section: {title, categoryId}}) => (
          <CategorySection>
            <CategorySectionTitle>{title}</CategorySectionTitle>
            <Button
              text="Add Machine"
              onPress={handleAddCategoryMachine(categoryId)}
            />
          </CategorySection>
        )}
      />
      {/* {categoryMachines.map(category => (
        <View key={category.categoryId}>
          <Text>{category.title}</Text>
        </View>
      ))} */}
    </Page>
  );
};

export default Dashboard;

//#region styled components
const Page = styled.View`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;
const CategorySection = styled.View`
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;
const CategorySectionTitle = styled.Text`
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY};
  font-size: ${props => props.theme.FONT_SIZE_LARGE};
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;
//#endregion
