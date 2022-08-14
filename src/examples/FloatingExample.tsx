import { useState } from "react";
import { Button, Menu, Select, Tooltip } from "../../lib";
import { Booth } from "../components";

export default function FloatingExample() {
  const [value, setValue] = useState(0);

  return (
    <div>
      <Booth title="Menu">
        <Menu
          items={[
            { text: "One" },
            { text: "Two" },
            { text: "Three is the magic number" },
          ]}
        >
          <Button variant="outlined">Dropdown</Button>
        </Menu>
      </Booth>
      <Booth title="Select">
        <Select
          value={value}
          onChange={setValue}
          options={[
            { value: 0, text: "One" },
            { value: 1, text: "Two" },
            { value: 2, text: "Three is the magic number" },
          ]}
          fullWidth
        ></Select>
      </Booth>
      <Booth title="Tooltip">
        <Tooltip text="Tooltip Content">Tooltip Trigger</Tooltip>
      </Booth>
    </div>
  );
}
