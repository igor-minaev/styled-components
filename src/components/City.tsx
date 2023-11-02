import React from 'react';
import {MoneyType} from "../App";

type CityPropsType = {
    data: MoneyType[]
}

const City: React.FC<CityPropsType> = (props) => {
    const {data, ...restProps} = props
    const mappedMoney = data.map(m => {
        return <li key={m.id}>
            <span>{m.banknotes}</span>
            <span>{m.value}</span>
        </li>
    })
    return (
        <div>
            <ul>{mappedMoney}</ul>
        </div>
    );
};

export default City;