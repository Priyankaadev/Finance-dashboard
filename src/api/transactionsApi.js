const API_URL = import.meta.env.VITE_API_URL

export const fetchTransactions = async ()=>{
    try {
        const response = await fetch(API_URL)
        if(!response.ok){
            throw new Error('Failed to fetch transactions')
        }
        return await response.json()
    } catch (error) {
        console.log("error", error)
        return []
    }
}

export const addTransaction = async (newTransaction)=>{
    try {
        const response = await fetch(API_URL, {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(newTransaction)
        })
        return await response.json()
    } catch (error) {
        console.log("error", error)
        
    }
}

export const deleteTransaction = async (id)=>{
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method:'DELETE'
        })
        
    } catch (error) {
        console.log("error", error)
    }
}