import React from "react"
import Layout, { BoxContainer } from "../components/layout"
import Header from "../components/header"

export default () => (
  <Layout>
    <Header isActive="resume" />
    <BoxContainer>
      <h1>
        <a href="https://tsheets.com">TSheets Inc (an Intuit Company)</a>
      </h1>
      <h4>Aut '15 - Spr '18: Full Stack Software Engineer</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </BoxContainer>

    <BoxContainer>
      <h1>
        <a href="https://whitecloudanalytics.com">WhiteCloud Analytics</a>
      </h1>
      <h4>Spr '13 - Aut '15: Full Stack Software Engineer</h4>
      <h4>Spr '12 - Spr '13: Full Stack Software Engineer</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </BoxContainer>

    <BoxContainer>
      <h1>
        <a href="https://sap.com">SAP</a>
      </h1>
      <h4>Spr '11 - Spr '12: Full Stack Software Engineer</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </BoxContainer>
  </Layout>
)
