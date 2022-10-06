import { configureStore } from '@reduxjs/toolkit';
import CryptoReducer, {
  fetchData,
} from '../features/cryptoSlice';

const store = configureStore({
  reducer: {
    cryptoCurrency: CryptoReducer,
  },
});
store.dispatch(fetchData());
export default store;
