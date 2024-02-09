import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "../Types/Product";
import { ProductApi } from "../Api/ProductApi";

interface productContextType {
  products: Product[];
  fetchProducts: () => void;
}
interface ProductProviderProps {
  children: ReactNode;
}

const productContext = createContext<productContextType | undefined>(
  undefined,
);

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const fetchProducts = async () => {
    const result = await ProductApi.getProducts();
    setProducts(result);
  }

  return (
    <productContext.Provider
      value={{ products, fetchProducts}}
    >
      {children}
    </productContext.Provider>
  );
};

const useContextProducts = (): productContextType => {
  const context = useContext(productContext);

  if (!context) {
    throw new Error("useContextProduct must be used within an AppProvider");
  }

  return context;
};

export { ProductProvider, useContextProducts };
