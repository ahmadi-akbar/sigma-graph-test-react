import { RouterProvider } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import { Suspense } from 'react';
import { Provider } from 'react-redux';

import router from './router';

import store from './redux/store';

const persistor = persistStore(store);

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
      </PersistGate>
    </Provider>
  );
}
