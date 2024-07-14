import { IoMdChatboxes } from "react-icons/io";
import { FaMoneyBillWave } from "react-icons/fa";
import { IoShieldCheckmarkSharp } from "react-icons/io5";

interface IndexCardProps {
    title: string;
    description: string;
    icone: 'chat' | 'cash' | 'shield';
}

const IndexCard: React.FC<IndexCardProps> = ({ title, description, icone }) => {
    const illustration = (icone:string) => {
        switch (icone) {
            case 'chat':
                return <IoMdChatboxes size={64}/>;
            case 'cash':
                return <FaMoneyBillWave size={64}/>;
            case 'shield': 
                return <IoShieldCheckmarkSharp size={64}/>;
        }
    }

    return (
        <div className="grid gap-6 place-items-center place-content-center bg-white p-8 lg:w-1/3">
            <div className="flex items-center justify-center border-[10px] border-emerald-500 rounded-full w-36 h-36">
                {illustration(icone)}
            </div>
            <h5 className="text-xl font-bold ">{title}</h5>
            <p className="font-light text-center">{description}</p>
        </div>
    );
}  
export default IndexCard