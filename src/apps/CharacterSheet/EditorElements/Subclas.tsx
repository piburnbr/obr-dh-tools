import React, {useEffect, useMemo} from 'react';
import { subclasData } from '../../../data/subclases';
import { ClasInfo, SubclasInfo } from '../../Shared/Types';

type Props = {
    clas?: ClasInfo,
    value?: SubclasInfo,
    setValue: (value: SubclasInfo) => void;
}

const Subclas:React.FunctionComponent<Props> = ({clas, value, setValue}: Props) => {
    const options = useMemo(() => {
        return clas?.subclases.map(
            (subclas) => subclasData[subclas]
        ).sort(
            (a,b) => a.name.localeCompare(b.name)
        ) || []
    }, [clas]) 

    useEffect(() => {
        setValue(subclasData[clas?.subclases[0]])
    }, [clas])

    if (!clas) return undefined;

    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setValue(subclasData[parseInt(e.target.value)])
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

export default Subclas;