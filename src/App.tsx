import React, {useState} from 'react';
import './App.css';
import Country from "./components/Country";

export type BanknotesType = "All" | 'Rubles' | 'Dollars'
export type MoneyType = {
    id: string
    banknotes: BanknotesType
    value: number
    numberId: string
}

const defaultMoney: MoneyType[] = [
    {id: crypto.randomUUID(), banknotes: 'Rubles', value: 100, numberId: 'j23j42k3kre'},
    {id: crypto.randomUUID(), banknotes: 'Dollars', value: 100, numberId: 'f23j42k3kre'},
    {id: crypto.randomUUID(), banknotes: 'Rubles', value: 100, numberId: 'j73j42k3kre'},
    {id: crypto.randomUUID(), banknotes: 'Dollars', value: 100, numberId: 'k23j42k3kre'},
    {id: crypto.randomUUID(), banknotes: 'Dollars', value: 100, numberId: 'r73j42k3kre'},
    {id: crypto.randomUUID(), banknotes: 'Rubles', value: 100, numberId: 'o23j42k3kre'},
    {id: crypto.randomUUID(), banknotes: 'Rubles', value: 100, numberId: 'p23j42k3kre'},
    {id: crypto.randomUUID(), banknotes: 'Dollars', value: 100, numberId: 'w23j42k3kre'},
    {id: crypto.randomUUID(), banknotes: 'Dollars', value: 100, numberId: 'v23j42k3kre'},
    {id: crypto.randomUUID(), banknotes: 'Rubles', value: 100, numberId: 'n73j42k3kre'}
]

const filterMoney = (money: MoneyType[], filter: BanknotesType): MoneyType[] => {
    return filter === "All" ? money : money.filter(m => m.banknotes === filter)
}

function App() {

    const [money, setMoney] = useState<MoneyType[]>(defaultMoney)
    const [filter, setFilter] = useState<BanknotesType>('All')
    const filteredMoney = filterMoney(money, filter)
    return (
        <div className="App">
            <Country data={filteredMoney} setFilter={setFilter}/>
        </div>
    );
}

export default App;
