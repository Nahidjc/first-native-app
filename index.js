import { registerRootComponent } from "expo";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./state/store";
import App from "./App";
import { LoadingScreen } from "./components/Loader/Loader";
import { Provider } from "react-redux";

function MainApp() {
  let persistor = persistStore(store);
  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}

registerRootComponent(MainApp);
