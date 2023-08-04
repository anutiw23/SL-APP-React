import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import userManager, { loadUserFromStorage } from './services/userService'
import AuthProvider from './utils/authProvider'
import { Pages } from './routes';

function App() {

  useEffect(() => {
    // fetch current user from cookies
    loadUserFromStorage(store)
  }, [])

  return (
    <Provider store={store}>
      <AuthProvider userManager={userManager} store={store}>
          <Pages />
      </AuthProvider>
    </Provider>
  );
}

export default App;
