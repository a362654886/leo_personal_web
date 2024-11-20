import type { AppProps } from "next/app";

import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import "@/styles/globals.css";
import 'react-vertical-timeline-component/style.min.css';

import { store } from "@/store/store";

const persistedStore = persistStore(store);

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <title>leo personal blog</title>
      </Head>
      <PersistGate
        loading={<div>Restoring state...</div>}
        persistor={persistedStore}
      >
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default dynamic(() => Promise.resolve(App), {
  ssr: false,
});
