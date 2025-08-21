import type { Project } from "@/types/Projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, features, icon, gradient, tech, link } = project;
  return (
    <div className="project-card relative bg-gray-100 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
      <div
        className={`h-48 bg-gradient-to-br ${gradient} flex items-center justify-center`}
      >
        <i className={`${icon} text-white text-4xl`} />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t, i) => (
            <span key={i} className={`${t.color} px-2 py-1 rounded text-sm`}>
              {t.name}
            </span>
          ))}
        </div>

        <ul className="text-sm text-gray-600 space-y-1">
          {features.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      </div>

      <div className="project-overlay absolute inset-0 flex items-center justify-center">
        <a
          href={link}
          target="_blank"
          className="text-center text-white"
          rel="noreferrer"
        >
          <i className="fas fa-external-link-alt text-3xl mb-4" />
          <p className="font-semibold">View Project Details</p>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
