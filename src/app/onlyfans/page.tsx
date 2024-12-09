import Image from "next/image";
import Pan from "../../../assets/pan.png";

export default function Home() {
  return (
    <div>
      <main style={{ textAlign: "center", padding: "2rem" }}>
        <h1>🍳 Welcome to OnlyPans! 🍳</h1>
        <p>The hottest platform for pan lovers.</p>
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image
            src={Pan}
            alt="A glorious pan"
            width={800}
            height={533}
            style={{
              marginTop: "2rem",
              borderRadius: "10px",
              maxWidth: "100%",
            }}
          />
        </div>
      </main>
    </div>
  );
}
