import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import AppNavigator from '../../src/navigations/AppNavigator';
import { NativeBaseProvider } from 'native-base';

// import store, { persistor } from 'app/src/stores';

let startTime = 0;

const App: React.FC = () => {

	return (
    <NativeBaseProvider>
	    {/* <Provider store={store}> */}
          {/* <PersistGate loading={null} persistor={persistor}>
            <Root>
          <AppNavigator />
            </Root>
          </PersistGate> */}
        <AppNavigator />
        {/* </Provider> */}
      </NativeBaseProvider>
	)
};

export default App;
