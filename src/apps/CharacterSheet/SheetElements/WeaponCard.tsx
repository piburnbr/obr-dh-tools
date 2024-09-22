import React, {useEffect, useState, useMemo} from 'react';
import styled from 'styled-components';
import Button from '../../Shared/Button';
import { getWeaponOptions, weaponFeatureData } from '../../../data/weapons';
import Rollable from './Rollable';
import { Character } from '../../Shared/Types/Character/Character';
import { useCharacterContext } from '../../Shared/Contexts/CharacterContext';
import { Attack, Cost, Weapon, WeaponInfo } from '../../Shared/Types';

type Props = {
    weapon?: WeaponInfo;
    setter: (weapon?: Weapon) => void;
    type: 'primary' | 'secondary';
    overload: boolean;
}

const WeaponCard:React.FunctionComponent<Props> = ({weapon, setter, type, overload}: Props) => {
    const { myCharacter, payCost, attrs } = useCharacterContext();
    const [isEditing, setIsEditing] = useState(false);
    const [newVal, setNewVal] = useState<Weapon | undefined>()

    const weaponFeatureInfo = useMemo(() => {
        if (!weapon || !weapon.feature) return undefined;
        return weaponFeatureData[weapon.feature];
    }, [weapon])

    useEffect(() => {
        if (!weapon) return;
        setNewVal(weapon.id)
    }, [weapon])

    const toggleEdit = () => setIsEditing((val) => !val)

    const handleSave = () => {
        if (isEditing && newVal) {
            setter(newVal)
            toggleEdit()
        }
    }

    const handleEdit = () => {
        toggleEdit();
    }

    const handleCancel = () => {
        toggleEdit();
    }

    const handleRemoveClick = () => {
        setter(undefined);
    }

    const handleInputChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setNewVal(parseInt(e.target.value));
    }

    if (!myCharacter) return <></>

    const getRollableId = (weaponInfo:WeaponInfo, attackIdx: number, rollType: 'atk' | 'dmg') => {
        return `wpn-${weaponInfo.name}-${attackIdx}-${rollType}`
    }

    const getAttackRollString = (attack: Attack) => {
        const mod = attrs[attack.attackTrait];
        const scalar = mod + (attack.attackBonus || 0)
        const operator = scalar >= 0 ? '+' : '-'
        return `1dDual ${scalar ? `${operator} ${Math.abs(scalar)}` : ''}`
    }

    const getDamageRollString = (attack: Attack, char: Character) => {
        const scalar = attack.damageBonus || 0
        const operator = scalar >= 0 ? '+' : '-'
        // TODO: + getPrimaryMeleeDamage(myCharacter).total;
        return `${char.proficiency}${attack.damageDie} ${scalar ? `${operator} ${Math.abs(scalar)}` : ''}`
    }

    const handleCostClick = (cost: Cost) => {
        return () => {
            payCost(cost);
        }
    }

    return (
        isEditing ? (
            <Container>
                <select value={newVal} onChange={handleInputChange}>
                    <option value={undefined}>--Pick a Weapon--</option>
                    {getWeaponOptions().filter((opt) => opt.type === type).map((opt) => <option key={opt.id} value={opt.id}>{opt.name}</option>)}
                </select>
                <Button onClick={handleSave}>save</Button>
                <Button onClick={handleCancel}>cancel</Button>
            </Container>
        ) : (
            weapon ? (
                <Card>
                    <Header>
                        <HeaderLeft>
                            {weapon.name}
                            <Hands $bad={overload}>{weapon.hands} hand{weapon.hands > 1 ? 's': ''}</Hands>
                        </HeaderLeft>
                        <Button onClick={handleRemoveClick} color="rgba(200,200,200,0.3)">X</Button>
                    </Header>
                    {weaponFeatureInfo ? (
                        <Row>
                            {weaponFeatureInfo.name}: {weaponFeatureInfo.desc}
                        </Row>
                    ) : undefined}
                    {weapon.attacks.map((attack, idx) => (
                        <AttackSection key={idx}>
                            <Row>
                                {attack.range} &middot; {attack.damageType} &middot; 
                                <Rollable
                                    id={getRollableId(weapon, idx, 'atk')}
                                    rollString={getAttackRollString(attack)}
                                    rollLabel={weapon.name+ ' (to hit)'}
                                >
                                    Hit: {getAttackRollString(attack)}
                                </Rollable>
                                <Rollable
                                    id={getRollableId(weapon, idx, 'dmg')}
                                    rollString={getDamageRollString(attack, myCharacter)}
                                    rollLabel={weapon.name+ ' (dmg)'}
                                >
                                    Dmg: {getDamageRollString(attack, myCharacter)}
                                </Rollable>
                            </Row>
                        </AttackSection>
                    ))}
                    {weapon.costs && weapon.costs.map((cost, idx) => (
                        <Button key={idx} onClick={handleCostClick(cost)}>
                            {cost.label}
                        </Button>
                    ))}

                </Card>
            ) : (
                <Button onClick={handleEdit}>Add Weapon</Button>
            )
        )
    )
}

const Container = styled.div`
    display: flex;
    gap: 5px;
    width: 100%;
`

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`

const HeaderLeft = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`

const Card = styled.div`
    width: 100%;
    background-color: rgba(255, 0, 0, 0.2);
    padding: 3px;
    border-radius: 5px;
`

const AttackSection = styled.div`
`

const Row = styled.div`
    display: flex;
    gap: 5px;
    align-items: center;
    font-size: 13px;
`

const Hands = styled.span<{$bad: boolean}>`
    ${({$bad}) => $bad ? 'color: red;' : ''}
    font-size: 13px;
`

export default WeaponCard;