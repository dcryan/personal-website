import Header from "@/components/Header";
import HeaderBar from "@/components/HeaderBar";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import {
  experience,
  sideProjects,
  volunteer,
  education,
} from "@/data/portfolio";

export default function Experience() {
  return (
    <main className="min-h-screen">
      <HeaderBar color="yellow" />
      <Header />
      <h1 className="sr-only">Experience</h1>
      <ExperienceTimeline
        experience={experience}
        sideProjects={sideProjects}
        volunteer={volunteer}
        education={education}
      />
    </main>
  );
}
