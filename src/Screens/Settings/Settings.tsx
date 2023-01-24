import {View, Text, Switch} from 'react-native';
import React from 'react';
import styled, {ThemeConsumer} from 'styled-components/native';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';
import {
  changeColor,
  disableDarkTheme,
  enableDarkTheme,
} from 'src/Store/Configuration/actions';
import {getIsDarkTheme} from 'src/Store/Configuration/selectors';
import {bindActionCreators} from 'redux';
import {IColor} from 'src/Store/Configuration/interfaces';

type Props = {
  title: string;
};

const Settings = ({title = 'Settings'}: Props) => {
  const isDarkTheme = useSelector(getIsDarkTheme, shallowEqual);
  const dispatch = useDispatch();
  const enableDarkThemeAction = bindActionCreators(enableDarkTheme, dispatch);
  const disableDarkThemeAction = bindActionCreators(disableDarkTheme, dispatch);
  const changeColorAction = bindActionCreators(changeColor, dispatch);
  const handleChangeColor = (color: IColor) => () => {
    changeColorAction(color);
  };
  return (
    <ThemeConsumer>
      {theme => (
        <Page>
          <Text>{title}</Text>

          {/* Appearance */}
          <Section>
            <SectionHeader>Appearance</SectionHeader>
            <SettingItem>
              <SettingDetailContainer>
                <SettingItemTitle>Dark mode</SettingItemTitle>
                <SettingItemDescription>
                  Switch between light and dark for eye comfort
                </SettingItemDescription>
              </SettingDetailContainer>
              <Switch
                trackColor={{
                  false: '#767577',
                  true: theme.PRIMARY_COLOR_LIGHT,
                }}
                thumbColor={isDarkTheme ? theme.PRIMARY_COLOR : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                  isDarkTheme
                    ? disableDarkThemeAction()
                    : enableDarkThemeAction();
                }}
                value={isDarkTheme}
              />
            </SettingItem>

            <SettingItem>
              <SettingDetailContainer>
                <SettingItemTitle>Color options</SettingItemTitle>
                <SettingItemDescription>
                  Select a color to match
                </SettingItemDescription>
                <ColorOptionContainer>
                  {Object.keys(theme.colors).map(color => (
                    <ColorButton
                      bgColor={theme.colors[color].PRIMARY_COLOR}
                      onPress={handleChangeColor(theme.colors[color])}
                    />
                  ))}
                </ColorOptionContainer>
              </SettingDetailContainer>
            </SettingItem>
          </Section>
        </Page>
      )}
    </ThemeConsumer>
  );
};

export default Settings;

//#region styled components
const Page = styled.View`
  flex: 1;
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR};
`;

const Section = styled.View`
  padding-top: 20px;
`;

const SectionHeader = styled.Text`
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY_SEMI_BOLD};
  color: ${props => props.theme.PRIMARY_COLOR};
  font-size: ${props => props.theme.FONT_SIZE_SMALL};
  margin-vertical: 10px;
`;

const SettingItem = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-vertical: 15px;
`;
const SettingDetailContainer = styled.View`
  padding-right: 10px;
  flex: 1;
`;
const SettingItemTitle = styled.Text`
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY_SEMI_BOLD};
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-size: ${props => props.theme.FONT_SIZE_LARGE};
`;
const SettingItemDescription = styled.Text`
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY};
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
  font-size: ${props => props.theme.FONT_SIZE_MEDIUM};
`;

const ColorOptionContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;
const ColorButton = styled.TouchableOpacity<{bgColor: string}>`
  height: 30px;
  width: 30px;
  border-radius: 5px;
  background-color: ${props => props.bgColor};
  margin: 5px;
`;

//#endregion
