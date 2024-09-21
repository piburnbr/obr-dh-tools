import React, { useMemo, useState } from 'react';
import { Experience } from '../../Shared/Types';
import styled from 'styled-components';
import Button from '../../Shared/Button';

type Props = {
    value?: Experience[];
    setValue: (value: Experience[]) => void;
}


const Experiences:React.FunctionComponent<Props> = ({value, setValue}: Props) => {
    const [name, setName] = useState('');
    const [val, setVal] = useState(2);

    const showUpdate = useMemo(() => {
        if (!value) return false;
        const idx = value.findIndex((ex) => ex.name === name);
        return idx >= 0;
    }, [name, value])

    const handleRemove = (experience: Experience) => {
        return () => {
            if (!value) return;
            const idx = value.findIndex((ex) => ex.name === experience.name);
            if (idx < 0) return;

            setValue([
                ...value.slice(0, idx),
                ...value.slice(idx+1)
            ])
        }
    }
    
    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    
    const handleValChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setVal(parseInt(e.target.value));
    }
    
    const handleAdd = () => {
        if (!name || !val || !value) return;
        const idx = value.findIndex((ex) => ex.name === name);
        if (idx >= 0) return;
        setValue([
            ...value,
            {
                name: name,
                value: 2,
            }
        ])
        setName('');
    }

    const handleUpdate = () => {
        if (!name || !val || !value) return;
        const idx = value.findIndex((ex) => ex.name === name);
        if (idx < 0) return;
        setValue([
            ...value.slice(0, idx),
            {
                name: name,
                value: val,
            },
            ...value.slice(idx+1)
        ])
        setName('');
    }

    return (
        <Container>
            <List>
                {value?.map((ex, idx) => (
                    <Row key={idx}>
                        {ex.name}: {ex.value}
                        <Button onClick={handleRemove(ex)}>remove</Button>
                    </Row>
                ))}
            </List>
            <AddRow>
                <NameInput value={name} onChange={handleNameChange} />
                <ValInput value={val} onChange={handleValChange} type='number' />
                {!showUpdate && <Button onClick={handleAdd}>Add</Button>}
                {showUpdate && <Button onClick={handleUpdate}>Update</Button>}
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

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-left: 12px;
`

const Row = styled.div`
    display: flex;
    width: 250px;
    justify-content: space-between;
    align-items: center;
`

const AddRow = styled.div`
    display: flex;
    gap: 4px;
    padding-left: 12px;
`

const NameInput = styled.input`
    width: 150px;
`

const ValInput = styled.input`
    width: 30px;
`

export default Experiences;