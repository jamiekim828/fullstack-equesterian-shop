import { configureStore } from '@reduxjs/toolkit';

import userReducer from './slice/user';
import riderReducer from './slice/rider';
import horseReducer from './slice/horse';
import cartReducer from './slice/cart';

const store = configureStore({
  reducer: {
    user: userReducer,
    rider: riderReducer,
    horse: horseReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
