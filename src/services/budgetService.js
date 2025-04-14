const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/budgets`;

const index = async () => {
    try {
    const res = await fetch(BASE_URL, {
      headers: getHeaders(),
    });
    return await res.json();
 } catch (err) {
        console.log(err);
    };
};

//showing budget by id 
const show = async (budgetId) => {
    try {
        const res = await fetch (`${BASE_URL}/${budgetId}`, {
            headers: getHeaders(),
          });
    return await res.json();
} catch (err) {
       console.log(err);
   };
};



export { 
    index,
    show,
  };