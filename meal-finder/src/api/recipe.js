import axios from "axios";

export const recipe = async(mealId)=>{
    const response = await axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    return response?.data?.meals[0];
}
