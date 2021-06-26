import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

export default function Filter() {
    return (
        <div>
             <Menu icon='labeled' vertical>
        <Menu.Item
          name='gamepad'
          
        >
          <Icon name='bullhorn' />
          İlanlar
        </Menu.Item>

        <Menu.Item
          name='video camera'
          
        >
          <Icon name='user md' />
          İş pozisyonları
        </Menu.Item>

        <Menu.Item
          name='video play'
          
        >
          <Icon name='video play' />
          Videos
        </Menu.Item>
      </Menu>
        </div>
    )
}
