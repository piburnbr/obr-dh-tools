import React from 'react';
import { clasData } from '../../../data/clases';
import { ClasInfo } from '../../Shared/Types';

type Props = {
    value?: ClasInfo,
    setValue: (value: ClasInfo) => void;
}

const Clas:React.FunctionComponent<Props> = ({value, setValue}: Props) => {
    const options = Object.keys(clasData).map(
        (clas) => (clasData[parseInt(clas)])
    ).sort(
        (a,b) => a.name.localeCompare(b.name)
    );

    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setValue(clasData[parseInt(e.target.value)])
    }

    return (
        <>
            <select value={value?.id} onChange={handleSelect}>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>{option.name}</option>
                ))}
            </select>
        </>
    )
}

export default Clas;