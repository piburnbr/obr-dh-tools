import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

type Props = {
    resize: () => void,
}

const References: React.FunctionComponent<Props> = ({resize}: Props) => {
    const [showRanges, setShowRanges] = useState(false);
    const [showConditions, setShowConditions] = useState(false);

    const toggleRanges = () => setShowRanges((s: boolean) => !s);
    const toggleConditions = () => setShowConditions((s: boolean) => !s);

    useEffect(() => {
        resize();
    }, [showRanges, showConditions])

    return (
        <>
            <Header onClick={toggleRanges}>
                {showRanges ? 'v' : '>'}
                &nbsp;
                <h3>Ranges</h3>
            </Header>
            {showRanges && <ul>
                <li>Melee: 5 feet</li>
                <li>Very Close: 10 ft</li>
                <li>Close: 30 ft</li>
                <li>Far: 60 ft</li>
                <li>Very Far: 300 ft</li>
            </ul>}
            <Header onClick={toggleConditions}>
                {showConditions ? 'v' : '>'}
                &nbsp;
                <h3>Conditions</h3>
            </Header>
            {showConditions && <ul>
                <li><strong>Hidden:</strong> Any rolls against you are at disadvantage. Lost by moving, attacking, or line of sight.</li>
                <li><strong>Restrained:</strong> You can’t move, but you can still take actions.</li>
                <li><strong>Vulnerable:</strong> All rolls targeting you have advantage.</li>
            </ul>}
        </>
    )
}

const Header = styled.div`
    cursor: pointer;
    display: flex
`

export default References;
