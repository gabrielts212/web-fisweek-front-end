import { createContext, useContext, useReducer } from "react";

const Language = createContext();

const LanguageReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE":
            return {...state, language: action.payload}
    }
};



const LanguageContext = ({children}) => {

    const url = window.location.href.split("/#/")

    let languageMain = "ptBR"
    if(url [url.length - 1] === "en" || url [url.length - 1] === "es" ) {
    languageMain = url[url.length - 1]
    }
  
    const [ state, dispatch ] = useReducer(LanguageReducer, {
        language: languageMain,
    });
    return (
        <Language.Provider value={{ state, dispatch }}>
            {children}
        </Language.Provider>
    );
};

export const LanguageState = () => {
    return useContext(Language);
};

export default LanguageContext;