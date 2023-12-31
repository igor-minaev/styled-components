import React from 'react';
import {BanknotesType, MoneyType} from "../App";
import {City} from "./City";

type CountryPropsType = {
    data: MoneyType[]
    setFilter: (filter: BanknotesType) => void
}

export const Country: React.FC<CountryPropsType> = (props) => {
    const {data, setFilter, ...restProps} = props
    const onAllClickHandler = () => setFilter('All')
    const onDollarsClickHandler = () => setFilter('Dollars')
    const onRublesClickHandler = () => setFilter('Rubles')
    return (
        <div>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onDollarsClickHandler}>Dollars</button>
            <button onClick={onRublesClickHandler}>Rubles</button>
            <City data={data}/>

        </div>
    );
};

