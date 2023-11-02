import React from 'react';
import {MoneyType} from "../App";
import {Bankomat} from "./Bankomat";

type CityPropsType = {
    data: MoneyType[]
}

export const City: React.FC<CityPropsType> = (props) => {
    const {data, ...restProps} = props
    const mappedMoney = data.map(m => {
        return <Bankomat key={m.id} banknote={m}/>
    })
    return (
        <div>
            {mappedMoney}
        </div>
    );
};

