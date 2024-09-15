import React, {useState} from "react";
import styled from "styled-components";
import { Ability, AbilityCost, abilityData } from "../../../data/abilities";
import Button from "../../Shared/Button";
import { useRoomContext } from "../../Shared/Contexts/RoomContext";

type Props = {
    ability: Ability;
}

const AbilityCard:React.FunctionComponent<Props> = ({ability}: Props) => {
    const {myCharacter, updateCharacter} = useRoomContext();
    const [isExpanded, setIsExpanded] = useState(false);
    const ab = abilityData[ability];

    const handleCostClick = (cost: AbilityCost) => {
        return () => {
            if (!myCharacter) return;
            const {hp, stress, armor, hope} = myCharacter.state;
            hp.marked = Math.min(hp.max, Math.max(0, hp.marked + (cost.hp || 0)));
            stress.marked = Math.min(stress.max, Math.max(0, stress.marked + (cost.stress || 0)));
            armor.marked = Math.min(armor.max, Math.max(0, armor.marked + (cost.armor || 0)));
            hope.marked = Math.min(hope.max, Math.max(0, hope.marked + (cost.hope || 0)));
            updateCharacter(myCharacter);
        }
    }

    return (
        <Card>
            {ab.name} <br/>
            {ab.costs && ab.costs.map((cost) => (
                <Button onClick={handleCostClick(cost)}>
                    {cost.label}: {}
                </Button>
            ))}
            {ab.uses && (
                <div></div>
            )}
        </Card>
    )
}

const Card = styled.div`
    width: 100%;
    background-color: black;
    padding: 3px;
    border-radius: 5px;
`

export default AbilityCard