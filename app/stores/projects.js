import { defineStore } from 'pinia';

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 1,
        title: 'Pay Aja',
        description: 'This is a description for Project A.',
        image: 'ic_payaja.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]


      },
      {
        id: 2,
        title: 'Josnet Salesman',
        description: 'Project B built with modern tech.',
        image: 'ic_josnet_sales.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]

      },
      {
        id: 3,
        title: 'Josnet Retail Dan Grosir',
        description: 'A personal portfolio website.',
        image: 'ic_josnet_retail.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]

      },
       {
        id: 4,
        title: 'SaiMART Pay',
        description: 'A personal portfolio website.',
        image: 'ic_saipay.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]

      },
      {
        id: 5,
        title: 'Fuel Card',
        description: 'A personal portfolio website.',
        image: 'ic_fuelcard.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]
      

      },
       {
        id: 6,
        title: 'Mini ATM EDC Pinpad',
        description: 'A personal portfolio website.',
        image: 'ic_aceh.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]
      

      },
       {
        id: 7,
        title: 'Mini Atm All In One',
        description: 'A personal portfolio website.',
        image: 'ic_aio.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]
      

      },
       {
        id: 8,
        title: 'Bayar Bayar Lite',
        description: 'A personal portfolio website.',
        image: 'ic_fuelcard.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]
      

      },
       {
        id: 9,
        title: 'Bayar Bayar Plus',
        description: 'A personal portfolio website.',
        image: 'ic_bbp.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]
      

      },
       {
        id: 10,
        title: 'Mini ATM BPD Bali',
        description: 'A personal portfolio website.',
        image: 'ic_fuelcard.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]
      

      },
       {
        id: 11,
        title: 'Eform Officer',
        description: 'A personal portfolio website.',
        image: 'ic_eform.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]
      

      },
       {
        id: 12,
        title: 'Mini ATM HiBank',
        description: 'A personal portfolio website.',
        image: 'ic_hibank.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]
      

      },
       {
        id: 13,
        title: 'Mini ATM KB Star',
        description: 'A personal portfolio website.',
        image: 'ic_mab.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]
      

      },
       {
        id: 14,
        title: 'Mini ATM Mitra Bisa',
        description: 'A personal portfolio website.',
        image: 'ic_mitra_bisa.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]
      

      },
       {
        id: 16,
        title: 'Mini ATM Panin Bank',
        description: 'A personal portfolio website.',
        image: 'ic_panin.png',
        technologies: [
          'Kotlin',
          'Modern Android Development (MAD)',
          'Firebase',
          'Clean Architecture',
          'Coroutines & Flow',
          'Jetpack Compose',
          'Hilt',
          'Testing (Expresso, MockK)'
      ]
      

      },
    ],
  }),
  getters: {
    getProjectById: (state) => (id) => {
      return state.projects.find(project => project.id === id);
    },
  },
});
