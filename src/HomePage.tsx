import { Hyperlink } from "../lib";

export default function HomePage() {
  return (
    <div className="text-center p-9 space-y-3">
      <p className="text-2xl font-semibold">ResetPower's Component Set</p>
      <p>@resetpower/rcs</p>
      <Hyperlink>https://www.npmjs.com/package/@resetpower/rcs</Hyperlink>
    </div>
  );
}
