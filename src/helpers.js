//Local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key))
}

//create budget

export const createBudget = ({
    name, amount
}) => {
    const newItem = {
        id: crypto.eandomUUID(),
        name: name,
        createAt: Date.now(),
        amout: +amount,
        //Color
    }
    const existingBudgets = fetchData('budgets') ?? [];
    return localStorage.setItem('budgets', JSON.stringify([...existingBudgets, newItem]))
}

//delete item 
export const deleteItem = ({ key }) => {
    return localStorage.removeItem(key)
}