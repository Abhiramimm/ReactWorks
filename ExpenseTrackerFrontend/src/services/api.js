import axios from "axios"

const BASE_URL="http://127.0.0.1:8000/api/"


export async function ExpenseCreateApi(data){

    return await axios.post(BASE_URL+"expenses/",data)
}

export async function ExpenseListApi(){

    return await axios.get(BASE_URL+"expenses/")
}