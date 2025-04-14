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

//post new budget
const create = async (budgetFormData) => {
    try {
        const res = await fetch(BASE_URL, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(budgetFormData),
        });
        return res.json();
      } catch (error) {
        console.log(error);
      }
    };


export { 
    index,
    show,
    create
  };