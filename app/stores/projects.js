import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 1,
        title: 'Project A',
        description: 'This is a description for Project A.',
        image: '/images/project-a.jpg',
        technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
      },
      {
        id: 2,
        title: 'Project B',
        description: 'Project B built with modern tech.',
        image: '/images/project-b.jpg',
        technologies: ['React', 'Node.js', 'MongoDB'],
      },
      {
        id: 3,
        title: 'Project C',
        description: 'A personal portfolio website.',
        image: '/images/project-c.jpg',
        technologies: ['Vue.js', 'Nuxt.js', 'TypeScript'],
      },
    ],
  }),
  getters: {
    getProjectById: (state) => (id) => {
      return state.projects.find(project => project.id === id);
    },
  },
});
