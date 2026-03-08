import Header from "@/components/Header";
import HeaderBar from "@/components/HeaderBar";
import {
  freelancing,
  fullTimePositions,
  sideProjects,
  education,
  type FreelanceProject,
  type FullTimePosition,
  type SideProject,
  type Education,
} from "@/data/portfolio";

function TechPill({ tech }: { tech: string }) {
  return (
    <span className="inline-block text-xs border border-gray-600 text-gray-400 rounded-full px-2 py-0.5">
      {tech}
    </span>
  );
}

function ProjectTitle({ title, url }: { title: string; url?: string }) {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-yellow-400 hover:underline"
      >
        {title}
      </a>
    );
  }
  return <span className="text-white">{title}</span>;
}

function FreelanceCard({ project }: { project: FreelanceProject }) {
  return (
    <div className="py-6 border-b border-gray-700">
      <h3 className="text-lg font-semibold">
        <ProjectTitle title={project.title} url={project.url} />
      </h3>
      <p className="text-sm text-gray-400 mt-1">
        {project.compensation} &middot; {project.softwareType}
      </p>
      <div className="flex flex-wrap gap-2 mt-3">
        {project.technologies.map((tech) => (
          <TechPill key={tech} tech={tech} />
        ))}
      </div>
      <p className="text-gray-300 mt-3">{project.details}</p>
    </div>
  );
}

function FullTimeCard({ position }: { position: FullTimePosition }) {
  return (
    <div className="py-6 border-b border-gray-700">
      <h3 className="text-lg font-semibold">
        <ProjectTitle title={position.title} url={position.url} />
      </h3>
      {position.positions.map((pos) => (
        <p key={pos} className="text-sm text-gray-400 mt-1">
          {pos}
        </p>
      ))}
      <div className="flex flex-wrap gap-2 mt-3">
        {position.technologies.map((tech) => (
          <TechPill key={tech} tech={tech} />
        ))}
      </div>
      <ul className="list-disc list-inside mt-3 space-y-1">
        {position.details.map((detail) => (
          <li key={detail} className="text-gray-300">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SideProjectCard({ project }: { project: SideProject }) {
  return (
    <div className="py-6 border-b border-gray-700">
      <h3 className="text-lg font-semibold">
        <ProjectTitle title={project.title} url={project.url} />
      </h3>
      {(project.compensation || project.softwareType) && (
        <p className="text-sm text-gray-400 mt-1">
          {[project.compensation, project.softwareType]
            .filter(Boolean)
            .join(" \u00B7 ")}
        </p>
      )}
      {project.technologies && project.technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {project.technologies.map((tech) => (
            <TechPill key={tech} tech={tech} />
          ))}
        </div>
      )}
      <p className="text-gray-300 mt-3">{project.details}</p>
    </div>
  );
}

function EducationCard({ edu }: { edu: Education }) {
  return (
    <div className="py-6 border-b border-gray-700">
      <h3 className="text-lg font-semibold">
        <ProjectTitle title={edu.title} url={edu.url} />
      </h3>
      <p className="text-sm text-gray-400 mt-1">
        {edu.degree} &middot; {edu.period}
      </p>
      {edu.honors && (
        <p className="text-gray-300 mt-2">{edu.honors}</p>
      )}
      {edu.courses && (
        <p className="text-gray-400 text-sm mt-2">
          <span className="text-gray-500">Courses:</span> {edu.courses}
        </p>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <main className="min-h-screen bg-gray-800">
      <HeaderBar color="yellow" />
      <Header />

      <div className="max-w-3xl mx-auto px-6 pb-16">
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-yellow-400">Freelance</h2>
          {freelancing.map((project) => (
            <FreelanceCard key={project.title} project={project} />
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-yellow-400">Full-Time</h2>
          {fullTimePositions.map((position) => (
            <FullTimeCard key={position.title} position={position} />
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-yellow-400">Side Projects</h2>
          {sideProjects.map((project) => (
            <SideProjectCard key={project.title} project={project} />
          ))}
        </section>

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-yellow-400">Education</h2>
          {education.map((edu) => (
            <EducationCard key={edu.title} edu={edu} />
          ))}
        </section>
      </div>
    </main>
  );
}
