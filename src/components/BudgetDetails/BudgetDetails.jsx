import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import * as budgetService from '../../services/budgetService';

const budgetDetails = () => {
    const { budgetId } = useParams();
    console.log('budgetId', budgetId);

    const [budget, setBudget] = useState(null);
  
    return <main>Budget Details</main>;
  };