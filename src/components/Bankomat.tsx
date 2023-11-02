import React from 'react';
import {MoneyType} from "../App";
import styled from "styled-components";

type BankomatPropsType = {
    banknote: MoneyType
}

export const Bankomat: React.FC<BankomatPropsType> = (props) => {
    const {banknote, ...restProps} = props
    return (
        // banknote.banknotes === 'Dollars'
        //     ? < BanknoteGreen>
        //         < Name> {banknote.banknotes}</Name>
        //         <Nominal>{banknote.value}</Nominal>
        //     </BanknoteGreen>
        //     : < BanknoteBlue>
        //         < Name> {banknote.banknotes}</Name>
        //         <Nominal>{banknote.value}</Nominal>
        //     </BanknoteBlue>

        <Banknote color={banknote.banknotes === 'Dollars' ? 'greenyellow' : 'aqua'}>
            < Name> {banknote.banknotes}</Name>
            <Nominal>{banknote.value}</Nominal>
        </Banknote>


    )
        ;
};

type PropsType = {
    color: string
}
const Banknote = styled.div<PropsType>`
  background-color: ${(props) => props.color};
  width: 300px;
  height: 200px;
`

const BanknoteGreen = styled.div`
  width: 300px;
  height: 200px;
  background-color: greenyellow;
`

const BanknoteBlue = styled.div`
  width: 300px;
  height: 200px;
  background-color: aqua;
`

const Name = styled.div`
  margin-top: 10px;
  font-size: 30px;
`

const Nominal = styled.div`
  font-size: 90px;
`



