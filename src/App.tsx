import {
  MdAdjust,
  MdBrightnessMedium,
  MdDeveloperBoard,
  MdRefresh,
} from "react-icons/md";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { AppBar, AppBarTitle, IconButton, ListItem, Menu } from "../lib";
import BadgeExample from "./examples/BadgeExample";
import IndicatorExample from "./examples/IndicatorExample";
import InputExample from "./examples/InputExample";
import TabExample from "./examples/TabExample";
import HomePage from "./HomePage";
import { themeManager } from "./main";
import FloatingExample from "./examples/FloatingExample";

export default function App() {
  const { pathname } = useLocation();
  const toggleTheme = () => {
    themeManager.turn(themeManager.mode === "light" ? "dark" : "light");
  };

  return (
    <div className="flex flex-col h-full">
      <AppBar>
        <AppBarTitle>ResetPower's Component Set</AppBarTitle>
        <IconButton className="text-lg" onClick={toggleTheme}>
          {<MdBrightnessMedium />}
        </IconButton>
        <Menu
          items={[
            {
              icon: <MdAdjust />,
              text: "Adjust",
            },
            {
              icon: <MdRefresh />,
              text: "Reload",
            },
          ]}
        >
          {(open) => (
            <IconButton active={open}>
              <MdDeveloperBoard />
            </IconButton>
          )}
        </Menu>
      </AppBar>
      <div className="flex-grow flex">
        <div className="text-center border-r border-divider w-1/6 space-y-3">
          <Link to="/">
            <ListItem active={pathname === "/"} dependent>
              Home
            </ListItem>
          </Link>
          {["Input", "Indicator", "Badge", "Floating", "Tab"].map(
            (value, index) => (
              <Link key={index} to={`/${value.toLowerCase()}`}>
                <ListItem
                  active={pathname === `/${value.toLowerCase()}`}
                  dependent
                >
                  {value}
                </ListItem>
              </Link>
            )
          )}
        </div>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/input" element={<InputExample />} />
            <Route path="/badge" element={<BadgeExample />} />
            <Route path="/indicator" element={<IndicatorExample />} />
            <Route path="/floating" element={<FloatingExample />} />
            <Route path="/tab" element={<TabExample />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
