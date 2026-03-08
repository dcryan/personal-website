import Header from "@/components/Header";

export default function Success() {
  return (
    <main className="h-screen min-h-screen">
      <Header barColor="red" />

      <div className="flex flex-col mt-32 px-4 max-w-md mx-auto">
        <p className="mb-4">
          <span className="text-onedark-green">$ </span>
          <span className="text-onedark-fg">./contact.sh</span>
        </p>
        <p>
          <span className="text-onedark-green font-bold">[OK]</span>{" "}
          <span className="text-onedark-fg">Message sent successfully.</span>
        </p>
        <p className="text-onedark-gutter mt-2">
          I{"'"}ll get back to you shortly :)
        </p>
      </div>
    </main>
  );
}
