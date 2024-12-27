import {Menu, rem, Avatar} from '@mantine/core';
import {

    IconMessageCircle,
    IconUserCircle, IconFileDots, IconLogout2,
} from '@tabler/icons-react';
import {Link} from "react-router-dom";


const ProfileMenu=()=> {
    return (
        <Menu shadow="md" width={200}>
            <Menu.Target>
                <div className="flex items-center gap-2 cursor-pointer ">
                    <div className="xs-mx:hidden">Sarita</div>
                    <Avatar src='woman.png' alt='image'/>
                </div>
            </Menu.Target>

            <Menu.Dropdown>

                <Menu.Item  component={Link} to={'/profile'} leftSection={<IconUserCircle style={{width: rem(14), height: rem(14)}}/>}>
                 Profile
                </Menu.Item>
                <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
                    Messages
                </Menu.Item>
                <Menu.Item leftSection={<IconFileDots style={{ width: rem(14), height: rem(14) }} />}>
                    Resume
                </Menu.Item>

                <Menu.Divider />

                <Menu.Item
                    color="red"
                    leftSection={<IconLogout2 style={{ width: rem(14), height: rem(14) }} />}
                >
                   Logout
                </Menu.Item>
            </Menu.Dropdown>
        </Menu>
    );
}

export  default  ProfileMenu