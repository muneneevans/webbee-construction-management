import React from 'react';

import styled from 'styled-components/native';

type Props = {
  options: any[];
  onPress: (item: any) => void;
};

const OptionCard = ({options, onPress}: Props) => {
  const handleOnPress = (item: any) => () => onPress(item);
  return (
    <OptionsContainer>
      <Content>
        {options.map((item, index) => (
          <StyledOptionCard key={index} onPress={handleOnPress(item)}>
            <OptionCardText>{item}</OptionCardText>
          </StyledOptionCard>
        ))}
      </Content>
    </OptionsContainer>
  );
};

export default OptionCard;

//#region styled componetns
const OptionsContainer = styled.View`
  flex: 1;

  padding: 10px;
`;
const Content = styled.ScrollView`
  flex: 1;
`;
const StyledOptionCard = styled.TouchableOpacity`
  padding: 10px;
  margin-vertical: 5px;
  border-width: 2px;
  border-color: white;
  background-color: rgba(255, 255, 255, 0.5);
`;
const OptionCardText = styled.Text`
  font-family: ${props => props.theme.PRIMARY_FONT_FAMILY};
  font-size: ${props => props.theme.FONT_SIZE_MEDIUM};
  color: ${props => props.theme.PRIMARY_TEXT_COLOR};
`;

//#endregion
