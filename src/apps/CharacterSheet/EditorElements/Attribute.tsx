import React from 'react';
import styled from 'styled-components';

type Props = {
    value?: number,
    setValue: (value: number) => void;
}

const Attribute:React.FunctionComponent<Props> = ({value, setValue}: Props) => {
    const options = [{
        val: 2,
        label: "+2",
    }, {
        val: 1,
        label: "+1",
    }, {
        val: 0,
        label: "+0",
    }, {
        val: -1,
        label: "-1",
    }]

    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setValue(parseInt(e.target.value))
    }

    return (
        <>
            <select value={value} onChange={handleSelect}>
                {options.map((option) => (
                    <Option key={option.val} value={option.val}>{option.label}</Option>
                ))}
            </select>
        </>
    )
}

const Option = styled.option`
    text-align: right;
`

export default Attribute;