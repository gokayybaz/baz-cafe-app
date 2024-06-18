import React, { createContext, useState } from 'react';

// Context'i oluştur
export const AppContext = createContext();

// Provider bileşeni
export const AppProvider = ({ children }) => {
    const [state, setState] = useState({
        basketProducts: []
    });

    return (
        <AppContext.Provider value={{ state, setState }}>
            {children}
        </AppContext.Provider>
    );
};
