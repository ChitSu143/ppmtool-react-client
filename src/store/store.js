import { configureStore } from "@reduxjs/toolkit";
import projectReducer from '../components/project/projectSlice';
import userReducer from '../components/users/userSlice';
import authReducer from '../components/auth/authSlice';
import projectTaskReduer from "../components/project-task/projectTaskSlice";

export const store = configureStore({
    reducer:{
        projects:projectReducer,
        users:userReducer,
        auths:authReducer,
        projectTask:projectTaskReduer

    }
});