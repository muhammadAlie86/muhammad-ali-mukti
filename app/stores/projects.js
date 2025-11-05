import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 1,
        title: 'Project A',
        description: 'This is a description for Project A.',
        image: '/ic_logo_programmer_santai.png',
        technologies: ['Vue.js', 'Nuxt.js', 'Tailwind CSS'],
      },
      {
        id: 2,
        title: 'Project B',
        description: 'Project B built with modern tech.',
        image: '/ic_logo_programmer_santai.png',
        technologies: ['React', 'Node.js', 'MongoDB'],
      },
      {
        id: 3,
        title: 'Project C',
        description: 'A personal portfolio website.',
        image: '/ic_logo_programmer_santai.png',
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
