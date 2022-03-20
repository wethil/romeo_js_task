import { Provider } from "react-redux";
import ThemeProvider from "components/ThemeProvider/ThemeProvider";

import store from "core/store.js";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
