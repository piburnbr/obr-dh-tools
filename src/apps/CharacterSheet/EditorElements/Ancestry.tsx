import React from 'react';
import { ancestryData } from '../../../data/ancestries';
import { AncestryInfo } from '../../Shared/Types';

type Props = {
    value?: AncestryInfo,
    setValue: (value: AncestryInfo) => void;
}

const Ancestry:React.FunctionComponent<Props> = ({value, setValue}: Props) => {
    const options = Object.keys(ancestryData).map(
        (ancestry) => (ancestryData[parseInt(ancestry)])
    ).sort(
        (a,b) => a.name.localeCompare(b.name)
    );

    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setValue(ancestryData[parseInt(e.target.value)])
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

export default Ancestry;