
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/budgets`;

const index = async () => {
	try {
		const res = await fetch(BASE_URL, {
			headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
		});
		return res.json();
	} catch (err) {
		console.log(err);
	}
};

const show = async (budgetId) => {
	try {
		const res = await fetch(`${BASE_URL}/${budgetId}`, {
			headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
		});
		return res.json();
	} catch (err) {
		console.log(err);
	}
};

const create = async (budgetFormData) => {
	try {
		const res = await fetch(BASE_URL, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${localStorage.getItem("token")}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify(budgetFormData),
		});
        return res.json();
	} catch (err) {
        console.log(err)
    }
};

const createExpense = async (budgetId, expenseFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/${budgetId}/expenses`, {
            method: 'POST',
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}`, 
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(expenseFormData),
        });
        return res.json();
    } catch (err) {
        console.log(err);
    }
};

const deleteBudget = async (budgetId) => {
    try {
        const res = await fetch (`${BASE_URL}/${budgetId}`, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`, 
            },
        });
        return res.json();
    } catch (err) {
        console.log(err)
    }
};

const update = async (budgetId, budgetFormData) => {
    try {
        const res = await fetch(`${BASE_URL}/${budgetId}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(budgetFormData),
        });
    
        // Check if the request was successful
        if (!res.ok) {
          throw new Error('Failed to update budget');
        }
    
        // Return the updated budget object (response body)
        return res.json(); // This is the key change!
      } catch (err) {
        console.log(err);
      }
    };



// //del expense
const deleteExpense = async (budgetId, expenseId) => {
  try {
    const res = await fetch(`${BASE_URL}/${budgetId}/expenses/${expenseId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "Content-Type": "application/json",
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
    update,
    deleteBudget,
    createExpense,
    deleteExpense
};