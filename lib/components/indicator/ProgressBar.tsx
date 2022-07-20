export function ProgressBar(props: {
  unlimited?: boolean;
  percentage?: number;
}): JSX.Element {
  if (props.percentage && props.percentage > 100 && props.percentage < 0) {
    throw new Error("Invalid progress number. 0-100 need.");
  }
  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
      <div
        className="bg-blue-600 h-1.5 rounded-full dark:bg-blue-500"
        style={{
          width: `${props.percentage ?? 100}%`,
        }}
      />
    </div>
  );
}
