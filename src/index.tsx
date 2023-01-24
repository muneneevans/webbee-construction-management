import React from 'react';

import store, {persistor} from './Store/configureStore';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './Routes/Routes';
import styled from 'styled-components/native';

import {PersistGate} from 'redux-persist/integration/react';
// import { navigationRef} from "src/Routes/RootNavigation"

const onBeforeLift: () => void = () => ({});
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate
        onBeforeLift={onBeforeLift}
        loading={null}
        persistor={persistor}>
        <Wrapper>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </Wrapper>
      </PersistGate>
    </Provider>
  );
};

export default App;

//#region styled components
const Wrapper = styled.SafeAreaView`
  flex: 1;
`;
//#endregion
