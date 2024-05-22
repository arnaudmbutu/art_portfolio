import { v4 as uuidv4 } from "uuid";
import {defineStore} from 'pinia'

export const useProjectStore = defineStore('project', {
  state: () => ({
    projectsHeading: "Projets Portfolio",
    projectsDescription: "Quelques projets réalisés",
    projects: [
      {
        id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
        title: "Auri-Archive",
        category: "Web Application",
        img: "/images/auri_archive01.PNG",
        publishDate: "Nov 04, 2021",
        tag: "UI / Frontend",
        clientTitle: "A propos du client",
        objectivesTitle: "Objectif",
        objectivesDetails:
          "Création d'une application de gestion électronique des documents.",
        techTitle: "Outils & Technologies",
        detailsTitle: "Challenge",
        socialTitle: "Partager",
        projectImages: [
          {
            id: uuidv4(),
            title: "Auri-Archive",
            img: "/images/auri_archive01.PNG",
          },
          {
            id: uuidv4(),
            title: "Auri-Archive",
            img: "/images/auri_archive02.PNG",
          },
          {
            id: uuidv4(),
            title: "Auri-Archive",
            img: "/images/auri_archive03.PNG",
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: "Nom",
            details: "Aurtech Technology Solutions",
          },
          {
            id: uuidv4(),
            title: "Services",
            details: "UX/UI Design & Frontend Development",
          },
          {
            id: uuidv4(),
            title: "Website",
            details: "https://aurtech.cd",
          },
          {
            id: uuidv4(),
            title: "Phone",
            details: "+243829787055",
          },
        ],
        technologies: [
          "WPF",
          "Xaml",
          "C#",
          "AdobeXD",
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              "Auri-Archive est une application développée par Aurtech Technology Solutions. Application estimée novatrice dans sa capacité à résoudre les problèmes liés à la gestion éle;ctronique des documents.",
          },
          {
            id: uuidv4(),
            details:
              "Entant que Développeur FrontEnd, mon rôle dans ce projet était de renforcer l'expérience utilisateur au point de faciliter la recherche des documents dans le système, donner la possibilité à l'administrateur d'enregistrer facilement et rapidement les documents manuscrits ou soit des documents éléctroniques",
          },
        ],
        socialSharings: [
          {
            id: uuidv4(),
            name: "Twitter",
            icon: "twitter",
            url: "https://twitter.com/MbutuArnaud",
          },
          {
            id: uuidv4(),
            name: "LinkedIn",
            icon: "linkedin",
            url: "https://www.linkedin.com/in/arnaud-mbutu/",
          },
          {
            id: uuidv4(),
            name: "GitHub",
            icon: "github",
            url: "https://github.com/arnaudmbutu",
          },
  
          // {
          //   id: uuidv4(),
          //   name: "Facebook",
          //   icon: "facebook",
          //   url: "https://facebook.com",
          // },
          // {
          //   id: uuidv4(),
          //   name: "Instagram",
          //   icon: "instagram",
          //   url: "https://instagram.com",
          // },
        ],
      },
      {
        id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
        title: "Borne du coin",
        category: "Mobile Application",
        img: "/images/kanya.jpg",
        publishDate: "Jan, 2022",
        tag: "UI / Frontend",
        clientTitle: "Apropos du client",
        objectivesTitle: "Objectif",
        objectivesDetails:
          "Création d'une borne de commande pour restaurant",
        techTitle: "Outils & Technologies",
        detailsTitle: "Challenge",
        socialTitle: "Partager",
        projectImages: [
          {
            id: uuidv4(),
            title: "Borne du coin",
            img: "/images/kanya01.jpg",
          },
          {
            id: uuidv4(),
            title: "Borne du coin",
            img: "/images/kanya02.jpg",
          },
          {
            id: uuidv4(),
            title: "Borne du coin",
            img: "/images/kanya03.jpg",
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: "Nom",
            details: "Aurtech Technology Solutions",
          },
          {
            id: uuidv4(),
            title: "Services",
            details: "UX/UI Design & Frontend Development",
          },
          {
            id: uuidv4(),
            title: "Website",
            details: "https://aurtech.cd",
          },
          {
            id: uuidv4(),
            title: "Téléphone",
            details: "+243829787055",
          },
        ],
        technologies: [
          "AdobeXD",
          "Flutter",
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              "La borne de commande Kanya, comme toute autre borne de commande, a pour objectif principale de permettre aux clients de commander depuis son entreprise des plats provenant du restaurant.",
          },
          {
            id: uuidv4(),
            details:
              "Pour cette application, mon travail consistait de proposer la partie utilisateur pour le développement de l'applciation mobile. Service fourni étant que designer et dévéloppeur de la boîte.",
          },
  
        ],
        socialSharings: [
          {
            id: uuidv4(),
            name: "Twitter",
            icon: "twitter",
            url: "https://twitter.com/MbutuArnaud",
          },
          {
            id: uuidv4(),
            name: "LinkedIn",
            icon: "linkedin",
            url: "https://linkedin.com/in/arnaud-mbutu",
          },
        ],
      },
      {
        id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccbb",
        title: "Auri-Immo",
        category: "Web Application",
        img: "/images/auri_immo01.PNG",
        publishDate: "Dec, 2022",
        tag: "UI / Web Application",
        clientTitle: "Apropos du client",
        objectivesTitle: "Objectif",
        objectivesDetails:
          "Création d'une application web pour la gestion des immobiliers",
        techTitle: "Outils & Technologies",
        detailsTitle: "Challenge",
        socialTitle: "Partager",
        projectImages: [
          {
            id: uuidv4(),
            title: "Auri-Immo",
            img: "/images/auri_immo01.PNG",
          },
          {
            id: uuidv4(),
            title: "Auri-Immo",
            img: "/images/auri_immo02.PNG",
          },
          {
            id: uuidv4(),
            title: "Auri-Immo",
            img: "/images/auri_immo03.PNG",
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: "Nom",
            details: "Aurtech Technology Solutions",
          },
          {
            id: uuidv4(),
            title: "Services",
            details: "UX/UI Design & Frontend Development",
          },
          {
            id: uuidv4(),
            title: "Website",
            details: "https://aurtech.cd",
          },
          {
            id: uuidv4(),
            title: "Téléphone",
            details: "+243829787055",
          },
        ],
        technologies: [
          "HTML",
          "CSS",
          "JavaScript",
          "Nuxt.js",
          "Bootstrap Vue",
          "AdobeXD",
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              "Auri-Immo est une application interne de la boite, développée pour faciliter la gestion des immobiliers.",
          },
          {
            id: uuidv4(),
            details:
              "Entant que Développeur FrontEnd et UX/UI Designer, mon défi était de donner la présentation de l'application, ainsi le déroulement de chaque opération entre les acteurs qui vont intéragir dans le système."
          },
          {
            id: uuidv4(),
            details:
              "A ce fait, il faudrait donc donner accès à l'administreur de configurer le système, de créer les bailleurs ou responsables des immobiliers qui à leurs tours vont créer des locataires."
          }
        ],
        socialSharings: [
          {
            id: uuidv4(),
            name: "Twitter",
            icon: "twitter",
            url: "https://twitter.com/MbutuArnaud",
          },
          {
            id: uuidv4(),
            name: "LinkedIn",
            icon: "linkedin",
            url: "https://www.linkedin.com/in/arnaud-mbutu/",
          },
          {
            id: uuidv4(),
            name: "GitHub",
            icon: "github",
            url: "https://github.com/arnaudmbutu",
          },
        ],
      },
      {
        id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
        title: "Mavuno",
        category: "UI/UX Design",
        img: "/images/mavunu01.PNG",
        publishDate: "Nov, 2023",
        tag: "UI / Frontend",
        clientTitle: "Apropos du client",
        objectivesTitle: "Objectif",
        objectivesDetails:
          "Présentation UI Design pour une conférence.",
        techTitle: "Outils & Technologies",
        detailsTitle: "Challenge",
        socialTitle: "Partager",
        projectImages: [
          {
            id: uuidv4(),
            title: "Mavuno",
            img: "/images/mavunu02.PNG",
          },
          {
            id: uuidv4(),
            title: "Mavuno",
            img: "/images/Mavunu03.PNG",
          },
          {
            id: uuidv4(),
            title: "Mavuno",
            img: "/images/Mavunu04.PNG",
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: "Nom",
            details: "Aurtech Technology Solutions",
          },
          {
            id: uuidv4(),
            title: "Services",
            details: "UX/UI Design & Frontend Development",
          },
          {
            id: uuidv4(),
            title: "Website",
            details: "https://aurtech.cd",
          },
          {
            id: uuidv4(),
            title: "Téléphone",
            details: "+243829787055",
          },
        ],
        technologies: [
          "Adobe XD",
          "Adobe Illustrator",
          "Adobe Photoshop",
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              "Mavuno pour signifier la nourriture, ce projet est parti sur la réflexion de créer une plateforme ou un marché qui regroupera les différents vendeurs (grossistes) et acheteurs de la République Démocratique du Congo.",
          },
  
        ],
        socialSharings: [
  
          {
            id: uuidv4(),
            name: "Twitter",
            icon: "twitter",
            url: "https://twitter.com/MbutuArnaud",
          },
          {
            id: uuidv4(),
            name: "LinkedIn",
            icon: "linkedin",
            url: "https://linkedin.com/in/arnaud-mbutu",
          },
        ],
      },
      {
        id: "260d1271-f1f2-4bc9-a5eb-05a89c8ccc99",
        title: "Conception logos",
        category: "Logos & Animations",
        img: "/images/ordinary_03.jpg",
        publishDate: "Feb, 2024",
        tag: "Illustrator/Design",
        clientTitle: "Apropos client",
        objectivesTitle: "Objectif",
        objectivesDetails:
          "Création des logos pour les entreprises",
        techTitle: "Outils & Technologies",
        detailsTitle: "Challenge",
        socialTitle: "Partager",
        projectImages: [
          {
            id: uuidv4(),
            title: "Conception logos",
            img: "/images/ordinary_02.jpg",
          },
          {
            id: uuidv4(),
            title: "Conception logos",
            img: "/images/ordinary_03.jpg",
          },
          {
            id: uuidv4(),
            title: "Conception logos",
            img: "/images/MPC.jpg",
          },
          {
            id: uuidv4(),
            title: "Conception logos",
            img: "/images/ordinary_01.jpg",
          },
          {
            id: uuidv4(),
            title: "Conception logos",
            img: "/images/libota.jpg",
          },
  
          {
            id: uuidv4(),
            title: "Conception logos",
            img: "/images/TWC_new.jpg",
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: "Nom",
            details: "Compte personnel",
          },
          {
            id: uuidv4(),
            title: "Services",
            details: "Infographiste & Designer",
          },
          {
            id: uuidv4(),
            title: "Téléphone",
            details: "+243813801509",
          },
        ],
        technologies: [
          "Adobe Illustrator",
          "Adobe Photoshop",
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              "Je suis spécialiste dans la conception de logos professionnels sur mesure pour les entreprises.",
          },
          {
            id: uuidv4(),
            details:
              "Je comprends l'importance d'une marque distinctive et mémorable, c'est pourquoi je travaille en étroite collaboration avec mes clients pour capturer l'essence de leur entreprise et créer un logo qui reflète leur identité unique.",
          },
          {
            id: uuidv4(),
            details:
              "Avec une touche particulière et mon approche personnalisée, mes clients peuvent être assurés qu'ils obtiendront un logo qui se démarque tout en renforçant leur image de marque et leur professionnalisme.",
          },
        ],
        socialSharings: [
          {
            id: uuidv4(),
            name: "Twitter",
            icon: "twitter",
            url: "https://twitter.com/MbutuArnaud",
          },
          {
            id: uuidv4(),
            name: "LinkedIn",
            icon: "linkedin",
            url: "https://linkedin.com/in/arnaud-mbutu",
          },
        ],
      },
      {
        id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdm",
        title: "Conception flyers",
        category: "flyers",
        img: "/images/image05.jpg",
        publishDate: "Apr 12, 2024",
        tag: "flyers",
        clientTitle: "Apropos du client",
        objectivesTitle: "Objectif",
        objectivesDetails:
          "Conception des affiches/visuels sur tout format pour les entreprises.",
        techTitle: "Outils & Technologies",
        detailsTitle: "Challenge",
        socialTitle: "Partager",
        projectImages: [
          {
            id: uuidv4(),
            title: "flyers",
            img: "/images/image07.jpg",
          },
          {
            id: uuidv4(),
            title: "flyers",
            img: "/images/image05.jpg",
          },
          {
            id: uuidv4(),
            title: "flyers",
            img: "/images/image06.jpg",
          },
          {
            id: uuidv4(),
            title: "flyers",
            img: "/images/image01.jpg",
          },
          {
            id: uuidv4(),
            title: "flyers",
            img: "/images/image02.jpg",
          },
          {
            id: uuidv4(),
            title: "flyers",
            img: "/images/image03.jpg",
          },
        ],
        companyInfos: [
          {
            id: uuidv4(),
            title: "Nom",
            details: "Compte personnel",
          },
          {
            id: uuidv4(),
            title: "Services",
            details: "Infographiste & Designer",
          },
          {
            id: uuidv4(),
            title: "Téléphone",
            details: "+243813801509",
          },
        ],
        technologies: [
          "Adobe Illustrator",
          "Adobe Photoshop",
        ],
        projectDetails: [
          {
            id: uuidv4(),
            details:
              "J'offre des services de conception de flyers, d'invitations et de journaux adaptés à tous les formats. Que ce soit pour promouvoir un évènement, annoncer une offre spéciale ou diffuser des informations importantes, je mets mon expertise créative au service de mes clients.",
          },
          {
            id: uuidv4(),
            details:
              "Avec une attention particulière portée à la mise en page, au design et au message, je fournis des produits qui captent l'attention de votre public cible et transmet efficacement votre message.",
          },
          {
            id: uuidv4(),
            details:
            "Qu'il s'agisse d'un flyer accrocheur, d'une invitation élégante ou d'un journal informatif, je suis là pour donner vie à vos idées et vous aider à atteindre vos objectifs de communication."
          }
        ],
        socialSharings: [
          {
            id: uuidv4(),
            name: "Twitter",
            icon: "twitter",
            url: "https://twitter.com/MbutuArnaud",
          },
          {
            id: uuidv4(),
            name: "LinkedIn",
            icon: "linkedin",
            url: "https://linkedin.com/in/arnaud-mbutu",
          },
        ],
      }
      ],
    clientsHeading: "Quelques entreprises avec qui j'ai travaillé",
    clients: [
      {
        id: uuidv4(),
        title: "aurtech",
        img: "/brands/aurtech_gray.jpg",
      },
      {
        id: uuidv4(),
        title: "Kanya",
        img: "/brands/kanya_gray.jpg",
      },
      {
        id: uuidv4(),
        title: "Trinix",
        img: "/brands/trinix_gray.jpg",
      },
      {
        id: uuidv4(),
        title: "Fehap",
        img: "/brands/fehap_gray.jpg",
      },
      {
        id: uuidv4(),
        title: "Futures Leaders Academy",
        img: "/brands/fla_gray.jpg",
      },
  
    ],
    aboutMe: [
      {
        id: uuidv4(),
        bio: "Bienvenue sur mon espace créatif ! Je suis Arnold Mbutu, une personne passionnée et polyvalente évoluant dans l'univers fascinant de la créativité.",
      },
      {
        id: uuidv4(),
        bio: `En tant qu'infographiste, je donne vie à des idées avec des visuels percutants. En tant que développeur front-end, je façonne des expériences en ligne mémorables. En tant que designer UI/UX, je crée des interfaces intuitives et esthétiques. En tant que photographe, je capture des moments uniques et crée des couvertures photos qui racontent des histoires. En tant que monteur de vidéo, je transforme des séquences en œuvres cinématographiques captivantes. En tant que concepteur de documents sécurisés, je mets l'accent sur la fusion de la forme et de la fonction pour des résultats impeccables.` },
      {
        id: uuidv4(),
        bio: `Mais au-delà de ces compétences, je trouve une immense satisfaction en tant que répétiteur et thérapeute, apportant mon soutien aux enfants ayant des troubles du spectre autistique. Chaque domaine dans lequel je m'investis est une expression de ma passion pour la créativité et du désir profond d'apporter une contribution positive`   },
  
        {
          id: uuidv4(),
          bio: `Explorez mon portfolio pour découvrir comment chaque projet est une histoire unique, tissée avec soin et compétence. Si vous partagez une vision ou avez un projet en tête, n'hésitez pas à me contacter. Ensemble, créons quelque chose d'extraordinaire !`   },
    ],
    copyrightDate: new Date().getFullYear(),
    socialProfiles: [
      {
        id: uuidv4(),
        name: "GitHub",
        icon: "github",
        url: "https://github.com/arnaudmbutu",
      },
      {
        id: uuidv4(),
        name: "Twitter",
        icon: "twitter",
        url: "https://twitter.com/MbutuArnaud",
      },
      {
        id: uuidv4(),
        name: "Linkedin",
        icon: "linkedin",
        url: "https://www.linkedin.com/in/arnaud-mbutu/",
      },
    ],
    categories: [
      {
        id: uuidv4(),
        value: "web_Application",
        name: "Web Application",
      },
      {
        id: uuidv4(),
        value: "Mobile_Application",
        name: "Mobile Applicaiton",
      },
      {
        id: uuidv4(),
        value: "Ui-Ux_Design",
        name: "UI/UX Design",
      },
      {
        id: uuidv4(),
        value: "Logos",
        name: "Logos & Animations",
      },
      {
        id: uuidv4(),
        value: "Logo_apps",
        name: "Logos apps",
      },
      {
        id: uuidv4(),
        value: "Flyers",
        name: "flyers",
      },
      {
        id: uuidv4(),
        value: "3D_mockups",
        name: "3D mockups",
      },
    ],
  }),
  getters: {
    getProjectById: (state) => (id) => {
      return state.projects.find((project) => project.id == id);
    },
  }
});

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { count: 0 }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
  },
})