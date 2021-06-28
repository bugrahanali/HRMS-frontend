import React from 'react'
import { Dropdown, Menu, Image } from 'semantic-ui-react'


export default function SignedIn({signOut} ) {
    return (
        <div>
            <Menu.Item>

              <Image avatar spaced="right" src="https://i.guim.co.uk/img/media/ff51317a233516aede64e630c73fdb26106c8b0f/0_0_3500_2099/master/3500.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=6a676a5c6b6b44f05f129960098d9734" />
                <Dropdown pointing="top right " text="Elon">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info "/>
                        <Dropdown.Item onClick={signOut} text="Çıkış yap" icon="sign-out "/>       
                        
                    </Dropdown.Menu>
                    </Dropdown>  
            </Menu.Item>   
           
        

           
        </div>
    
    )}
