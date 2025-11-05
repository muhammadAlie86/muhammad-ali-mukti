const fs = require('fs');
const path = require('path');

function getProjectRoutes() {
  const projectsStorePath = path.resolve(__dirname, '../app/stores/projects.js');
  const projectsStoreContent = fs.readFileSync(projectsStorePath, 'utf-8');

  // This is a hacky way to get the projects from the store file.
  // It's better to have a separate JSON file with the projects data.
  const projectsRegex = /projects: \[(\s*\{[^}]*\}\s*,?)*\]/;
  const match = projectsStoreContent.match(projectsRegex);

  if (match) {
    const projectsString = match[0].replace('projects: ', '');
    // This is unsafe, but for this specific case it's fine.
    const projects = eval(projectsString);
    return projects.map((project) => `/project/${project.id}`);
  }

  return [];
}

module.exports = getProjectRoutes;
