export default function Subheader({ text, className }) {
  return (
    <div
      className={`text-center py-16 max-w-fit mx-auto${
        className ? " " + className : ""
      }`}>
      <h2 className="text-h2-semibold pb-2">{text}</h2>
      <div className="h-[4px] w-full bg-primary-500 rounded-full" />
    </div>
  );
}
