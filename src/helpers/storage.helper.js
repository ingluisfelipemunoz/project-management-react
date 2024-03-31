export default class StorageHelper {
  static saveProjects(projects) {
    console.log("saving", projects);
    localStorage.setItem("projects", JSON.stringify(projects));
    return true;
  }

  static getProjects() {
    return JSON.parse(localStorage.getItem("projects"));
  }
}
