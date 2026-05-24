const API =
  "https://682f3d746746cf4d47b9c14a.mockapi.io/products";

export const getAdminProducts = async () => {
  const response = await fetch(API);

  if (!response.ok) {
    throw new Error("Ошибка загрузки");
  }

  return await response.json();
};

export const createProduct = async (product) => {
  const response = await fetch(API, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error("Ошибка создания");
  }

  return await response.json();
};

export const deleteProduct = async (id) => {
  const response = await fetch(`${API}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Ошибка удаления");
  }
};