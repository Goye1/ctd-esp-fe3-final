import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";

export const initialState = { theme: "light", data: [] };

const SET_DATA = "SET_DATA";
const TOGGLE_THEME = "TOGGLE_THEME";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case TOGGLE_THEME:
      return { ...state, theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: SET_DATA, payload: data });
      })
      .catch((e) => {
        console.error("Error al obtener los datos de la API:", e);
      });
  }, []);

  const toggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  const contextValue = useMemo(() => ({ ...state, dispatch, toggleTheme }), [
    state,
  ]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useContextGlobal = () => {
  return useContext(ContextGlobal);
};
