import { configureStore } from '@reduxjs/toolkit';
import CryptoReducer, {
  fetchData,
} from '../features/cryptoSlice'; // eslint-disable-line

const store = configureStore({
  reducer: {
    cryptoCurrency: CryptoReducer,
  },
});
store.dispatch(fetchData());
export default store;
