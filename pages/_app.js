import AppContext from "../AppContext";
import languagesObject from "../languagesObject";
import { useState } from "react";
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const [languageSelected, setLanguageSelected] = useState("en");

  const [requestHeaders, setRequestHeaders] = useState(null);
  const [user, setUser] = useState(null);

  const languageObject = languagesObject;

  return (
    <AppContext.Provider
      value={{
        state: {
          languages: languageObject[languageSelected],
          languageSelected: languageSelected,
          requestHeaders: requestHeaders,
          user: user
        },
        setLanguageSelected: setLanguageSelected,
        setRequestHeaders: setRequestHeaders,
        setUser: setUser
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;