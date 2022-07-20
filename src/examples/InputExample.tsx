import {
  Button,
  Checkbox,
  IconButton,
  TextField,
  TinyTextField,
  Hyperlink,
} from "../../lib";
import { Booth } from "../components";
import { MdIcecream, MdMenu, MdTraffic } from "react-icons/md";
import { useState } from "react";

export default function InputExample() {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState("");
  const [sfValue, setSfValue] = useState("");

  return (
    <div>
      <Booth title="Button" flex>
        <Button>Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="pill">Pill</Button>
        <Button variant="outlined">Outlined</Button>
      </Booth>
      <Booth title="Disabled Button" flex>
        <Button disabled>Text</Button>
        <Button variant="contained" disabled>
          Contained
        </Button>
        <Button variant="pill" disabled>
          Pill
        </Button>
        <Button variant="outlined" disabled>
          Outlined
        </Button>
      </Booth>
      <Booth title="Icon Button" flex>
        <IconButton>
          <MdMenu />
        </IconButton>
      </Booth>
      <Booth title="Checkbox">
        <Checkbox checked={checked} onChange={setChecked}>
          Description
        </Checkbox>
      </Booth>
      <Booth title="Hyperlink" flex>
        <Hyperlink paddingX>Content</Hyperlink>
        <Hyperlink button paddingX>
          Button
        </Hyperlink>
      </Booth>
      <Booth className="space-y-5" title="TextField">
        <div>
          <p>Field with label, placeholder and helper</p>
          <TextField
            label="Label"
            placeholder="Placeholder"
            helperText="Helper"
          />
        </div>
        <div>
          <p>Field with icon and trailing</p>
          <TextField icon={<MdIcecream />} trailing={<MdTraffic />} />
        </div>
        <div>
          <p>Password Field</p>
          <TextField type="password" />
        </div>
        <div>
          <p>Error Field</p>
          <TextField error />
        </div>
        <div>
          <p>Field with length limit</p>
          <TextField value={value} onChange={setValue} maxLength={48} />
        </div>
      </Booth>
      <Booth title="Tiny TextField">
        <TinyTextField />
      </Booth>
    </div>
  );
}
