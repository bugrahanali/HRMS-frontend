import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import { useState } from "react";
import { useHistory } from "react-router-dom";
export default function Navi() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const history=useHistory()
  function handleSignOut(params) {
    setIsAuthenticated(false);
    history.push("/")
  }
  function handleSignIn(params) {
    setIsAuthenticated(true);
  }

  return (
    <div>
      <Container>
        <Menu inverted size="massive">
          <Menu.Item name="Human Resources Management System" />

          <Menu.Menu position="right">
            <Dropdown item text="Language">
              <Dropdown.Menu>
                <Dropdown.Item>English</Dropdown.Item>
                <Dropdown.Item>Russian</Dropdown.Item>
                <Dropdown.Item>Spanish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {isAuthenticated ? (
              <SignedIn signOut={handleSignOut} />
            ) : (
              <SignedOut signIn={handleSignIn} />
            )}
          </Menu.Menu>
        </Menu>
      </Container>
    </div>
  );
}
