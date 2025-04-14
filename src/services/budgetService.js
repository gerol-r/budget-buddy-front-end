const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/budgets`;

const getBudgets = async () => {
    const res = await fetch(BASE_URL, {
      headers: getHeaders(),
    });
    return await res.json();
  };
  
