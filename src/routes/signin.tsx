import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { loginUser, profileUser } from "../app/features/userSlice";
import { useState } from "react";
import { useAppDispatch } from "../app/hook/hook";

const Signin = () => {
    const [errorMsg, setErrorMsg] = useState('');
    const dispatch = useAppDispatch();

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); 
      const formData = new FormData(e.currentTarget);
      const entries = Object.fromEntries(formData.entries());
      dispatch(loginUser({ email: String(entries.email), password:String(entries.password), remember: entries.remember === 'on'})).then((data: any) => {
        if (data.type === 'user/loginUser/rejected') return setErrorMsg(data.payload)
        dispatch(profileUser(data.payload.token)).then(() => navigate('/profile'))
      })
    };
  const navigate = useNavigate()
  return (
    <div className='h-full w-full bg-ternary relative flex justify-center'>
        <form action="post" className='bg-white absolute top-12 w-72 p-8 grid gap-8' onSubmit={onSubmit}>
          <div className="grid place-items-center gap-8 relative">
            <FaUserCircle size={25}/>
            <h1 className=" text-center text-2xl font-bold ">Sign in</h1>
            <span className={errorMsg ? "text-lg font-medium text-red-500 -bottom-8 left-0 absolute" : 'hidden'}>{errorMsg}</span>
          </div>
          <div className="grid gap-4">
            <label htmlFor="email" className={`font-bold`}>Usermail
              <input type="email" name="email" id="email" required className="p-1 rounded-sm border border-secondary"/>
            </label>
            <label htmlFor="password" className="font-bold">Password
              <input type="password" name="password" id="password" required className="p-1 rounded-sm border border-secondary"/>
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