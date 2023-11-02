import React from 'react';
import {MoneyType} from "../App";
import {Bankomat} from "./Bankomat";
import styled from "styled-components";

type CityPropsType = {
    data: MoneyType[]
}

export const City: React.FC<CityPropsType> = (props) => {
    const {data, ...restProps} = props
    const mappedMoney = data.map(m => {
        return <Bankomat key={m.id} banknote={m}/>
    })
    return (
        <Wrapper>
            {mappedMoney}
        </Wrapper>
    );
};


const Wrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 10px;
`
