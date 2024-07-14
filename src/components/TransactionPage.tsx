import { Link } from "react-router-dom";
import TransactionAccordion from "./TransactionAccordion";
import { IoClose } from "react-icons/io5";

interface Transaction {
    id: number;
    date: string;
    description: string;
    amount: number;
}

const TransactionPage = () => {
    const transactions: Transaction[] = [
        {
            id: 1,
            date: "2022-01-01",
            description: "Transaction 1",
            amount: 100
        },
        {
            id: 2,
            date: "2022-01-02",
            description: "Transaction 2",
            amount: -50
        },
        {
            id: 3,
            date: "2022-01-03",
            description: "Transaction 3",
            amount: -30
        },
        {
            id: 4,
            date: "2022-01-04",
            description: "Transaction 4",
            amount: 200
        },
        {
            id: 5,
            date: "2022-01-05",
            description: "Transaction 5",
            amount: -80
        },
        {
            id: 6,
            date: "2022-01-06",
            description: "Transaction 6",
            amount: 150
        }
    ];

    const totalBalance = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);

    return (
        <div className="h-full w-full bg-ternary">
            <div className="grid gap-2 p-4 h-24 bg-white text-center md:flex md:justify-center md:items-center border-t-2 border-ternary relative">
                <Link to="/profile" className="absolute left-4 top-4"><IoClose size={45}/></Link>
                <div className="grid place-content-center py-2">
                    <div className="flex items-center gap-2">
                        <p className="md:text-lg font-light">Argent Bank</p>
                        <span className="md:text-lg font-light">x6712</span>
                    </div>
                    <p className="text-xl md:text-4xl font-semibold">{totalBalance}$</p>
                    <p className="text-sm md:text-lg font-light capitalize">Current Balance</p>
                </div>
            </div>
            <div className="md:w-4/5 mx-auto mt-4">
                <table className="p-2 w-full">
                    <thead className="bg-ternary text-white">
                        <tr className="p-4 [&>*]:text-white [&>*]:w-1/4">
                            <th>Date</th>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Balance</th>
                        </tr>
                    </thead>
                </table>
                {transactions.map((transaction) => (
                    <TransactionAccordion key={transaction.id} date={transaction.date} description={transaction.description} amount={transaction.amount} />
                ))}
            </div>
        </div>
    );
};

export default TransactionPage;