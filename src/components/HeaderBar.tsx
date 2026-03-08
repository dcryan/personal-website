type HeaderBarProps = {
  color: "green" | "yellow" | "blue" | "red";
};

export default function HeaderBar({ color }: HeaderBarProps) {
  return (
    <div
      className={[
        "w-full h-1 mb-2 shadow-md",
        color === "green" ? "bg-onedark-green shadow-onedark-green" : "",
        color === "yellow" ? "bg-onedark-yellow shadow-onedark-yellow" : "",
        color === "blue" ? "bg-onedark-blue shadow-onedark-blue" : "",
        color === "red" ? "bg-onedark-red shadow-onedark-red" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    ></div>
  );
}
