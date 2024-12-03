import React from 'react';
import { radioStations } from './RadioPlayerDropdown.data';
import { Dropdown } from './RadioPlayerDropdown.styles';
import { RadioStation } from './RadioPlayerDropdown.types';
import { usePlayer } from '@/contexts';

const RadioPlayerDropdown: React.FC = () => {
    
    const { currentUrl, changeStation } = usePlayer();

    const handleStationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        changeStation(event.target.value);
    };

    return (
        <Dropdown value={currentUrl} onChange={handleStationChange}>
            {radioStations.map((station: RadioStation, index: number) => (
                <option key={index} value={station.url}>
                    {station.name}
                </option>
            ))}
        </Dropdown>
    );
};
export default RadioPlayerDropdown;