const BASE_URL = "https://fakestoreapi.com/products";

export const getProducts = async () => {
  try {
    const response = await fetch(BASE_URL);

    if (!response.ok) {
      throw new Error("Ошибка загрузки");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(
      `${BASE_URL}/${id}`
    );

    if (!response.ok) {
      throw new Error("Ошибка товара");
    }

    return await response.json();
  } catch (error) {
    throw error;
  }
};