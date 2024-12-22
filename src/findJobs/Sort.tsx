

import { useState } from 'react';
import { Button, Combobox, useCombobox, Text, Box } from '@mantine/core';
import {IconAdjustments} from "@tabler/icons-react";

const jobs = ['Relevance', ' Most Recent', 'Salary(Low to High)', 'Salary (High to Low',];

function Sort() {
    const [selectedItem, setSelectedItem] = useState<string | null>('Relevance');
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
    });

    const options = jobs.map((item) => (
        <Combobox.Option value={item} key={item}>
            {item}
        </Combobox.Option>
    ));

    return (
        <>


            <Combobox
                store={combobox}
                width={200}
                position="bottom-start"
                withArrow
                onOptionSubmit={(val) => {
                    setSelectedItem(val);
                    combobox.closeDropdown();
                }}
            >
                <Combobox.Target>
                    <div onClick={() => combobox.toggleDropdown()} className='flex gap-2  border border-bright-sun-400 p-2 rounded-xl items-center'>
                        <p className='text-sm'>{selectedItem}</p><IconAdjustments stroke={2}  className='text-bright-sun-400'/>
                    </div>
                </Combobox.Target>

                <Combobox.Dropdown className='w-52'>
                    <Combobox.Options>{options}</Combobox.Options>
                </Combobox.Dropdown>
            </Combobox>
        </>
    );
}
export default Sort