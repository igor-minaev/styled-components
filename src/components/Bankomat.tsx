import React from 'react';
import {MoneyType} from "../App";

type BankomatPropsType = {
    banknote: MoneyType
}

export const Bankomat: React.FC<BankomatPropsType> = (props) => {
    const {banknote, ...restProps} = props
    return (
        <div>
            <span>{banknote.banknotes}</span>
            <span>{banknote.value}</span>
        </div>
    );
};

