import React, { createContext, useContext, useState, ReactNode } from "react";
import { Category } from "../Types/Category";
import { CategoryApi } from "../Api/CategoryApi";

interface categoryContextType {
  categoryId: number | null;
  chooseCategory: (categoryId: number) => void;
  categories: Category[];
  fetchCategories: () => void;
}
interface CategoryProviderProps {
  children: ReactNode;
}

const categoryContext = createContext<categoryContextType | undefined>(
  undefined,
);

const CategoryProvider: React.FC<CategoryProviderProps> = ({ children }) => {
  const [categoryId, setCategoryId] = useState<number | null>();
  const [categories, setCategories] = useState<Category[]>([]);

  const chooseCategory = (categoryId: number) => {
    setCategoryId(categoryId);
  };
  const fetchCategories = async () => {
    const result = await CategoryApi.getAllCategories();
    setCategories(result.data);
  }

  return (
    <categoryContext.Provider
      value={{ categoryId: categoryId || null, chooseCategory, categories, fetchCategories}}
    >
      {children}
    </categoryContext.Provider>
  );
};

const useContextCategory = (): categoryContextType => {
  const context = useContext(categoryContext);

  if (!context) {
    throw new Error("useContextCategory must be used within an AppProvider");
  }

  return context;
};

export { CategoryProvider, useContextCategory };
