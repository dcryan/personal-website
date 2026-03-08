import type {
  WorkExperience,
  SideProject,
  Volunteer,
  Education,
} from "@/data/portfolio";
import { IoOpenOutline } from "react-icons/io5";
import CollapsibleDetails from "@/components/CollapsibleDetails";

type Props = {
  experience: WorkExperience[];
  sideProjects: SideProject[];
  volunteer: Volunteer[];
  education: Education[];
};

function SectionHeader({
  command,
}: {
  command: string;
}) {
  return (
    <div className="mb-4">
      <span className="text-onedark-gutter">daniel@barcelona:~$</span>{" "}
      <span className="text-onedark-fg">{command}</span>
    </div>
  );
}

function TechPill({ tech }: { tech: string }) {
  return (
    <span className="inline-block text-xs border border-onedark-selection text-onedark-gutter rounded-full px-2 py-0.5">
      {tech}
    </span>
  );
}

function TypeBadge({ type }: { type: WorkExperience["type"] }) {
  return (
    <span className="text-xs border border-onedark-yellow/40 text-onedark-yellow rounded-full px-2 py-0.5">
      {type}
    </span>
  );
}

function TreeGutter({
  isLast,
  children,
}: {
  isLast: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start">
      <div className="shrink-0 w-6 text-onedark-gutter select-none text-lg leading-none mt-[0.35rem]">
        {isLast ? "└" : "├"}
      </div>
      <div className="flex-1">
        <div className="ml-2 pb-6">{children}</div>
      </div>
    </div>
  );
}

function CompanyName({ url, name }: { url?: string; name: string }) {
  if (url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-onedark-yellow hover:underline"
      >
        {name} <IoOpenOutline className="inline text-sm" />
      </a>
    );
  }
  return <span className="text-white">{name}</span>;
}

export default function ExperienceTimeline({
  experience,
  sideProjects,
  volunteer,
  education,
}: Props) {
  return (
    <div className="max-w-3xl mx-auto px-6 pb-16">
      {/* Experience */}
      <section className="mt-12">
        <SectionHeader command="cat experience.log" />
        {experience.map((job, idx) => {
          const isLast = idx === experience.length - 1;

          return (
            <TreeGutter key={`exp-${idx}`} isLast={isLast}>
              <div className="hover:bg-onedark-currentline rounded-lg transition-colors p-3 -ml-3">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <span className="text-lg font-semibold">
                      <CompanyName url={job.url} name={job.company} />
                    </span>
                    <span className="text-onedark-fg"> · {job.role}</span>
                  </div>
                  <TypeBadge type={job.type} />
                </div>
                <p className="text-sm text-onedark-gutter mt-1">
                  {job.period}
                  {job.location && <> · {job.location}</>}
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {job.technologies.map((tech) => (
                    <TechPill key={tech} tech={tech} />
                  ))}
                </div>
                {job.summary && (
                  <p className="text-onedark-gutter text-sm mt-3">
                    {job.summary}
                  </p>
                )}
                {job.details.length > 0 && (
                  <CollapsibleDetails details={job.details} />
                )}
              </div>
            </TreeGutter>
          );
        })}
      </section>

      {/* Side Projects */}
      <section className="mt-12">
        <SectionHeader command="cat side-projects.log" />
        {sideProjects.map((project, idx) => {
          const isLast = idx === sideProjects.length - 1;

          return (
            <TreeGutter key={`proj-${idx}`} isLast={isLast}>
              <div className="hover:bg-onedark-currentline rounded-lg transition-colors p-3 -ml-3">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <div>
                    <span className="text-lg font-semibold">
                      <CompanyName url={project.url} name={project.title} />
                    </span>
                    {project.softwareType && (
                      <span className="text-onedark-gutter text-sm ml-2">
                        {project.softwareType}
                      </span>
                    )}
                  </div>
                </div>
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <TechPill key={tech} tech={tech} />
                    ))}
                  </div>
                )}
                <p className="text-onedark-fg text-sm mt-2">
                  {project.details}
                </p>
              </div>
            </TreeGutter>
          );
        })}
      </section>

      {/* Volunteer */}
      <section className="mt-12">
        <SectionHeader command="cat volunteer.log" />
        {volunteer.map((vol, idx) => {
          const isLast = idx === volunteer.length - 1;

          return (
            <TreeGutter key={`vol-${idx}`} isLast={isLast}>
              <div className="hover:bg-onedark-currentline rounded-lg transition-colors p-3 -ml-3">
                <span className="text-lg font-semibold text-white">
                  {vol.organization}
                </span>
                <span className="text-onedark-fg"> · {vol.role}</span>
                <p className="text-sm text-onedark-gutter mt-1">
                  {vol.period}
                </p>
                <p className="text-onedark-fg text-sm mt-2">{vol.details}</p>
              </div>
            </TreeGutter>
          );
        })}
      </section>

      {/* Education */}
      <section className="mt-12">
        <SectionHeader command="cat education.log" />
        {education.map((edu, idx) => {
          const isLast = idx === education.length - 1;

          return (
            <TreeGutter key={`edu-${idx}`} isLast={isLast}>
              <div className="hover:bg-onedark-currentline rounded-lg transition-colors p-3 -ml-3">
                <span className="text-lg font-semibold">
                  <CompanyName url={edu.url} name={edu.title} />
                </span>
                <p className="text-sm text-onedark-fg mt-1">
                  {edu.degree} · {edu.period}
                </p>
                {edu.honors && (
                  <p className="text-onedark-gutter text-sm mt-2">
                    {edu.honors}
                  </p>
                )}
                {edu.courses && (
                  <p className="text-onedark-gutter text-sm mt-2">
                    <span className="text-onedark-selection">Courses:</span>{" "}
                    {edu.courses}
                  </p>
                )}
              </div>
            </TreeGutter>
          );
        })}
      </section>
    </div>
  );
}
