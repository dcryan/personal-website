import Header from "@/components/Header";
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
      <Header barColor="yellow" />
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
