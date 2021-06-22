import request from 'superagent';

const URL = 'hidden-citadel-20940.herokuapp.com'; 

export async function getAllMeals() {
    const data = await request.get(`${URL}/meals`);

    return data.body;
}

export async function getOneMeal(id) {
    const data = await request.get(`${URL}/meals/${id}`);

    return data.body;
}

export async function updateMeal(id, mealData) {
    const data = await request
        .put(`${URL}/meals/${id}`)
        .send(mealData);

    return data.body;
}

export async function createMeal(mealData) {
    const data = await request
        .post(`${URL}/meals/`)
        .send(mealData);

    return data.body;
}

export async function getAllCategories() {
    const data = await request.get(`${URL}/categories`);

    return data.body;
}

export async function deleteMeal(id) {
    const data = await request.delete(`${URL}/meals/${id}`);

    return data.body;
}