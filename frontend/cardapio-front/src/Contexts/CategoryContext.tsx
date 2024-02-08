import React, { createContext, useContext, useState, ReactNode } from "react";
import { Category } from "../Types/Category";
import { CategoryApi } from "../Api/CategoryApi";

interface categoryContextType {
  category: string | null;
  chooseCategory: (category: string) => void;
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
  const [category, setCategory] = useState<string | null>();
  const [categories, setCategories] = useState<Category[]>([]);

  const chooseCategory = (category: string) => {
    setCategory(category);
  };
  const fetchCategories = async () => {
    const result = await CategoryApi.getAllCategories();
    setCategories(result.data);
  }

  return (
    <categoryContext.Provider
      value={{ category: category || null, chooseCategory, categories, fetchCategories}}
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
