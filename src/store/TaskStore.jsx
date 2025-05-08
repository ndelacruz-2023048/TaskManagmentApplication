import { create } from "zustand";

export const useTaskStore = create((set)=>({
    isFormTaskOpen:false,
    setIsFormTaskOpen:()=>{
        set({isFormTaskOpen:true})
    }
}))