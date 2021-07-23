import { Provider } from "react-redux";
import AppFootball from "../redux-sagas/routers/web";
import configureStore from "./store/";

const { store } = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <AppFootball />
    </Provider>
  );
};
export default App;
