import React from 'react'
import MenuItems from '../components/MenuItems'

const Nav = () => {
    const menuTree = [
        {
            label: "Home",
            icon: "home",
            children: [
                {
                    label: "level 1.1",
                    children: [
                        {
                            label: "level 1.1.1",
                            children: [
                                {
                                    label: "level 1.1.1.1"
                                }
                            ]
                        }
                    ]
                },
                {
                    label: "level 1.2"
                }
            ]
        },
        {
            label: "Dashboard",
            icon: "dashboard",
            children: [
                {
                    label: "level 2.1",
                },
                {
                    label: "level 2.2"
                },
                {
                    label: "level 2.3"
                }
            ]
        },
        {
            label: "Settings",
            icon: "settings"
        }
    ]
    return (
        <div>
            {
                menuTree.map((singleItem)=> <MenuItems singleItem={singleItem}/>)
            }
        </div>
    )
}

export default Nav