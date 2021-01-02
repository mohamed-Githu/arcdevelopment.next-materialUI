export const servicesOptions = [
  {
    id: 1,
    header: "Which service are you interested in?",
    options: [
      {
        id: 0,
        title: "Custom Software Development",
        icon: "assets/software.svg",
      },
      {
        id: 1,
        title: "iOS/Android App Development",
        icon: "assets/mobile.svg"
      },
      {
        id: 2,
        title: "Website Development",
        icon: "assets/website.svg",
      },
    ],
  },
  {
    id: 2,
    header: "Which type of website are you wanting?",
    subtitle: "Select one.",
    options: [
      {
        id: 0,
        title: "Basic",
        subtitle: "(Informational)",
        icon: "assets/info.svg",
        cost: 100,
        selected: false,
        prefix: "You want a ",
        suffix: " app",
      },
      {
        id: 1,
        title: "Interactive",
        subtitle: "(Users, API's, Messaging)",
        icon: "assets/customized.svg",
        cost: 200,
        selected: false,
        prefix: "You want an ",
        suffix: " app",
      },
      {
        id: 2,
        title: "E-Commerce",
        subtitle: "(Sales)",
        icon: "assets/globe.svg",
        cost: 250,
        selected: false,
        prefix: "You want an ",
        suffix: " app",
      }
    ],
  },
  {
    id: 3,
    header: "Which platforms do you need supported?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 0,
        title: "Web Application",
        icon: "assets/website.svg",
        cost: 100,
        selected: false,
      },
      {
        id: 1,
        title: "iOS Application",
        icon: "assets/iphone.svg",
        cost: 100,
        selected: false,
      },
      {
        id: 2,
        title: "Android Application",
        icon: "assets/android.svg",
        cost: 100,
        selected: false,
      }
    ],
  },
  {
    id: 4,
    header: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 0,
        title: "Photo/Video",
        icon: "assets/camera.svg",
        cost: 25,
        selected: false,
      },
      {
        id: 1,
        title: "GPS",
        icon: "assets/gps.svg",
        cost: 25,
        selected: false,
      },
      {
        id: 2,
        title: "File Transfer",
        icon: "assets/upload.svg",
        cost: 25,
        selected: false,
      }
    ],
  },
  {
    id: 5,
    header: "Which features do you expect to use?",
    subtitle: "Select all that apply.",
    options: [
      {
        id: 0,
        title: "Users/Authentication",
        icon: "assets/users.svg",
        cost: 25,
        selected: false,
      },
      {
        id: 1,
        title: "Biometrics",
        icon: "assets/biometrics.svg",
        cost: 25,
        selected: false,
      },
      {
        id: 2,
        title: "Push Notifications",
        icon: "assets/bell.svg",
        cost: 25,
        selected: false,
      }
    ],
  },
  {
    id: 6,
    header: "What type of custom features do you expect to need?",
    subtitle: "Select one.",
    options: [
      {
        id: 0,
        title: "Low Complexity",
        subtitle: "(Informational)",
        icon: "assets/info.svg",
        cost: 25,
        selected: false,
      },
      {
        id: 1,
        title: "Medium Complexity",
        subtitle: "(Interactive, Customizable, Realtime)",
        icon: "assets/customized.svg",
        cost: 50,
        selected: false,
      },
      {
        id: 2,
        title: "High Complexity",
        subtitle: "(Data Modeling and Computation)",
        icon: "assets/data.svg",
        cost: 100,
        selected: false,
      }
    ],
  },
  {
    id: 7,
    header: "How many users do you expect?",
    subtitle: "Select one.",
    options: [
      {
        id: 0,
        title: "0-10",
        icon: "assets/person.svg",
        cost: 1,
        selected: false,
        prefix: "can be used by ",
        suffix: " people"
      },
      {
        id: 1,
        title: "10-100",
        icon: "assets/persons.svg",
        cost: 1.25,
        selected: false,
        prefix: "can be used by ",
        suffix: " people"
      },
      {
        id: 2,
        title: "100+",
        icon: "assets/people.svg",
        cost: 1.5,
        selected: false,
        prefix: "can be used by ",
        suffix: " people"
      }
    ],
  },
];
