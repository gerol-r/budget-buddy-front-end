const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/budgets`;

const index = async () => {
    try {
        const res = await fetch(BASE_URL, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        return await res.json();
    } catch (err) {
        console.log(err);
    };
};

//showing budget by id 
const show = async (budgetId) => {
    try {
        const res = await fetch(`${BASE_URL}/${budgetId}`, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
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

//delete budget 
const deleteBudget = async (budgetId) => {
    try {
        const res = await fetch(`${BASE_URL}/${budgetId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};
//update 
const update = async (budgetId, FormData) => {
    try {
        const res = await fetch(BASE_URL, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(budgetId, FormData),
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};



//post exp
const createExpense = async (budgetId, expenseFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/${budgetId}/expenses`, {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(expenseFormData),
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};


//upd exp
const updateExpense = async (budgetId, expenseId, expenseFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/${budgetId}/expenses/${expenseId}`, {
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(expenseFormData),
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};


//del expense 
const deleteExpense = async (budgetId, expenseId) => {
    try {
        const res = await fetch(`${BASE_URL}/${budgetId}/expenses/${expenseId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json',
            },
        });
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

export {
    index,
    show,
    create,
    deleteBudget,
    update,
    createExpense,
    updateExpense,
    deleteExpense
};