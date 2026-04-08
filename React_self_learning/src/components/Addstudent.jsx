import { useState } from "react"
import { addstudent } from "../services/student"
import { updatestudent } from "../services/student"
import { deletestudent } from "../services/student"
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//import { ToastContainer } from 'react-toastify'

function Addstudent(){
    const [Name,setName] = useState('')
    const [Marks,setMarks] = useState(0)
    const [sid,setsid] = useState(0)
    


const handleAddClick = async () => {
    const data = await addstudent(Name,Marks)
    if(data.status == 'success'){
        toast.success('Add student successfully')
    }
    else{
        toast.error(data.error)
    }
}

const handleUpdateClick = async () =>{
    const data = await updatestudent(sid,Name,Marks)
    if(data.status == 'success'){
        toast.success('Details Updated Successfully')
    }else{
        toast.error(data.error)
    }
}

// const handleDeleteClick = async () =>{
//     // console.log("Delete clicked", sid)
//     const data = await deletestudent(sid)
//     //console.log("response" , data)
//     if(data.success == 'success'){
//         toast.success("Student deleted Successfully")
//     }else{
//         toast.error(data.error || "delete failed")
//     }
// }

const handleDeleteClick = async () => {
    const data = await deletestudent(sid)
    console.log("response", data)

    if (data.status === 'success') {
        toast.success("Student deleted Successfully")
    } else {
        toast.error(data.error || "Delete failed")
    }
}

return (

    <div>

        <div className="container w-50">
                <h2 className="mb-3">ADD STUDENT</h2>
                <div className="mb-3">
                    <label for="sid" className="form-label">Student id</label>
                    <input type="Number" className="form-control" id="sid" placeholder="Enter sid" onChange={e => setsid(Number(e.target.value))} />
                </div>
                <div className="mb-3">
                    <label for="username" className="form-label">Name</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter name" onChange={e => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="marks" className="form-label">Marks</label>
                    <input type="number" className="form-control" id="marks" placeholder="Enter marks" onChange={e => setMarks(Number(e.target.value))} />
                </div>
               
                {/* <div className="mb-3">
                    <label>Already have an account ?</label>
                    <Link to='/'>Click Here To Signin</Link>
                </div> */}
                <div className="mb-3">
                    <button className="btn btn-success" onClick={handleAddClick}>AddStudent</button>
                </div>

                <div className="mb-3">
                    <button className="btn btn-warning" onClick={handleUpdateClick}>UpdateStudent</button>
                </div>

                <div className="mb-3">
                    <button className="btn btn-danger" onClick={handleDeleteClick}>DeleteStudent</button>
                </div>
            </div>
            


    </div>
)
}

export default Addstudent