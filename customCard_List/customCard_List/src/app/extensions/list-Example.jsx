import React, { useState } from "react";
import {
  Divider,
  Link,
  Button,
  Text,
  List,
  Flex,
  hubspot,
} from "@hubspot/ui-extensions";

// Define the extension to be run within the Hubspot CRM
hubspot.extend(({ context, runServerlessFunction, actions }) => (
  <Extension
    context={context}
    runServerless={runServerlessFunction}
    sendAlert={actions.addAlert}
  />
));

// Define the Extension component, taking in runServerless, context, & sendAlert as props
const Extension = ({ context, runServerless, sendAlert }) => {

  return (
    <>
      <List variant="inline-divided">
  <Link href="https://www.hubspot.com/">HubSpot Link</Link>
  <Link href="https://developers.hubspot.com/beta-docs/">HubSpot Developer</Link>
  <Link href="https://knowledge.hubspot.com/">HubSpot Knowledge Base</Link>
</List>
    </>
  );
};
