import React, {useMemo} from 'react';
import styled from 'styled-components';
import Rollable from './Rollable';

type Props = {
    name: string;
    value: number;
}

const Attribute: React.FunctionComponent<Props> = ({name, value}: Props) => {
    const id=useMemo(() => {
        return `attr-${name}`
    }, [name]);

    const rollString = useMemo(() => {
        return `1dDual + ${value}`
    }, [value])

    return (
        <TODO>
        <Rollable id={id} rollLabel={name} rollString={rollString} >
            {name}: {value}
        </Rollable>
        </TODO>
    )
}

const TODO = styled.div`
    width: 90px;
    font-size: 13px;
    text-align: center;
`

export default Attribute;