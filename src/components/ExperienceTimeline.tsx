"use client";

import { useState } from "react";
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

const tabs = [
  { key: "experience", label: "experience/", command: "cat experience.log" },
  { key: "side-projects", label: "side-projects/", command: "cat side-projects.log" },
  { key: "volunteer", label: "volunteer/", command: "cat volunteer.log" },
  { key: "education", label: "education/", command: "cat education.log" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

function TechPill({ tech }: { tech: string }) {
  return (
    <span className="inline-block text-xs border border-onedark-gutter/50 text-onedark-fg rounded-full px-2 py-0.5">
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
      <div className="shrink-0 w-6 text-onedark-gutter select-none text-lg leading-none mt-[1.1rem]">
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
        className="inline-flex items-center gap-1 text-onedark-yellow hover:underline"
      >
        {name}
        <IoOpenOutline className="text-sm" />
      </a>
    );
  }
  return <span className="text-onedark-yellow">{name}</span>;
}

function ExperienceSection({ items }: { items: WorkExperience[] }) {
  return (
    <>
      {items.map((job, idx) => (
        <TreeGutter key={`exp-${idx}`} isLast={idx === items.length - 1}>
          <div className="hover:bg-onedark-currentline rounded-lg transition-colors p-3 -ml-3">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <span className="text-lg font-semibold">
                  <CompanyName url={job.url} name={job.company} />
                </span>
                <span className="text-white"> · {job.role}</span>
              </div>
              <TypeBadge type={job.type} />
            </div>
            <p className="text-sm text-onedark-fg mt-1">
              {job.period}
              {job.location && <> · {job.location}</>}
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              {job.technologies.map((tech) => (
                <TechPill key={tech} tech={tech} />
              ))}
            </div>
            {job.summary && (
              <p className="text-onedark-fg text-sm mt-3">
                {job.summary}
              </p>
            )}
            {job.details.length > 0 && (
              <CollapsibleDetails details={job.details} />
            )}
          </div>
        </TreeGutter>
      ))}
    </>
  );
}

function SideProjectsSection({ items }: { items: SideProject[] }) {
  return (
    <>
      {items.map((project, idx) => (
        <TreeGutter key={`proj-${idx}`} isLast={idx === items.length - 1}>
          <div className="hover:bg-onedark-currentline rounded-lg transition-colors p-3 -ml-3">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <span className="text-lg font-semibold">
                  <CompanyName url={project.url} name={project.title} />
                </span>
                {project.softwareType && (
                  <span className="text-onedark-fg text-sm ml-2">
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
      ))}
    </>
  );
}

function VolunteerSection({ items }: { items: Volunteer[] }) {
  return (
    <>
      {items.map((vol, idx) => (
        <TreeGutter key={`vol-${idx}`} isLast={idx === items.length - 1}>
          <div className="hover:bg-onedark-currentline rounded-lg transition-colors p-3 -ml-3">
            <span className="text-lg font-semibold text-white">
              {vol.organization}
            </span>
            <span className="text-onedark-fg"> · {vol.role}</span>
            <p className="text-sm text-onedark-fg mt-1">
              {vol.period}
            </p>
            <p className="text-onedark-fg text-sm mt-2">{vol.details}</p>
          </div>
        </TreeGutter>
      ))}
    </>
  );
}

function EducationSection({ items }: { items: Education[] }) {
  return (
    <>
      {items.map((edu, idx) => (
        <TreeGutter key={`edu-${idx}`} isLast={idx === items.length - 1}>
          <div className="hover:bg-onedark-currentline rounded-lg transition-colors p-3 -ml-3">
            <span className="text-lg font-semibold">
              <CompanyName url={edu.url} name={edu.title} />
            </span>
            <p className="text-sm text-onedark-fg mt-1">
              {edu.degree} · {edu.period}
            </p>
            {edu.honors && (
              <p className="text-onedark-fg text-sm mt-2">
                {edu.honors}
              </p>
            )}
            {edu.courses && (
              <p className="text-onedark-fg text-sm mt-2">
                <span className="text-onedark-gutter">Courses:</span>{" "}
                {edu.courses}
              </p>
            )}
          </div>
        </TreeGutter>
      ))}
    </>
  );
}

export default function ExperienceTimeline({
  experience,
  sideProjects,
  volunteer,
  education,
}: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("experience");
  const activeCommand = tabs.find((t) => t.key === activeTab)!.command;

  return (
    <div className="max-w-3xl mx-auto px-6 pb-16">
      {/* Tab Nav */}
      <nav className="mt-12 mb-8" aria-label="Page sections">
        <div className="mb-2">
          <span className="text-onedark-gutter">daniel@barcelona:~$</span>{" "}
          <span className="text-onedark-fg">ls ./</span>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 ml-1">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`transition-colors ${
                activeTab === tab.key
                  ? "text-onedark-yellow underline"
                  : "text-onedark-fg underline decoration-onedark-gutter hover:text-onedark-yellow"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Active Section */}
      <section>
        <div className="mb-4">
          <span className="text-onedark-gutter">daniel@barcelona:~$</span>{" "}
          <span className="text-onedark-fg">{activeCommand}</span>
        </div>

        {activeTab === "experience" && <ExperienceSection items={experience} />}
        {activeTab === "side-projects" && <SideProjectsSection items={sideProjects} />}
        {activeTab === "volunteer" && <VolunteerSection items={volunteer} />}
        {activeTab === "education" && <EducationSection items={education} />}
      </section>
    </div>
  );
}
