import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";



// Definimos el estado inicial
export const initialState = { theme: "light", data: [] };

// Acciones para el reducer
const SET_DATA = "SET_DATA";
const TOGGLE_THEME = "TOGGLE_THEME";

// Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return {data: action.payload };
    case TOGGLE_THEME:
      return {theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

// Creamos el contexto
export const ContextGlobal = createContext();

// Definimos el proveedor de contexto
export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    // Realiza la solicitud a la API con fetch
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        // Actualiza el estado global con los datos de la API utilizando el dispatch
        console.log(data);
        dispatch({ type: SET_DATA, payload: data });
      })
      .catch((e) => {
        console.error("Error al obtener los datos de la API:", e);
      });
  }, []);

  // Memoizamos el contexto para evitar renders innecesarios
  const contextMemo = useMemo(() => ({ ...state, dispatch }), [state]);

  return (
    <ContextGlobal.Provider value={contextMemo}>
      {children}
    </ContextGlobal.Provider>
  );
};

// Función personalizada para usar el contexto
export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
