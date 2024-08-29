import HeaderBar from "@/components/HeaderBar";
import HomeLink from "@/components/HomeLink";

export default function Home() {
  return (
    <main className="h-screen bg-gray-800">
      <HeaderBar color="green" />

      <div className="mt-32">
        <HomeLink href="projects" color="yellow">
          projects
        </HomeLink>
        <HomeLink href="blog" color="blue">
          blog
        </HomeLink>
        <HomeLink href="contact" color="red">
          contact
        </HomeLink>
      </div>
    </main>
  );
}
