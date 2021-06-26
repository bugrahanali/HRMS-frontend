import React from "react";
import { Button, Dropdown, Menu } from "semantic-ui-react";
import { Container } from 'semantic-ui-react'

export default function Navi() {
  return (
    <div>
      <Container>
        <Menu inverted size="massive" >
          <Menu.Item name="Human Resources Management System" />
          

          <Menu.Menu position="right">
            <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item>
              <Button primary>GiRİS YAP</Button>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  );
}
