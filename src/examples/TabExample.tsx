import { TabBar, TabBarItem, TabBody, TabController } from "../../lib";
import { Booth } from "../components";

export default function TabExample() {
  return (
    <div>
      <Booth title="Horizontal Tab">
        <TabController orientation="horizontal">
          <TabBar>
            <TabBarItem value={0}>Item 1</TabBarItem>
            <TabBarItem value={1}>Item 2</TabBarItem>
          </TabBar>
          <TabBody>
            <div>Content 1</div>
            <div>Content 2</div>
          </TabBody>
        </TabController>
      </Booth>
      <Booth title="Vertical Tab">
        <TabController orientation="vertical">
          <TabBar>
            <TabBarItem value={0}>Item 1</TabBarItem>
            <TabBarItem value={1}>Item 2</TabBarItem>
          </TabBar>
          <TabBody>
            <div>Content 1</div>
            <div>Content 2</div>
          </TabBody>
        </TabController>
      </Booth>
    </div>
  );
}
