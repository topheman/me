import type { Talk } from "@/data/types";

export const talks: Talk[] = [
  {
    title: "Discover WebAssembly Component Model",
    url: "https://topheman.github.io/talks/webassembly-component-model/",
    event: {
      name: "Paris Rust Meetup",
      url: "https://www.meetup.com/rust-paris/events/310424476/",
    },
    date: "oct 2025",
    videoLinks: [],
    tags: ["rust", "webassembly"],
  },
  {
    title: "A snake game based on stdin/stdout in rust",
    url: "https://github.com/topheman/snake-pipe-rust",
    event: {
      name: "Paris Rust Meetup",
      url: "https://mobilizon.fr/events/6cd766c8-fc53-4106-a28a-b2d60fae2cf3",
    },
    date: "mar 2024",
    videoLinks: [],
    tags: ["rust"],
  },
  {
    title: "Try WebAssembly Now",
    url: "https://topheman.github.io/talks/rust-wasm-example/",
    event: {
      name: "@parisjs",
      url: "https://www.meetup.com/fr-FR/Paris-js/events/260336640/",
    },
    date: "jun 2019",
    videoLinks: [
      {
        title: "VIDEO du talk (YouTube)",
        url: "https://www.youtube.com/watch?v=F3wOfWIFzVc&list=PLWhFHBFsRtquZ6hVXVjXmJ-l51ZXuSBtb",
      },
      {
        title: "VIDEO du talk (Dailymotion)",
        url: "https://www.dailymotion.com/video/x7bzmjz",
      },
    ],
    tags: ["rust", "webassembly"],
  },
  {
    title: "NextJS Movie Browser",
    url: "https://topheman.github.io/talks/nextjs/",
    event: {
      name: "@reactjs",
      url: "https://www.meetup.com/fr-FR/ReactJS-Paris/events/260442406/",
    },
    date: "apr 2019",
    videoLinks: [
      {
        title: "VIDEO du talk",
        url: "https://youtu.be/yy8H4kwnyC8?t=1011",
      },
    ],
    tags: [],
  },
  {
    title: "Enregistrer un Screencast",
    url: "https://topheman.github.io/talks/record-screencast/",
    event: {
      name: "@parisjs",
      url: "https://www.meetup.com/fr-FR/Paris-js/events/251642404/",
    },
    date: "oct 2018",
    videoLinks: [
      {
        title: "VIDEO du talk",
        url: "https://youtu.be/CzToqxwwebc?t=4885",
      },
    ],
    tags: [],
  },
  {
    title: "Discover React Suspense with topheman/react-fiber-experiments",
    videoLinks: [
      {
        title: "VIDEO of the screencast",
        url: "https://www.youtube.com/watch?v=Nj4q2fHulqc",
      },
    ],
    date: "sept 2018",
    tags: [],
  },
  {
    title: "Discover React Suspense with topheman/react-fiber-experiments",
    url: "https://topheman.github.io/talks/react-fiber-experiments/suspense-meetup-reactjs/",
    event: {
      name: "@reactjs",
      url: "https://www.meetup.com/fr-FR/ReactJS-Paris/events/255052088/",
    },
    date: "oct 2018",
    videoLinks: [
      {
        title: "VIDEO du talk",
        url: "https://www.youtube.com/watch?v=GlBhj1ee1wk",
      },
    ],
    tags: [],
  },
  {
    title: "Pourquoi j'ai fait topheman/npm-registry-browser",
    url: "https://topheman.github.io/talks/npm-registry-browser/",
    event: {
      name: "@reactjs",
      url: "https://www.meetup.com/fr-FR/ReactJS-Paris/events/249261691/",
    },
    date: "apr 2018",
    videoLinks: [
      {
        title: "VIDEO du talk",
        url: "http://dev.topheman.com/pourquoi-realiser-topheman-npm-registry-browser-video-talk/",
      },
    ],
    tags: [],
  },
  {
    title: "Mixing React & d3",
    event: {
      name: "Best of Web 2017",
      url: "http://bestofweb.paris/",
    },
    date: "jun 2017",
    videoLinks: [
      {
        title: "VIDEO of the talk",
        url: "https://youtu.be/UuqnKH8RobA?list=PLP0qkoIjGNDU4W0Qg6Qf8dniOupWfyElN",
      },
    ],
    tags: [],
  },
  {
    title: "Mixing d3 & React",
    url: "https://topheman.github.io/talks/d3-react-experiments/",
    event: {
      name: "@reactjs",
      url: "https://www.meetup.com/fr-FR/ReactJS-Paris/events/235569246/",
    },
    date: "nov 2016",
    videoLinks: [],
    tags: [],
  },
  {
    title: "React + Redux, a perfect match",
    url: "https://topheman.github.io/talks/react-es6-redux/",
    event: {
      name: "@parisjs",
      url: "https://parisjs.org/meetup/2016-01-27",
    },
    date: "jan 2016",
    videoLinks: [],
    tags: [],
  },
  {
    title: "React + Redux, a perfect match",
    url: "https://topheman.github.io/talks/react-es6-redux/",
    event: {
      name: "@reactjs",
      url: "https://www.meetup.com/fr-FR/ReactJS-Paris/events/226591264/",
    },
    date: "nov 2015",
    videoLinks: [],
    tags: [],
  },
];

export const videos = [
  {
    title: "Utiliser WebAssembly, dès aujourd'hui",
    url: "https://www.youtube.com/embed/F3wOfWIFzVc",
  },
  {
    title: "Découvrir NextJS et le Server Side rendering",
    url: "https://www.youtube.com/embed/yy8H4kwnyC8?start=1011",
  },
  {
    title: "Enregistrer un screencast - tips and tricks",
    url: "https://www.youtube.com/embed/CzToqxwwebc?start=4885",
  },
  {
    title: "Discover React Suspense (Now Concurrent React) en",
    url: "https://www.youtube.com/embed/Nj4q2fHulqc",
  },
  {
    title: "Découvrir React Suspense (Maintenant Concurrent React) fr",
    url: "https://www.youtube.com/embed/GlBhj1ee1wk",
  },
  {
    title: "Pourquoi j'ai fait topheman/npm-registry-browser",
    url: "https://www.youtube.com/embed/p6pwaYHA17I",
  },
  {
    title: "Faire cohabiter React et d3 (Best of Web)",
    url: "https://www.youtube.com/embed/UuqnKH8RobA?list=PLP0qkoIjGNDU4W0Qg6Qf8dniOupWfyElN",
  },
];
