import { ProgressBar, Spinner } from "../../lib";
import { Booth } from "../components";

export default function IndicatorExample() {
  return (
    <div>
      <Booth title="Spinner">
        <Spinner />
      </Booth>
      <Booth className="space-y-3" title="Progress Bar">
        <p>Unlimited</p>
        <ProgressBar unlimited />
        <p>13%</p>
        <ProgressBar percentage={10} />
        <p>32%</p>
        <ProgressBar percentage={32} />
        <p>77%</p>
        <ProgressBar percentage={77} />
      </Booth>
    </div>
  );
}
