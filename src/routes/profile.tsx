import { useState } from "react";
import Account, { AccountProps } from "../components/Account";
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../app/features/userSlice'; 

interface ProfileProps {
    firstName?: string;
    lastName?: string;
    accounts?: AccountProps[]
}

const userAccounts: AccountProps[] = [
    {
        name: 'Checking',
        amount: 2082.79,
        cryptogram: '(x8349)',
        type: 'available'
    },
    {
        name: 'Savings',
        amount: 10928.42,
        cryptogram: '(x6712)',
        type: 'available'
    },
    {
        name: 'Credit Card',
        amount: 184.30,
        cryptogram: '(x8349)',
        type: 'current'
    },
]

const Profile: React.FC<ProfileProps> = () => {
    const [isEdit, setIsEdit] = useState(false)
    const accounts = userAccounts
    const dispatch = useDispatch()
    const user = useSelector((state: any) => state.user)
    const edit = async (e:any) => {
        e.preventDefault()
        const { firstname, lastname } = e.target.elements;
        await dispatch(updateUser({ firstName: firstname.value, lastName: lastname.value, token: user.token}));
        setIsEdit(false)
    }
    if (user.token === '') {
        throw new Error("Vous n'êtes pas connecté")
    }

    return (
    <div className="h-full w-full bg-ternary">
        <div className='w-11/12 md:w-4/5 h-full mx-auto relative flex flex-col gap-4'>
            <section className="text-center text-white h-40 grid gap-4 place-items-center pt-8">
                <h2 className="text-white text-3xl font-medium">Welcome back</h2>
                <h3 className="text-white text-3xl font-medium">{user.firstName} {user.lastName} !</h3>
                <button className={isEdit ? "hidden" : "text-white py-2 px-4 w-fit font-medium bg-primary border-b-2 border-r-2 transition-all border-t-2 border-l-2 border-l-primary border-t-primary border-emerald-700 active:border-t-emerald-700 active:border-l-emerald-700 active:border-primary"} onClick={() => setIsEdit(true)}>Edit name</button>
                <form action="" onSubmit={edit} className={isEdit ? `flex gap-4` : `hidden`}>
                    <input type="text" name="firstname" className="p-2 bg-white outline-none placeholder:text-gray-300 placeholder:font-light" placeholder={user.firstName}/>
                    <input type="text" name="lastname" className="p-2 bg-white outline-none placeholder:text-gray-300 placeholder:font-light" placeholder={user.lastName}/>
                    <button type="submit" className="text-white py-2 px-4 w-fit font-medium bg-primary border-b-2 border-r-2 transition-all border-t-2 border-l-2 border-l-primary border-t-primary border-emerald-700 active:border-t-emerald-700 active:border-l-emerald-700 active:border-primary">OK</button>
                </form>
            </section>
            <section className="grid gap-4 place-items-center p-8">
                <div className="grid gap-4 w-full">
                    {
                        accounts?.map((account, index) =>
                            <Account key={index} name={account.name} type={account.type}  cryptogram={account.cryptogram}  amount={account.amount}/>
                        )
                    }
                </div>
            </section>
        </div>
    </div>
    )
}
export default Profile