import Button from "./Button.jsx";
import ProjectItem from "./ProjectItem.jsx";
export default function ProjectsSidebar({ onStartAddProject, projects }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <ul>
        {projects &&
          projects.map((project) => (
            <ProjectItem key={project.id} data={project} />
          ))}
      </ul>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
    </aside>
  );
}
