import axios from "axios";

const baseUrl="http://127.0.0.1:8000/api/employees/"

export async function employeeListApi(){

    return await axios.get(baseUrl)
}

export async function employeeCreateApi(data){

    let headers={
        "Content-Type":"multipart/form-data"
    }


    return await axios.post(baseUrl,data,{headers:headers})
}

export async function employeeDetailApi(id){

    return  await axios.get(baseUrl+`${id}/`)
}

export async function employeeUpdateApi(id,data){

    return await axios.put(baseUrl+`${id}/`,data)
}

export async function employeeDeleteApi(id){

    return await axios.delete(baseUrl+`${id}`)

}