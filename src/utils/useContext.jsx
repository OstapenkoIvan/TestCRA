import React, { createContext, useContext, useMemo, useState } from 'react';

const context = createContext();
export const useTestContext = () => useContext(context);

export const ContextProvider = ({ children }) => {
  const [text, setText] = useState('test');
  const [number, setNumber] = useState(1);

  // const numValue = useMemo(() => ({ number, setNumber }), [number]);
  // const textValue = useMemo(() => ({ text, setText }), [text]);

  return (
    // <context.Provider value={{ textValue, numValue }}>
    <context.Provider value={{ text, setText, number, setNumber }}>
      {children}
    </context.Provider>
  );
};
