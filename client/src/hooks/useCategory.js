import axios from "axios";
import { useEffect, useState } from "react";

export default function useCategory() {
  const [categories, setCategories] = useState([]);

  //get Category
  const getCategories = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      console.log("data", data);
      setCategories(data?.category);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  return categories;
}
