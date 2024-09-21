import React, {useMemo} from 'react';
import { useCharacterContext } from '../../Shared/Contexts/CharacterContext';
import { useRoomContext } from '../../Shared/Contexts/RoomContext';
import WeaponCard from './WeaponCard';
import { Weapon } from '../../Shared/Types';

const Weapons: React.FunctionComponent = () => {
    const { updateCharacter } = useRoomContext();
    const { myCharacter, primaryWeapon, secondaryWeapon } = useCharacterContext();

    const overload = useMemo(() => {
        return (primaryWeapon?.hands || 0) + (secondaryWeapon?.hands || 0) > 2
    }, [primaryWeapon, secondaryWeapon])

    const updatePrimaryWeapon = (weapon?: Weapon) => {
        if (!myCharacter) return;
        myCharacter.primaryWeapon = weapon;
        updateCharacter(myCharacter);
    }

    const updateSecondaryWeapon = (weapon?: Weapon) => {
        if (!myCharacter) return;
        myCharacter.secondaryWeapon = weapon;
        updateCharacter(myCharacter);
    }

    return (
        <>
            <WeaponCard type='primary' weapon={primaryWeapon} setter={updatePrimaryWeapon} overload={overload} />
            <WeaponCard type='secondary' weapon={secondaryWeapon} setter={updateSecondaryWeapon} overload={overload} />
        </>
    )
}

export default Weapons;