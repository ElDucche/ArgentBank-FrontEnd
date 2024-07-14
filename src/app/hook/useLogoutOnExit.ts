import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../features/userSlice";

function useLogoutOnExit() {
    const dispatch = useDispatch();
  
    useEffect(() => {
      const handleBeforeUnload = () => {
        if (localStorage.getItem('remember')) return ;
        dispatch(logoutUser());
      };
  
      window.addEventListener('beforeunload', handleBeforeUnload);
  
      return () => {
        window.removeEventListener('beforeunload', handleBeforeUnload);
      };
    }, [dispatch]);
  }

export default useLogoutOnExit;