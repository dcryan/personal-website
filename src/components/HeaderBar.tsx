type HeaderBarProps = {
  color: "green" | "yellow" | "blue" | "red";
};

export default function HeaderBar({ color }: HeaderBarProps) {
  return (
    <div
      className={[
        "w-full h-1 mb-2 shadow-md",
        color === "green" ? "bg-green-400 shadow-green-400" : "",
        color === "yellow" ? "bg-yellow-400 shadow-yellow-400" : "",
        color === "blue" ? "bg-teal-400 shadow-teal-400" : "",
        color === "red" ? "bg-rose-500 shadow-rose-500" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    ></div>
  );
}
