import ProjectsSidebar from "./components/ProjectsSidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import { useState } from "react";
import StorageHelper from "./helpers/storage.helper";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: StorageHelper.getProjects() || [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }

  function handleCancel() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }

  function handleSave(project) {
    setProjectsState((prevState) => {
      project.id = Math.random().toString();
      const newState = {
        ...prevState,
        projects: [...prevState.projects, project],
        selectedProjectId: project.id,
      };
      saveIntoStorage(newState);
      return newState;
    });
  }

  function saveIntoStorage(state) {
    StorageHelper.saveProjects(state.projects);
  }

  let content;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onCancel={handleCancel} onSave={handleSave} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        projects={projectsState.projects}
        onStartAddProject={handleStartAddProject}
      />
      {content}
    </main>
  );
}

export default App;
