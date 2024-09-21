import React from 'react';

type Props = {
    value?: string,
    setValue: (value: string) => void;
}

const Clas:React.FunctionComponent<Props> = ({value, setValue}: Props) => {
    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <>
            <input value={value} onChange={handleChange}></input>
        </>
    )
}

export default Clas;