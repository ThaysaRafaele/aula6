import { createContext, useState } from "react";

export const CartContext = createContext();

//funções adicionar, remover protudo ao carrinho

export const CartProvider = ({ children }) => {
    const [data, setData] = useState([]);

    const AddItem = (product) => {
        const items = [...data, product];

        setData(items);
    }

    return (
        <CartContext.Provider value={{ data, AddItem }}>
            {children}
        </CartContext.Provider>
    );
};