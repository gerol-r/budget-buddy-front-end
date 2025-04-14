const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/budgets`;

const index = async () => {
    try {
    const res = await fetch(BASE_URL, {
      headers: getHeaders(),
    });
    return await res.json();
 } catch (err) {
        console.log(err);
        throw new Error(err);
      }
    };
