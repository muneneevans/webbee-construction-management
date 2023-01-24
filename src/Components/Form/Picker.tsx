import React from 'react';
import styled from 'styled-components/native';
import Modal from 'react-native-modal';

type Props = {
  show: boolean;
  close: () => void;
  children: React.ReactNode;
  height: number;
};

const Picker = ({show = false, close, children, height = 200}: Props) => {
  return (
    <PickerModal
      backdropOpacity={0.3}
      animationOut="slideOutDown"
      animationOutTiming={500}
      isVisible={show}
      onBackdropPress={close}>
      <PickerContentContainer>
        <PickerContent height={height}>{children}</PickerContent>
      </PickerContentContainer>
    </PickerModal>
  );
};

export default Picker;

//#region styled components
const PickerModal = styled(Modal)`
  justify-content: center;
`;
const PickerContentContainer = styled.View`
  background-color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR_LIGHT};
`;
const PickerContent = styled.View<{height: number}>`
  width: 100%;
  height: ${props => (props.height ? props.height : 300)}px;
`;
//#endregion
