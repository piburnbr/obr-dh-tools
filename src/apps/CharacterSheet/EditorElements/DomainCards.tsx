import React, {useMemo, useState} from 'react';
import styled from 'styled-components';
import { DomainCardInfo } from '../../Shared/Types';
import { DomainCardData } from '../../../data/domainCards';
import Button from '../../Shared/Button';

type Props = {
    value?: DomainCardInfo[],
    setValue: (value: DomainCardInfo[]) => void;
}

const DomainCards:React.FunctionComponent<Props> = ({value, setValue}: Props) => {
    const [selected, setSelected] = useState<DomainCardInfo | undefined>();
    
    const options = useMemo(() => (
        Object.keys(DomainCardData).map(
            (domainCard) => (DomainCardData[parseInt(domainCard)])
        ).filter(
            (domainCardInfo) => !value?.includes(domainCardInfo)
        ).sort(
            (a,b) => a.name.localeCompare(b.name)
        )
    ), [value])

    
    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setSelected(DomainCardData[parseInt(e.target.value)])
    }

    const handleAdd = () => {
        if (!selected) return;
        setValue([
            ...value || [],
            selected
        ])
        setSelected(undefined);
    }

    const handleRemove = (domainCard: DomainCardInfo) => {
        return () => {
            if (!value) return;
            const idx = value.findIndex((card) => card.id === domainCard.id)
            if (idx < 0) return;

            setValue([
                ...value.slice(0, idx),
                ...value.slice(idx+1)
            ])
        }
    }

    return (
        <Container>
            {value && value.length && <PickedList>
                {value?.map((domainCard, idx) => (
                    <PickedCard key={idx}>
                        {domainCard.name}
                        <Button onClick={handleRemove(domainCard)}>remove</Button>
                    </PickedCard>
                ))}
            </PickedList>}
            <AddRow>
                <select value={selected?.id} onChange={handleSelect}>
                    <option value={undefined}>--Add Domain Card--</option>
                    {options.map((option) => (
                        <option key={option.id} value={option.id}>{option.name}</option>
                    ))}
                </select>
                <Button onClick={handleAdd}>Add</Button>
            </AddRow>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-size: 14px;
`

const PickedList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-left: 12px;
`

const PickedCard = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-between;
    align-items: center;
`

const AddRow = styled.div`
    display: flex;
    gap: 4px;
    padding-left: 12px;
`

export default DomainCards;