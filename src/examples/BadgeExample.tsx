import { MdMenu } from "react-icons/md";
import { Badge, BadgeButton } from "../../lib/components/badge";
import { Booth } from "../components";

export default function BadgeExample() {
  return (
    <div>
      <Booth title="Badge" flex>
        <Badge>Default</Badge>
        <Badge variant="dark">Dark</Badge>
        <Badge variant="red">Red</Badge>
        <Badge variant="green">Green</Badge>
        <Badge variant="yellow">Yellow</Badge>
        <Badge variant="indigo">Indigo</Badge>
        <Badge variant="purple">Purple</Badge>
        <Badge variant="pink">Pink</Badge>
      </Booth>
      <Booth title="Larger Badge" flex>
        <Badge larger>Default</Badge>
        <Badge variant="dark" larger>
          Dark
        </Badge>
        <Badge variant="red" larger>
          Red
        </Badge>
        <Badge variant="green" larger>
          Green
        </Badge>
        <Badge variant="yellow" larger>
          Yellow
        </Badge>
        <Badge variant="indigo" larger>
          Indigo
        </Badge>
        <Badge variant="purple" larger>
          Purple
        </Badge>
        <Badge variant="pink" larger>
          Pink
        </Badge>
      </Booth>
      <Booth className="space-y-1" title="Clickable Badge">
        <div className="flex">
          <BadgeButton>Default</BadgeButton>
        </div>
        <div className="flex">
          <BadgeButton larger>Default</BadgeButton>
        </div>
      </Booth>
      <Booth title="Icon Badge" flex>
        <Badge icon>
          <MdMenu />
        </Badge>
      </Booth>
      <Booth title="Clickable Icon Badge" flex>
        <BadgeButton icon>
          <MdMenu />
        </BadgeButton>
      </Booth>
    </div>
  );
}
