import React from 'react';
import { radioStations } from '../RadioPlayer.data';
import { Dropdown, Option } from './RadioPlayerDropdown.styles';
import { RadioStation } from './RadioPlayerDropdown.types';
import { usePlayer } from '@/contexts';

const RadioPlayerDropdown: React.FC = () => {
    
    const { currentUrl, changeStation } = usePlayer();

    const handleStationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        changeStation(event.target.value);
    };

    return (
        <Dropdown 
            value={currentUrl} 
            onChange={handleStationChange}
        >
            {radioStations.map((station: RadioStation, index: number) => (
                <Option 
                    key={index} 
                    value={station.url}
                    isSelected={currentUrl === station.url}
                >
                    {station.name}
                </Option>
            ))}
        </Dropdown>
    );
};
export default RadioPlayerDropdown;