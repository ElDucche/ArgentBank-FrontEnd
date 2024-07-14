import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser, profileUser } from "../app/features/userSlice";
import { useSelector } from "react-redux";
import { useState } from "react";

const Signin = () => {
    
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user)

    const onSubmit = async (e: any) => {
      e.preventDefault(); 
      const formData = new FormData(e.currentTarget);
      const entries = Object.fromEntries(formData.entries());
      dispatch(loginUser({ email: e.target.email.value, password: e.target.password.value, remember: entries.remember === 'on'})).then((data) => {
        dispatch(profileUser(data.payload.token)).then(() => {navigate('/profile')})
      })
    };
  const navigate = useNavigate()
  return (
    <div className='h-full w-full bg-ternary relative flex justify-center'>
        <form action="post" className='bg-white absolute top-12 w-72 p-8 grid gap-8' onSubmit={onSubmit}>
          <div className="grid place-items-center gap-8">
          <FaUserCircle size={25}/>
          <h1 className=" text-center text-2xl font-bold ">Sign in</h1>
          </div>
          <div className="grid gap-4">
            <label htmlFor="email" className="font-bold">Usermail
              <input type="email" name="email" id="email" className="p-1 rounded-sm border border-secondary"/>
            </label>
            <label htmlFor="password" className="font-bold">Password
              <input type="password" name="password" id="password" className="p-1 rounded-sm border border-secondary"/>
            </label>
            <label htmlFor="remember" className="font-light flex gap-2">
              <input type="checkbox" name="remember" id="remember" className="p-1 rounded-sm border border-secondary"/>
              Remember me
            </label>
            <button className="bg-emerald-500 text-white underline p-2 ">Sign in</button>
          </div>
        </form>
    </div>
  )
}

export default Signin