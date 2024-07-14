import { Link } from "react-router-dom"
import argentBankLogo from '../assets/argentBankLogo.png'
import { FaUserCircle } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { logoutUser } from "../app/features/userSlice";
import { useDispatch } from "react-redux";

interface NavbarProps {
    firstName?: string;
}

const Navbar: React.FC<NavbarProps> = ({firstName}) => {
    const dispatch = useDispatch()
    const signOut = () => {
        dispatch(logoutUser())
    }


    return (
        <nav className="w-full flex items-center justify-between p-2">
            <Link to={'/'}><img src={argentBankLogo} className="w-44" alt="Logo ArgentBank"/></Link>

                {
                    firstName ?
                    <div className="flex gap-4 items-center">
                        <Link to={'/profile'} className="flex gap-2 items-center font-semibold hover:underline"><FaUserCircle size={25}/>{firstName}</Link>
                        <Link to={'/'} onClick={signOut} className="flex gap-2 items-center font-semibold hover:underline"><PiSignOutBold size={25}/>Sign out</Link>
                    </div>
                    :
                    <Link to={'/login'} className="flex gap-2 items-center font-semibold hover:underline"><FaUserCircle size={25}/> Sign in</Link>
                }
        </nav>
    )
}
export default Navbar