import { Link } from "react-router-dom";

export type AccountProps = {
    amount: number;
    name: string;
    cryptogram: string;
    type: "current" | "available"
}

const Account: React.FC<AccountProps> = ({ name, amount, cryptogram, type }) => {
    const usd = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
    });

    return (
        <div className="grid gap-2 p-4 bg-white md:flex md:justify-between md:items-center">
            <div>
                <div className="flex items-center gap-2">
                    <p className=" text-lg font-light">Argent Bank {name}</p>
                    <span className="text-lg font-light">{cryptogram}</span>
                </div>
                <p className=" text-4xl font-semibold">{usd.format(amount)}</p>
                <p className=" text-lg font-light capitalize">{type} Account</p>
            </div>
            <Link to={`/profile/x6712`} className="md:h-12 md:px-4 cta-button p-2 text-lg">View transactions</Link>
        </div>
    )
}
export default Account