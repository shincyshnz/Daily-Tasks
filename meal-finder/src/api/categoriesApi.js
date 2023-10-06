import axios from "axios"

export const categoriesApi = async()=>{
    const response = await axios("https://www.themealdb.com/api/json/v1/1/categories.php");
    return response?.data;
}

export const getSingleCategoryItems = async(category)=>{
    const response = await axios(`https://themealdb.com/api/json/v1/1/filter.php?c=${category}`);
    return response?.data;
}