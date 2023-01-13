import { useSelector,useDispatch } from "react-redux"
import { fetchProjectTasks,getError, getStatus, selectTaskWithTodo } from "./projectTaskSlice"
import { getToken } from "../auth/authSlice"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
function TodoList(){

    const {projectId}=useParams()
    const projectTasks= useSelector(selectTaskWithTodo)
    const token=useSelector(getToken)
    const status =useSelector(getStatus)
    const error=useSelector(getError)
    const dispatch=useDispatch

    useEffect(()=>{
        if(status==='idle'){
            dispatch(fetchProjectTasks({
                projectId:String(projectId),
                token,
            }))
        }else
        {
            console.error('status must be idle')
        }

    },[status,projectId,token])

    let Content



    return ()
}

export default TodoList