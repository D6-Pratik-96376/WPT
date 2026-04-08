import axios from 'axios'
// import config from '../config/config'

export async function addstudent(Name, Marks) {
    const url = 'http://localhost:4100/student'
    const body = { Name, Marks }
    try {
        const response = await axios.post(url, body)
        return response.data
    } catch (error) {
        console.log(error)
        return { status: 'error', error: 'Something went wrong' }
    }
}

export async function updatestudent(sid,Name,Marks) {
    const url = 'http://localhost:4100/student'
    const body = {sid,Name, Marks }
    
    try {
        const response = await axios.put(url, body)
        return response.data
    } catch (error) {
        console.log(error)
        return { status: 'error', error: 'something went wrong' }
    }
}

export async function deletestudent(sid){
    const url = `http://localhost:4100/student/${sid}`
    //const body = {sid}
    try{
        const response = await axios.delete(url)
        return response.data
    }catch(error){
        return { status: 'error' , error: 'something went wrong'  }

    }
}