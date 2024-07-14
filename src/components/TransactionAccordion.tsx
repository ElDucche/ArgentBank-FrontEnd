import { useState } from "react";
import { HiPencil } from "react-icons/hi";

interface TransactionAccordionProps {
    date: string;
    description: string;
    amount: number;
}

const TransactionAccordion: React.FC<TransactionAccordionProps>  = ({date, description, amount}) => {
    const [showContent, setShowContent] = useState(false)
    const [edit, setEdit] = useState<0 | 1 | 2 | 3>(0)
    const [type, setType] = useState(description)
    const [category, setCategory] = useState('unknown')
    const [note, setNote] = useState('')

    const input = 'p-1 text-sm font-light ouline-none ring-0 border-b'
    const closeEdit = () => setEdit(0)

    return (
        <div className="relative bg-white p-4 flex justify-between items-center w-full text-center cursor-pointer hover:bg-slate-100 border" >
            <span className={`absolute w-4 aspect-square border-b-2 border-r-2 border-ternary ${showContent ? 'rotate-45' : '-rotate-[135deg]'}`} onClick={() => setShowContent(!showContent)}></span>
            <p className="text-sm font-light w-1/4">{new Date(date).toDateString()}</p>
            <p className="text-lg font-semibold w-1/4">{description}</p>
            <p className={amount < 0 ? "text-red-500  w-1/4" : "text-green-500  w-1/4"}>{amount}$</p>
            <p className=" w-1/4">2400$</p>
            <div className={showContent ? 'absolute -bottom-24 left-0 z-10 origin-top bg-white h-24 w-full p-4 grid drop-shadow-lg' : 'hidden'}>
                {/* Hidden content */}
                <label htmlFor="trnscType" className="flex gap-2 items-center">Transaction type : <span className={edit == 1 ? 'hidden' : 'block'}>{type}</span> { edit == 1 ? <input type="text" name="trnsType" className={input} onChange={(e) => setType(e.currentTarget.value)} onBlur={closeEdit} /> : <HiPencil className="cursor-pointer hover:scale-105 transition-all"  onClick={() => setEdit(1)}/>}</label>
                <label htmlFor="category" className="flex gap-2 items-center">Category : <span className={edit ? 'hidden' : 'block'}>{category}</span> { edit == 2 ? <input type="text" name="category" className={input} onChange={(e) => setCategory(e.currentTarget.value)} onBlur={closeEdit} /> : <HiPencil className="cursor-pointer hover:scale-105 transition-all"  onClick={() => setEdit(2)}/>}</label>
                <label htmlFor="note" className="flex gap-2 items-center">Note : <span className={edit ? 'hidden' : 'block'}>{note}</span> { edit == 3 ? <input type="text" name="note" className={input} onChange={(e) => setNote(e.currentTarget.value)} onBlur={closeEdit} /> : <HiPencil className="cursor-pointer hover:scale-105 transition-all"  onClick={() => setEdit(3)}/>}</label>
            </div>
        </div>
    );
}

export default TransactionAccordion