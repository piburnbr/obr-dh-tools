import React from 'react';
import { communityData } from '../../../data/communities';
import { CommunityInfo } from '../../Shared/Types';

type Props = {
    value?: CommunityInfo,
    setValue: (value: CommunityInfo) => void;
}

const Community:React.FunctionComponent<Props> = ({value, setValue}: Props) => {
    const options = Object.keys(communityData).map(
        (community) => (communityData[parseInt(community)])
    ).sort(
        (a,b) => a.name.localeCompare(b.name)
    );

    const handleSelect = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setValue(communityData[parseInt(e.target.value)])
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

export default Community;