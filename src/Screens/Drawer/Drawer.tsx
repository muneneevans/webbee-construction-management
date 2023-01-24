import React from 'react';
import styled from 'styled-components/native';

import IonIcon from 'react-native-vector-icons/Ionicons';
import {useSelector, shallowEqual} from 'react-redux';
import {getCategories} from 'src/Store/Categories/selectors';

const MenuListItem = ({
  selected = false,
  title = '',
  icon = 'home',
  iconSelected = 'home',
  onPress = () => {},
}) => {
  return (
    <MenuItem selected={selected} onPress={onPress}>
      <MenuIcon
        selected={selected}
        name={selected ? iconSelected : icon}
        size={20}
      />
      <MenuTitle selected={selected}>{title}</MenuTitle>
    </MenuItem>
  );
};

type Route = {
  key: string;
  name: string;
  params?: {sortBy: string};
};
type DrawerProps = {
  navigation: {
    navigate: (screen: string, params?: any) => void;
    dangerouslyGetState: () => {index: string; routes: any};
  };
  state: {
    type: string;
    key: string;
    routeNames: ['Home', 'Profile', 'Settings'];
    routes: Route[];
    index: number;
    stale: boolean;
  };
};

export default function Drawer({navigation, state}: DrawerProps) {
  const {index, routes} = state;
  const currentRoute = routes[index].name;

  const categories = useSelector(getCategories, shallowEqual);

  return (
    <Wrapper>
      <Content>
        <Header
          source={{
            // uri: 'https://cdn.dribbble.com/users/143620/screenshots/16287069/media/d7b5f6bb395dbe753d2b5158b39f00f8.jpeg?compress=1&resize=800x600&vertical=top',
            uri: 'https://cdn.dribbble.com/userupload/3496574/file/original-8c27ef3ba227d123e110fdacd1825c95.png?compress=1&resize=2048x1536',
          }}
        />
        <Section>
          <MenuListItem
            title="Dashboard"
            selected={currentRoute === 'Dashboard'}
            icon={'home-outline'}
            iconSelected={'home'}
            onPress={() => {
              navigation.navigate('Dashboard');
            }}
          />

          <MenuListItem
            title="Manage Categories"
            selected={currentRoute === 'Categories'}
            icon={'briefcase-outline'}
            iconSelected={'briefcase'}
            onPress={() => {
              navigation.navigate('Categories');
            }}
          />
        </Section>

        <Section>
          <SectionTitle>Categories</SectionTitle>
          {categories.map(category => (
            <MenuListItem
              title={category.name}
              selected={currentRoute === 'Category'}
              icon={'folder-outline'}
              iconSelected={'folder'}
              onPress={() => {
                navigation.navigate('Category', {category});
              }}
            />
          ))}
        </Section>

        <Section>
          <SectionTitle>Settings</SectionTitle>

          <MenuListItem
            title="Settings"
            selected={currentRoute === 'Settings'}
            icon={'settings-outline'}
            iconSelected={'settings'}
            onPress={() => {
              navigation.navigate('Settings');
            }}
          />
        </Section>
      </Content>
    </Wrapper>
  );
}

//#region styled-components
const Wrapper = styled.View`
  flex: 1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

const Header = styled.ImageBackground`
  padding-vertical: 10px;
  padding-top: 20px;
  padding-horizontal: 10px;
  opacity: 0.7;

  border-bottom-color: ${props => props.theme.BORDER_COLOR};
  border-bottom-width: 0.3px;
  min-height: 200px;
`;

const Content = styled.ScrollView`
  flex: 1;
`;

const Section = styled.View`
  padding-top: 10px;
  padding-vertical: 5px;
  padding-horizontal: 10px;

  border-bottom-color: ${props => props.theme.BORDER_COLOR};
  border-bottom-width: 0.3px;
`;
const SectionTitle = styled.Text`
  font-size: ${props => props.theme.FONT_SIZE_MEDIUM};
  color: ${props => props.theme.PRIMARY_TEXT_COLOR_LIGHT};
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY_BOLD};
  padding-vertical: 10px;
  padding-horizontal: 10px;
`;

const MenuItem = styled.TouchableOpacity<{selected: boolean}>`
  flex-direction: row;
  padding-vertical: 10px;
  margin-vertical: 2.5px;
  padding-horizontal: 7.5px;
  align-items: center;
  border-radius: 5px;

  background-color: ${props =>
    props.selected
      ? props.theme.PRIMARY_COLOR
      : props.theme.PRIMARY_BACKGROUND_COLOR};
`;

const MenuIcon = styled(IonIcon)<{selected: boolean}>`
  color: ${props =>
    props.selected
      ? props.theme.PRIMARY_FOREGROUND_COLOR
      : props.theme.PRIMARY_TEXT_COLOR};
`;
const MenuTitle = styled.Text<{selected: boolean}>`
  font-size: ${props => props.theme.FONT_SIZE_LARGE};
  color: ${props =>
    props.selected
      ? props.theme.PRIMARY_FOREGROUND_COLOR
      : props.theme.PRIMARY_TEXT_COLOR};
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY_SEMI_BOLD};
  margin-left: 20px;
`;

//#endregion
