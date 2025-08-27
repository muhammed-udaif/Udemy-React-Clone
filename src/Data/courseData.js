import tvPlay from '../assests/tvplay.svg'
import fullsection from '../assests/fullSection.svg'
import notes from '../assests/notes.svg'
import notesNew from '../assests/notes-1.svg'
import downloads from '../assests/downloads.svg'
import mobile from '../assests/mobile.svg'
import curly from '../assests/curly.svg'
import subtittle from '../assests/subtittle.svg'
import prize from '../assests/prize.svg'
import blackShadedStar from '../assests/blackShaded-star.svg'
import grade from '../assests/grade.svg'
import user from '../assests/user.svg'
import blackPlay from '../assests/blackPlay.svg'
import fiveStar from '../assests/fiveStar.svg'
import fourStar from '../assests/star-1.svg'

const course = [
     {
        id:1,
        src:"https://img-c.udemycdn.com/course/750x422/1362070_b9a1_2.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg",
        mainHead: "React - The complete Guide 2025 (incl. Next.js, Redux)",
        subHead:"Dive in and learn React.js from scratch! Learn React, Hooks, React Router, Next.js, Best Practices and way more!",
        firstCreator:"Academind by Maximilian Schwarzmüller",
        secondCreator:"Maximilian Schwarzmüller",
        updated:"Last update 7/2025",
        PremiumRating:"4.6",
        PremiumRatingCount:"232,874 ratings",
        premiumCount:"978,388",
        couponPrize:"₹549",
        learnContent:[
            {head:"Learn React from the ground up and finish the course as an advanced React developer"},
            {head:"Build multiple high-quality demo apps, including a fullstack app built with NextJS"},
            {head:"Join more than 900,000 students in this course & more than 3,000,000 students I taught across all my courses"},
            {head:"Follow along locally or in a cloud development environment"},
            {head:"Manage complex state efficiently with React's Context API & React Redux"},
            {head:"Build standalone React apps & applications connected to a backend via HTTP"},
            {head:"Learn about routing & route related data fetching with React Router"},
            {head:"Implement user authentication in React apps"},
            {head:"Get started with React unit Testing"}
        ],
        exploreTopic: [
            {head:"React Js"},
            {head:"Programming Languages"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"71 hours on-demand video", src:tvPlay},
            {head:"37 coding exercises", src:fullsection},
            {head:"Assignments", src:notes},
            {head:"48 articles", src:notesNew},
            {head:"62 downloadable resouses", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Full lifetime access", src:curly},
            {head:"Closed captions", src:subtittle},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Welcome To The Course!",duration:"01:07"}, react:{tittle:"What is React.js? And Why Would You Use It?",duration:"02:58"},vannilla:{tittle:`ReactJS vs "Vanilla JavaScript": Why Use React?`,duration:"10:02"},editing:{tittle:"Editing Our First React App",duration:"3:06"},about:{tittle:"About This Course & Course Outline",duration:"5:10"}},
            {welcome:{tittle:"Module Introduction",duration:"8:02"},react:{tittle:"Starting Project",duration:"6:09"},vannilla:{tittle:"Adding JavaScript To A Page & How React Projects Differ",duration:"1:48"},editing:{tittle:"React Projects Use a Build Process",duration:"9:56"},about:{tittle:`"import" & "export"`,duration:"8:35"}},
            {welcome:{tittle:"Module Introduction",duration:"9:47"}, react:{tittle:"it's All About Components! [Core Concept]",duration:"6:23"},vannilla:{tittle:"Setting Up The Starting Project",duration:"2:28"},editing:{tittle:"JSX & React Components [Core Concept]",duration:"5:40"},about:{tittle:"Creating & Using a First Custom Component",duration:"10:58"}},
            {welcome:{tittle:"Module Introduction",duration:"4:10"},react:{tittle:"You Don't Have To Use JSX",duration:"7:29"},vannilla:{tittle:"Working with Fragments",duration:"8:54"},editing:{tittle:"When should You Split Components?",duration:"7:29"},about:{tittle:"Splitting Components By Feature & State",duration:"1:02"}},
            {welcome:{tittle:"Module Introduction & A Challenge For You!",duration:"3:47"},react:{tittle:"Adding a Header Component",duration:"5:14"},vannilla:{tittle:"Getting Started with a User input Component",duration:"3:12"},editing:{tittle:"Handling Events & Using Two-Way-Binding",duration:"1:34"},about:{tittle:"Lifting State Up",duration:"5:10"}},
            {welcome:{tittle:"Module Introduction & Starting Project",duration:"1:06"},react:{tittle:"Splitting CSS Code Across Multiple Files",duration:"6:10"},vannilla:{tittle:"Styling React Apps with Vanilla CSS-Pros & Cons",duration:"4:10"},editing:{tittle:"Vanilla CSS Styles Are NOT Scoped To Components!",duration:"1:20"},about:{tittle:"Styling React Apps with Inline Styles",duration:"7:10"}},
            {welcome:{tittle:"Module Introduction",duration:"8:34"},react:{tittle:"The Starting Projec",duration:"5:37"},vannilla:{tittle:"Understanding React Error Messages",duration:"5:23"},editing:{tittle:"Using the Browser Debugger & Breakpoints",duration:"5:12"},about:{tittle:`Understanding React's "Strict Mode"`,duration:"4:32"}},
            {welcome:{tittle:"Module Introduction & Starting Project",duration:"1:03"},react:{tittle:"Repetition: Managing User Input with State (Two-Way-Binding)",duration:"4:29"},vannilla:{tittle:"Repetition: Fragments",duration:"9:12"},editing:{tittle:"Introducing Refs: Connecting & Accessing HTML Elements via Refs",duration:"8:03"},about:{tittle:"Manipulating the DOM via Refs",duration:"7:14"}},
            {welcome:{tittle:"Module Introduction & Starting Project",duration:"8:12"},react:{tittle:`Adding a "Projects Sidebar" Component`,duration:"1:02"},vannilla:{tittle:"Styling the Sidebar & Button with Tailwind CSS",duration:"7:45"},editing:{tittle:`Adding the "New Project" Component & A Reusable "Input" Component`,duration:"5:21"},about:{tittle:"Styling Buttons & Inputs with Tailwind CSS",duration:"2:10"}},
            {welcome:{tittle:"Module Introduction",duration:"5:10"}, react:{tittle:"Understanding Prop Drilling & Project Overview",duration:"8:31"},vannilla:{tittle:"Prop Drilling: Component Composition as a Solution",duration:"4:37"},editing:{tittle:"Introducing the Context API",duration:"10:10"}, about:{tittle:"Creating & Providing The Context",duraiton:"4:10"}}
        ],
        javascriptHead: [
            {head:"Getting Started"},
            {head:"JavaScipt Refresher"},
            {head:"React Essentials - Components"},
            {head:"React Essentials - Deep Dive"},
            {head:"React Essentials - Practice Project"},
            {head:"Styling React Components"},
            {head:"Debugging React Apps"},
            {head:"working With Refs & Portals"},
            {head:"Practice Project: Project Managment App(with Components, State , Refs & More)"},
            {head:"React's Context API & useReducer - Advanced State Management"}
        ],
        requirementItems: [
            {head:"JavaScript + HTML + CSS fundamentals are aabsolutely required"},
            {head:"You DON'T need to be a JavaScript expert to succeed in this course!"},
            {head:"ES6 + JavaScript knowledge is beneficial but not a must-have"},
            {head:"NO prior React or any other JS framework experience is required"}
        ],
        courseInclude: [
            {head:"Students who want to learn how to build reactive and fast web apps"},
            {head:"Anyone who's intrested in learning an extremely popular techology use by leading teach companies like Netflix"},
            {head:"Students who want to take their web development skill to the next level and learn a future-proof technology"}
        ],
        coursePara: [
            `This bestselling course by the author of "React Key Concept" has turned more students into ReactJS developers than any other courses more than 900,000 and counting!`,
            `-`,
            `Updated December 2024`,
            `Fully updated for React 19!`,
            `- Added brand-new section on React Server Components(stable with React 19)`,
            `- Updated multiple lectures to adjust for smaller changes due to React 19`,
            `Updated earlier 2024:`,
            `Added brand-new content (-3h) on the NextJS App Router`,
            `Added a brand-new "Best Practices & Patterns" section`
        ],
        broughtItems: [
            {head:"The Ultimate React Course 2025: React, Next.js, Redux & More",seller:"Bestseller",hour:"84 total hours",update:"Updated 5/2025",rating:"4.7",people:"143,829",price:"₹499",src:"https://img-c.udemycdn.com/course/100x100/4471614_361e_8.jpg"},
            {head:"Complete React, Next.js & TypeScript Projects Course 2025",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹619",src:"https://img-c.udemycdn.com/course/100x100/2018828_41a9_3.jpg"},
            {head:"Modern React with Redux",seller:"Premium",hour:"75.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"327,427",price:"₹589",src:"https://img-c.udemycdn.com/course/100x100/705264_caa9_13.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,760",price:"₹499",src:"https://img-c.udemycdn.com/course/100x100/6375895_c850_2.jpg"},
            {head:"React & TypeScript - The Practical Guide",seller:"Bestseller",hour:"7.5 total hours",update:"Updated 4/2025",rating:"4.6",people:"27,334",price:"₹499",src:"https://img-c.udemycdn.com/course/100x100/5620946_7c11.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 4/2025",rating:"4.6",people:"250,235",price:"₹699",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹479",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹699",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"}
        ],
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Academind by Maximilian Schwarzmüller",
                role:"Online Education",
                instructorList: [
                    {src:blackShadedStar, head:"4.6 Instructor Rating"},
                    {src:grade, head:"808,761 Reviews"},
                    {src:user, head:"3,363,355 Students"},
                    {src:blackPlay, head:"48 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/31926668_94e7_6.jpg",
                about: [
                    "Bundling the courses and know how of successful instructors, Academind stives to deliver high quality online education",
                    "Online Education, Real-Life Success- that's what Academind stands for. Learn topics like web development, data analyses and more in a fun engaging way.",
                    "We've taught more than 3,000,000 students on a broad variety of topics. We'd love to teach you as well :)",
                    "Keep learning"
                ],           
            },
            {
                id:2,
                instructorSubHead:"Maximilian Schwarzmüller",
                role:"AWS certified, Professional Web Developer and Instructor",
                instructorList: [
                    {src:blackShadedStar, head:"4.6 Instuctor Rating"},
                    {src:grade, head:"1,240,545 Reviews"},
                    {src:user, head:"3,407,110 Students"},
                    {src:blackPlay, head:"66 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/31926668_94e7_6.jpg",
                about: [
                    "Starting out at the age of 12 I never stopped learnig new programming skills and languages. Early I started creating websites for friends and just for fun as well, Besides web development I also explored Python and other non-web-only languages. This passion has since lasted and lead to my decision of working as a freelance web developer and consultant, The success and fun I have in this job is inmense and reallly keeps that passion burningly alive.",
                    "Starting web development on the backend (PHP with Larvel, NodeJS, Python) I also become more and more of a frontend developer using modern framework like React, Angular or VueJS in a lot of projects. I love both worlds nowadays!",
                    "I also build full-stack applications and acquired expert DevOps and cloud computing knowledge proven by the many AWS certifications I hold(incl. the top-level Solutions Architect Professional certification).",
                    "As a self-taught developer I had the chance at broaden my horizon by studying Business Administration where I hold a Master's degree. That enabled me to work in major strategy consultancy as well as a bank. While learning, that I enjoy developomet more than these fields, the time in this sector greatly improved my overall experience and skills"
                ]
            }

        ],
        commentItems: [
            {head:"Jürgen B.",src:fiveStar,days:"4 days ago",user:"JB",description:"Wow, what an outstanding course on React. Super well explained, very well structured, and really great examples and practice, and hands-on programming. This course is absolutely recommednded!!!"},
            {head:"Olagoke O.",src:fourStar,days:"a month ago",user:"OL",description:"Max is a really good tutor. I would have given 5 stars but there are some unnecessary long videos. He could have explaned some concepts in a more concise way but he chose to drag it."},
            {head:"Simon L.", src:fiveStar, days:"a month ago", user:"SL",description:"This is the most in depth and complete course on React out there. The author Knows exactly what you might find useful (TypeScript and JavaScript revisions - brilliant!) and the sheer scope is absolutely amazing. Thank you, Alexander!"},
            {head:"Nicholas C.",src:fiveStar,days:"a month ago", user:"NI",description:"This was a beautiful, comprehensive course on React. it trully is complete, and I feel fully equipped to work on enterprise React applications after getting through this course!"},
            {head:"Samir U.", src:fourStar,days:"2 weeks ago", user:"SA",description:"Hallo Maximilian, dein kurs fand ich gut, man konnte so unglaublich viellernen, es hat mich Monate gekostet, um ihn nebn dem Beruf zu absolvieren,genau so muss ein ausfuhrlicher kurs zu React etc. sein, den esist riesig und anfangs komplex.Jedoch fand ich bei..."},
            {head:"Dilnawaz K.", src:fiveStar, days:"a month ago", user:"DI", description:"Just wrapped up the course, and I've got to say- it's one of the most well-paced and thoughtfully structured courses I've taken. Max walks you through everything from the basics of components and JSX to more advanced topics like state management, side effects, routing..."},
            {head:"Asmaa B.", src:fiveStar, days:"2 months ago", user:"AB",description:"Highly recommended. This course is beginner-friendly and easy to follow, it covers everything you need to feel confident with React, from the fundamentals to more advanced tools. I especially appreciated the intro to Next.js. Big thanks to Maximilian for putting so much thought into the content."},
            {head:"Usman N.", src:fiveStar, days:"a month ago", user:"UN",description:"yes it was really outstanding course"},
            {head:"Sreetanu Ghosh D.",src:fiveStar, days:"2 months ago", user:"SD", description:"This course is really great for anyone, who wants to learn basics as well as want to dive deeper. Thanks to the author!"},
            {head:"Uran M.",src:fiveStar, days:"6 months ago", user:"UM", description:"Спасибо автору за такой курс! этот курс очень детально описывает от основ Реакта до высоких возможностей, о котором я узнал благодаря этому курс"},
            {head:"Christopher N.", src:fiveStar, days:"3 months ago", user:"CN", description:"I have zero knowledge about React.js when starting  this course. Honestly after the completion of this course, I'm now in a better position to build projects using React. Thank you for the hands on projects. Happy coding"},
            {head:"Frederik S.", src:fiveStar, days:"a month ago", user:"FR", description:"Absolutely amazing course. Not only succeeded in retaining my attention but actually motivated me to finish the entire course."}  
        ],
        providedCourseSection: [
            {
                id:1,
                author:"Academind by Maximilian Schwarzmüller",
                ProvideItem: [
                    {head:"Flutter & Dart - The Complete Guide[2025 Edition]",discriptionAuthor:"Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller",rating:"4.6",count:"(87,168)",hour:"30 total hours",lectures:"309 lectures", Price:"₹589",src:"https://img-c.udemycdn.com/course/100x100/1708340_7108_5.jpg"},
                    {head:"Docker & Kubernetes: The Practical Guide [2025 Edition]",discriptionAuthor:"Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller", rating:"4.7",count:"(34,373)",hour:"23.5 total hours",lectures:"264 lectures",Price:"₹589",src:"https://img-c.udemycdn.com/course/100x100/3490000_d298_2.jpg"},
                    {head:"NodeJS- The Complete Guide (MVC, REST APIs, GraphQL, Deno",discriptionAuthor:"Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller", rating:"4.6",count:"(34,373)",hour:"40.5 total hours", lectures:"544 lectures", Price:"₹589",src:"https://img-c.udemycdn.com/course/100x100/1879018_95b6_3.jpg"}
                ],          
            },
            {
                id:2,
                auhtor:"Maximilian Schwarzmüller",
                ProvideItem: [
                    {head:"Angular - The Complete Guide (2025 Edition)",discriptionAuthor:"Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller", rating:"4.7",count:"(217,749)",hour:"56 total hours", lectures:"758 lectures", Price:"₹499", src:"https://img-c.udemycdn.com/course/100x100/756150_c033_4.jpg"},
                    {head:"Flutter & Dart - The Complete Guide[2025 Edition]",discriptionAuthor:"Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller", rating:"4.6", count:"(87,168)",hour:"30 total hours", lectures:"309 lectures", Price:"₹589",src:"https://img-c.udemycdn.com/course/100x100/1708340_7108_5.jpg"},
                    {head:"Docker & Kubernetes: The Practical Guide [2025 Edition]",discriptionAuthor:"Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller", rating:"4.7", count:"(34,373)", hour:"23.5 total hours", lectures:"264 lectures", Price:"₹589",src:"https://img-c.udemycdn.com/course/100x100/3490000_d298_2.jpg"}
                ]
            }
        ]

    },       
    {
        id:2,
        src:"https://img-c.udemycdn.com/course/750x422/4471614_361e_8.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/480x270/4471614_361e_8.jpg",
        mainHead:"The Ultimate React Course 2025: React, Next.js, Redux & More",
        subHead:"Master modern React from beginner to advanced! Next.js, Context API, React Query, Redux, Tailwind, advanced patterns",
        firstCreator:"Jonas Schmedtmann",
        updated: "Last updated 5/2025",
        PremiumRating:"4.7",
        PremiumRatingCount:"22,357 ratings",
        premiumCount:"144,267",
        couponPrize:"₹549",
        learnContent: [
            {head:"Become an advanced, condident, and modern React developer from scratch"},
            {head:"Build 10+ beautiful projects, includeng two HUGE professional real-world apps"},
            {head:"Become job-ready by working with libraries and tools used in professional projects"},
            {head:"Join my other 1,900,000+ happy students on this journey"},
            {head:"Think like a senior React engineer with advanced design patterns"},
            {head:`Next.js "App" router with cutting-edge React Server Components + Server Actions`},
            {head:"State management thinking about state, where to place, local vs global, UI vs remote"},
            {head:"Build reusable,compossable and versatile components"},
            {head:"Master the confussing but importent useEffect hook once and for all"}
        ],    
        exploreTopic: [
            {head:"React JS"},
            {head:"Redux Framework"},
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"84 hours on-demand video", src:tvPlay},
            {head:"9 articles", src:notesNew},
            {head:"2 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Downloading Course Material",duration:"01:07"}, react:{tittle:"Course Roadmap and Projects",duration:"02:58"},vannilla:{tittle:`Building Our First React App!`,duration:"10:02"},editing:{tittle:"Watch Before You Start!",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Welcome, Welcome, Welcome!"},
            {head:"PART 1:REACT FUNDAMENTALS[4 PROJECTS]"},
            {head:"A First Look at React"},
            {head:"[Optional] Review of Essential JavaScript for React"},
            {head:"Working With Components, Props, and JSX"},
            {head:"State, Event, and Forms: Interactive Components"},
            {head:"Thinking in React: State Management"},
            {head:"[Optional] Practice Project: Eat-'N-Split"},
            {head:"PART 2: INTERMEDIATE REACT [2 PROJECTS]"},
            {head:"Thinking In React: Components, Composition, and Reusability"}
        ],     
        requirementItems: [
            {head:"No React experience necessary! I take you from beginner to expert!"},
            {head:"Basic understanding of JavaScript is required (this course contains a quick JavaScript review section)"},
            {head:"Any computer and OS will work - Windows, macOs or Linux"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"}
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Jonas Schmedtmann",
                role:"Web Developer, Designer, and Teacher",
                instructorList: [
                    {src:blackShadedStar, head:"4.7 Instructor Rating"},
                    {src:grade, head:"485,897 Reviews"},
                    {src:user, head:"2,175,875 Students"},
                    {src:blackPlay, head:"7 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/7799204_2091_5.jpg",
                about: [
                    "Hi, I'm Jonas I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }
        ],  
        commentItems: [
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"Jonas es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}  
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Jonas Schmedtmann",
                ProvideItem: [
                    {head:"The Complete JavaScript Course 2025: From Zero to Expert!",discriptionAuthor:"Jonas Schmedtmann",rating:"4.7",count:"(226,609)",hour:"71 total hours",lectures:"332 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/100x100/851712_fc61_6.jpg"},
                    {head:"Node.js, Express, MongoDB & More: The Complete Bootcamp",discriptionAuthor:"Jonas Schmedtmann", rating:"4.6",count:"(28,427)",hour:"42 total hours",lectures:"229 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/100x100/1672410_9ff1_5.jpg"},
                    {head:"Build Responsive Real-World Websites with HTML and CSS",discriptionAuthor:"Jonas Schmedtmann", rating:"4.7",count:"(114,957)",hour:"37.5 total hours", lectures:"149 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/100x100/437398_46c3_10.jpg"}
                ],           
            }
        ]
    },
    {
        id:3,
        src:"https://img-c.udemycdn.com/course/750x422/5042208_7db9_3.jp",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/5042208_7db9_3.jpg",
        mainHead:"React JS Masterclass: Zero To Job Ready With 10 Projects",
        subHead:"Become React Developer: React Core, Hook, APIs, Routing, Context, Reducer, Redux, Firebase, Tailwind, Deployment & More",
        firstCreator:"Shubham Srada",
        updated: "Last updated 7/2025",
        PremiumRating:"4.4",
        PremiumRatingCount:"22,357 ratings",
        premiumCount:"144,267",
        couponPrize:"₹549",
        learnContent: [
            {head:"Everything you need to become a React developer with basics to advanced concepts. how things works behind the sceanes and real projects"},
            {head:"Understand fundamentals Components & Props, State, Hooks, Context & Reducers and more..."},
            {head:"Dive Deep with Custom Hooks, Tailwind CSS, React Router, Redux, Firebase, React Skeleton & more"},
            {head:"Build real-world applications with React (E-Commerce, Move Informer, Todolist Manager, Blog, Word Counter & more"},
            {head:"Think like a senior React engineer with advanced design patterns"},
            {head:`Build mock ecommerce backend with JSON Auth Server and deploy it on Railway`},
            {head:"State management thinking about state, where to place, local vs global, UI vs remote"},
            {head:"Work with multiple API to make the most of third-party data(such as Move information & Jokes)"},
            {head:"Deploy your projects on Netlify using Git & Github"}
        ],    
        exploreTopic: [
            {head:"React JS"},
            {head:"Redux Framework"},
            {head:"React Router"},
            {head:"Web Development"},
            {head:"Firebase"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"35 hours on-demand video", src:tvPlay},
            {head:"5 articles", src:notesNew},
            {head:"2 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Introduction & Resources"},
            {head:"React Basics & Setup"},
            {head:"State and useState"},
            {head:"Componets & Props"},
            {head:"Styling React Application"},
            {head:"User Input, Events & useRef"},
            {head:"useEffects, useCallback and Custom Hooks"},
            {head:"Project: TaskMate"},
            {head:"React Router"},
            {head:"Tailwind CSS Crash Course"}
        ],     
        requirementItems: [
            {head:"No React experience necessary! I take you from beginner to expert!"},
            {head:"Basic understanding of JavaScript is required (this course contains a quick JavaScript review section)"},
            {head:"Any computer and OS will work - Windows, macOs or Linux"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Shubham Srada",
                role:"Web Developer, Designer, and Teacher",
                instructorList: [
                    {src:blackShadedStar, head:"4.5 Instructor Rating"},
                    {src:grade, head:"9,504 Reviews"},
                    {src:user, head:"76,104 Students"},
                    {src:blackPlay, head:"18 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/54081036_f1d2_3.jpg",
                about: [
                    "Hi, I'm Shubham I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }
        ],  
        commentItems: [
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Jonas Schmedtmann",
                ProvideItem: [
                    {head:"Complete Backend Development 2025...",discriptionAuthor:"Shubham Srada",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/2625826_b507_5.jpg"},
                    {head:"Build REST APIs with Django REST...",discriptionAuthor:"Shubham Srada", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/3856080_6aff_7.jpg"},
                    {head:"Data Structures and Algotithms Python...",discriptionAuthor:"Shubham Srada", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/3528976_ceb7_3.jpg"}
                ],           
            }
        ]
    },   
    {
        id:4,
        src:"https://img-c.udemycdn.com/course/750x422/5939718_4725_4.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/5939718_4725_4.jpg",
        mainHead:"React 18 Course 2025 - Learn React JS the fast way",
        subHead:"Develop React JS web applicaitons including components, state , effect, hooks, React router, reducer, context, etc.",
        firstCreator:"Jannick Leistmann",
        secondCreator:"Dennis Panjuta",
        updated: "Last updated 7/2025",
        PremiumRating:"4.6",
        PremiumRatingCount:"22,357 ratings",
        premiumCount:"144,267",
        couponPrize:"₹2,919",
        learnContent: [
            {head:"Learn React in-depth in short amount of time"},
            {head:"Learn how to deal with data within your React applications"},
            {head:"Learn how to use reducers for building scalable applications"},
            {head:"Build comprehensive web apps like a modern video platform"},
            {head:"Use React components, React router, and state to create a maintainable code base"},
            {head:`Learn how to consume a RESTful Web API from your React Application using axios`},
            {head:"Deploy your projects on Netlify using Git & Github"},
            {head:"State management thinking about state, where to place, local vs global, UI vs remote"},
            {head:"Work with multiple API to make the most of third-party data(such as Move information & Jokes)"}
        ],    
        exploreTopic: [
            {head:"React JS"},
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"9.5 hours on-demand video", src:tvPlay},
            {head:"12 articles", src:notesNew},
            {head:"9 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"React Fundamentals"},
            {head:"JavaScript for React Part 1: Scope, Arrow Functions and more"},
            {head:"Handling state with React"},
            {head:"Events, Searching, Refactoring and Domain Logic"},
            {head:"React Router, Watchlisting, Lifting State and Props"},
            {head:"JavaScript for React Part 2: Modules Interpolations and Array Methods"},
            {head:"Buildling a web application with React Reducers"},
            {head:"Using the context API for global state"},
            {head:"JavaScript for React Part 3: Promises, Async ans Await"},
        ],     
        requirementItems: [
            {head:"Basic programming skills be great"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Jannick Leismann",
                role:"Software Development Instructor",
                instructorList: [
                    {src:blackShadedStar, head:"4.5 Instructor Rating"},
                    {src:grade, head:"22,416 Reviews"},
                    {src:user, head:"355,252 Students"},
                    {src:blackPlay, head:"22 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/22447634_26a6_14.jpg",
                about: [
                    "Hi, I'm Jannick I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            },
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Dennis Panjuta",
                role:"Teaches over 500,0000 students to code",
                instructorList: [
                    {src:blackShadedStar, head:"4.6 Instructor Rating"},
                    {src:grade, head:"110,968 Reviews"},
                    {src:user, head:"557,205 Students"},
                    {src:blackPlay, head:"45 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/4573650_9792_2.jpg",
                about: [
                    "Hi, I'm Denis Panjuta I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }       
         ],  
        commentItems: [
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Jannick Leismann",
                ProvideItem: [
                    {head:"Complete Angular Course 2025 - Master..",discriptionAuthor:"Denis Panjuta, Jannick Leismann",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/4844324_2d2b_4.jpg"},
                    {head:"The complete ASP.NET Core 9 course for busy...",discriptionAuthor:"Denis Panjuta, Jannick Leismann", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/4599016_77d5.jpg"},
                    {head:"Learn C# Full Stack Development with...",discriptionAuthor:"Denis Panjuta, Jannick Leismann", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/5344102_b6d2_3.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:5,
        src:"https://img-c.udemycdn.com/course/750x422/6375895_c850_2.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/6375895_c850_2.jpg",
        mainHead:"100 Hours Web Devlopment Bootcamp - Build 23 React Projects",
        subHead:"The only project based course you will ever need. Get access to all kinds React.js Projects that you can think of.",
        firstCreator:"Burak Orkmez",
        updated: "Last updated 7/2025",
        PremiumRating:"4.7",
        PremiumRatingCount:"713 ratings",
        premiumCount:"6,899",
        couponPrize:"₹799",
        learnContent: [
            {head:"Build real-world applications like Spotify, Tinder, Linkedin, Netflix & Twitter clones"},
            {head:"Implement authentication, real-time chat, and payment systems"},
            {head:"Develop Proffessional e-commerce platform with Strip integeation"},
            {head:"Master modern authentication and authorization techniques"},
            {head:"Lean how to deploy any kind of application"},
            {head:`Master MERN Stack developmemt from fundamentals to advanced concepts`},
            {head:"Create full-stack applications using Next.js, GraphQL, Node.js and React "},
            {head:"Create responsive admin dashboards"},
            {head:"Learn React integration with Go and Python"}
        ],    
        exploreTopic: [
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"128.5 hours on-demand video", src:tvPlay},
            {head:"33 articles", src:notesNew},
            {head:"27 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Before Getting Started Watch This Short Section"},
            {head:"MERN Crash Course - Full Stack Project & Deployment - Bulid a Product Store"},
            {head:"Full Stack Real Time Chat App with Images Uploads"},
            {head:"Beginner Friendly Real Time Chat App"},
            {head:"Complete Spotify Clone - Super Detailed & Featured"},
            {head:"Full Stack Twitter Clone with Likes, Comments"},
            {head:"Full Stack E-Commerce Store with Admin Dashboard"},
            {head:"Build an Advanced Authentication System- Emails, Verify Account"},
            {head:"Full Stack Tinder Clone with Realtime Messaging Feature"},
            {head:"MERN Stack Netflix Clone with - Responsive & Nice UI"}
        ],     
        requirementItems: [
            {head:"No React experience necessary! I take you from beginner to expert!"},
            {head:"Basic understanding of JavaScript is required (this course contains a quick JavaScript review section)"},
            {head:"Any computer and OS will work - Windows, macOs or Linux"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Burak Orkmez",
                role:"Web Developer & Course Creator",
                instructorList: [
                    {src:blackShadedStar, head:"4.7 Instructor Rating"},
                    {src:grade, head:"713 Reviews"},
                    {src:user, head:"6,889 Students"},
                    {src:blackPlay, head:"1 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/271114398_b463_3.jpg",
                about: [
                    "Hi, I'm Burak Orkmez I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }
        ],  
        commentItems: [
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
        ], 
        providedCourseSection: [
            {
                id:1,
                author:"Burak Orkmez",
                ProvideItem: [
                    {head:"Complete Angular Course 2025 - Master..",discriptionAuthor:"Burak Orkmez",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/4844324_2d2b_4.jpg"},
                    {head:"The complete ASP.NET Core 9 course for busy...",discriptionAuthor:"Burak Orkmez", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/4599016_77d5.jpg"},
                    {head:"Learn C# Full Stack Development with...",discriptionAuthor:"Burak Orkmez", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/5344102_b6d2_3.jpg"}
                ],           
            }
        ]    
    }, 
    {
        id:6,
        src:"https://img-c.udemycdn.com/course/750x422/2018828_41a9_3.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/2018828_41a9_3.jpg",
        mainHead:"Complete React, Next.js & TypeScript Projects Course 2025",
        subHead:"Hands-on React: 25+ Projects Featuring Next.js, TypeScript, Prisma, Zod, Shandcn, Axios, Router 6, Query 5, Redux Toolkit",
        firstCreator:"Janis Smilga",
        updated: "Last updated 8/2025",
        PremiumRating:"4.7",
        PremiumRatingCount:"12,176 ratings",
        premiumCount:"76,877",
        couponPrize:"₹3,999",
        learnContent: [
            {head:"Make Great Projects Using React"}
        ],    
        exploreTopic: [
            {head:"React JS"},
            {head:"Other IT & Software"},
            {head:"IT & Software"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"108.5 hours on-demand video", src:tvPlay},
            {head:"36 articles", src:notesNew},
            {head:"2 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Introduction"},
            {head:"Dev Enviroment"},
            {head:"React Fundamentals"},
            {head:"Backroads Application"},
            {head:"VITE"},
            {head:"React Hooks and Advanced Topics"},
            {head:"Fundamental Projects(With Step)"},
            {head:"Axios HTTP Library"},
            {head:"React Query"},
            {head:"Unsplash Imaged Projects(with React Query)"}
        ],     
        requirementItems: [
            {head:"Strong Knowledge of HTML, CSS, JS is Required , ES6 is optional"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Major course UPDATE - JUNE 2024 !!!",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Janis Smilga",
                role:"Instructor",
                instructorList: [
                    {src:blackShadedStar, head:"4.7 Instructor Rating"},
                    {src:grade, head:"33,072 Reviews"},
                    {src:user, head:"165,447 Students"},
                    {src:blackPlay, head:"15 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/38711620_f4c5_3.jpg",
                about: [
                    "Hi, I'm Janis Smilga I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }
        ],  
        commentItems: [
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"",
                ProvideItem: [
                    {head:"Mastering NextJS 14 & OpenAI",discriptionAuthor:"Janis Smilga",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/5665916_d978.jpg"},
                    {head:"MERN 2025 Edition - MongoDB, Express,...",discriptionAuthor:"Janis Smilga", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/4406786_4821_2.jpg"},
                    {head:"NodeJS Tutorial and Projects Course",discriptionAuthor:"Janis Smilga", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/3830262_2c3b_3.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:7,
        src:"https://img-c.udemycdn.com/course/750x422/5512768_ffa4_29.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/5512768_ffa4_29.jpg",
        mainHead:"The Ultimate React Course 2025: Build Real-world Apps",
        subHead:"Learn modern React from scratch by building production-ready apps with Hooks, JWT Auth, React Query & Deployment",
        firstCreator:"Code Bless You",
        updated: "Last updated 8/2025",
        PremiumRating:"4.6",
        PremiumRatingCount:"1,127 ratings",
        premiumCount:"9,281",
        couponPrize:"₹799",
        learnContent: [
            {head:"Build and deploy 3 real-world projects(Task Apps, Movie App & React Router"},
            {head:"Navigate pages smoothly with React Router"},
            {head:"Master React Hooks - useState, useEffect, useContext & more"},
            {head:"Optimize apps with advanced hooks like useMemo & useCallback"},
            {head:"Strengthen your JavaScript foundation(map, filter, spread, promises, modules"},
            {head:`Call APIs, handle errors & add loader for real-world apps`},
            {head:"Write cleaner, reusable components with props & state"},
            {head:"Boost performance with React Query & caching strategies"},
            {head:"Manage forms, inputs & validation like a pro"}
        ],    
        exploreTopic: [
            {head:"React JS"},
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"35 hours on-demand video", src:tvPlay},
            {head:"10 articles", src:notesNew},
            {head:"3 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Introduction of React JS"},
            {head:"JavaScript Refresher "},
            {head:"React Basics Concepts"},
            {head:"Project 01- Building TaskTrek Application"},
            {head:"Project 01- Adding Functionality in Project"},
            {head:"Project 02- Building NEW Movie Listing Applicaiton"},
            {head:"Project 02- Filter, Sort & Dark Mode Functionality"},
            {head:"React Router for Single & Multiple Pages"},
            {head:"Calling APIs - Handling Error & Loading"},
            {head:"Project 03- Advanced e-Commerce Project"}
        ],     
        requirementItems: [
            {head:"Begginer who want to learn React step by step"},
            {head:"Developers who know JavaScript and want to build real-world projects"},
            {head:"Anyone preparing for jobs or interviews with React skills"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Code Bless You",
                role:"Passionate Software Engineer",
                instructorList: [
                    {src:blackShadedStar, head:"4.5 Instructor Rating"},
                    {src:grade, head:"4,349 Reviews"},
                    {src:user, head:"42,602 Students"},
                    {src:blackPlay, head:"5 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/183495132_535a_4.jpg",
                about: [
                    "Hi, I'm Code Bless you I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }
        ],  
        commentItems: [
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Code Bless You",
                ProvideItem: [
                    {head:"The Ultimate Redux Course 2025 -[LATEST...",discriptionAuthor:"Code Bless  You",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/4965902_1592_9.jpg"},
                    {head:"Tailwind CSS : Beginner to Advanced 2023",discriptionAuthor:"Code Bless  You", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/4491052_f7d5_7.jpg"},
                    {head:"Git & Github from Beginning to Advanced",discriptionAuthor:"Code Bless  You", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/6038500_d0da_17.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:8,
        src:"https://img-c.udemycdn.com/course/750x422/6012556_1e60.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/6012556_1e60.jpg",
        mainHead:"React Crash Course: From Zero to Hero",
        subHead:"React JS for Beginners: Build 3 React Projects, Learn React Components JSX, State, React Hooks, Forms, API calls",
        firstCreator:"Anton Voroniuk",
        secondCreator:"Dmytro Vasylev",
        updated: "Last updated 7/2025",
        PremiumRating:"4.4",
        PremiumRatingCount:"1,452 ratings",
        premiumCount:"48,295",
        couponPrize:"₹399",
        learnContent: [
            {head:"The core knowledge of React(JSX, Virtual Dom, Components, Props, Events, State, Effects, Hooks etc)"},
            {head:"Creatoion a React application, Project file stucture, Organzing components using best Practices"},
            {head:"From submission and validation(using React-Hook-Form and Yup libraries), handling form error messages."},
            {head:"Connecting ChatGPT, Gemmini, DeepSeek, Claude, and Grok APIs to build an interactive AI chatbot for real-time conversations"},
            {head:"Effective team collabaration, task estimation, productivity, Problem solving, code review, developers salaries."},
            {head:`Setting up a development environment with essential tools(Browser, Code Editor, Node.js, npm)`},
            {head:"Styling React components, props and cons of popular approaches(inline Styles, CSS Files, CSS Modules, etc."},
            {head:"Making API calls (using fetch and Axios library), HTTP method (GET, POST, PUT, DELETE), errors handling"},
            {head:"Set up Github Copilot and Cursor AI, explore powerful features like Code Completions, Chat Context, Agent Mode, and more"}
        ],    
        exploreTopic: [
            {head:"React JS"},
            {head:"Redux Framework"},
            {head:"React Router"},
            {head:"Web Development"},
            {head:"Firebase"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"35 hours on-demand video", src:tvPlay},
            {head:"5 articles", src:notesNew},
            {head:"2 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
        ],  
        javascriptHead: [
            {head:"Intoduction to the Course"},
            {head:"BASIC: Getting Started"},
            {head:"BASIC: Creating Component"},
            {head:"BASIC: Adding Interactivity"},
            {head:"BASIC: Styling in React"},
            {head:"BASIC: Managing State"},
            {head:"BASIC: Managing Complex State"},
            {head:"FORMS & API: Working with Form Controls"},
            {head:"FORMS & API: Displaying To-Do-List"},
            {head:"FORMS & API: Advancing To-Do List Functionality"}
        ],     
        requirementItems: [
            {head:"No React experience necessary! I take you from beginner to expert!"},
            {head:"Basic understanding of JavaScript is required (this course contains a quick JavaScript review section)"},
            {head:"Any computer and OS will work - Windows, macOs or Linux"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Anton Voroniuk",
                role:"GenAI Expert, trusted by 900,000+ Students",
                instructorList: [
                    {src:blackShadedStar, head:"4.4 Instructor Rating"},
                    {src:grade, head:"43,446 Reviews"},
                    {src:user, head:"984,505 Students"},
                    {src:blackPlay, head:"123 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/10978442_cf0f_16.jpg",
                about: [
                    "Hi, I'm Anton I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            },
            {
                id:2,
                instructorHead:"Instructors",
                instructorSubHead:"Dmytro Vasyliev",
                role:"Expert in React Development (10+ years of experience)",
                instructorList: [
                    {src:blackShadedStar, head:"4.5 Instructor Rating"},
                    {src:grade, head:"2,082 Reviews"},
                    {src:user, head:"70,559 Students"},
                    {src:blackPlay, head:"7 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/172884989_75a0_12.jpg",
                about: [
                    "Hi, I'm Dmytro Vasyliev I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }        
        ],  
        commentItems: [
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Dmytro Vasyliev",
                ProvideItem: [
                    {head:"React.js AI Chatbot built with ChatGPT, Gemini..",discriptionAuthor:"Anton Voroniuk,Dymtro Vasyliev",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/6309795_1522_5.jpg"},
                    {head:"GitHub Capilot for Beginners: AI Coding...",discriptionAuthor:"Anton Voroniuk,Dymtro Vasyliev", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/6691789_eafc_2.jpg"},
                    {head:"Cursor AI for Beginners: AI Coding Crash Course",discriptionAuthor:"Anton Voroniuk,Dymtro Vasyliev", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/6715099_6b9e.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:9,
        src:"https://img-c.udemycdn.com/course/750x422/6704021_a06b.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/6704021_a06b.jpg",
        mainHead:"Modern React From The Beginnig",
        subHead:"Learn React from the ground up along with modern environement such as React Router v7, TanStack, MERN, etc",
        firstCreator:"Brad Traversy",
        secondCreator:"Will Adams",
        updated: "Last updated 8/2025",
        PremiumRating:"4.8",
        PremiumRatingCount:"22,357 ratings",
        premiumCount:"144,267",
        couponPrize:"₹399",
        learnContent: [
            {head:"Learn The Fundamentals Of React(Components, state, hooks, context API & more)"},
            {head:"React Router v7 - Deckarative & Framework Mode With SSR"},
            {head:"Portfolio Website With Strapi Headless CMS Integration"},
            {head:"Learn hooks like useState, useEffect, useRef, useContext"},
            {head:"Build Projects(Portfolio website notes app, shopping cart UI, idea sharing app & more)"},
            {head:`TanStack Router & TanStack Query For Working With APIs`},
            {head:"Full Stack MERN App With Refresher Tokens For Authenticaion"},
            {head:"Suitable For Beginners & Intermediates"}
        ],    
        exploreTopic: [
            {head:"React JS"},
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"25.5 hours on-demand video", src:tvPlay},
            {head:"1 articles", src:notesNew},
            {head:"18 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Introduction & Getting Started"},
            {head:"React-Related JavaScript Refresher"},
            {head:"React Fundamentals - State, hooks, events, props & more"},
            {head:"Forms, Input & Controlled Components -Noted App Projects"},
            {head:"Components Lifecycle & useEffect Hook"},
            {head:"useRef Hook - Simple Timer Project"},
            {head:"Working With APIs - Crypto Dash Project"},
            {head:"React Router In Declarative Mode - Extend Crypto Dash Project"},
            {head:"Build & Deploy"},
            {head:"Context API- Shopping Cart UI"}
        ],     
        requirementItems: [
            {head:"No React experience necessary! I take you from beginner to expert!"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Brad Traversy",
                role:"Full Stack Web Developer & Instructor at Traversy Media",
                instructorList: [
                    {src:blackShadedStar, head:"4.7 Instructor Rating"},
                    {src:grade, head:"182,017 Reviews"},
                    {src:user, head:"536,104 Students"},
                    {src:blackPlay, head:"26 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/21681922_4513_5.jpg",
                about: [
                    "Hi, I'm Brad Travesy I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            },
            {
                id:2,
                instructorHead:"Instructors",
                instructorSubHead:"Will Adams",
                role:"UK Knife maker/father/brushcrafter/climber/developer",
                instructorList: [
                    {src:blackShadedStar, head:"4.7 Instructor Rating"},
                    {src:grade, head:"262 Reviews"},
                    {src:user, head:"358,157 Students"},
                    {src:blackPlay, head:"1 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/36145292_c65c_3.jpg",
                about: [
                    "Hi, I'm Will Adams I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }       
         ],  
        commentItems: [
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Brad Traversy",
                ProvideItem: [
                    {head:"50 Projects In 50 Days - HTML, CSS & JavaScript",discriptionAuthor:"Brad Travesy, Florin Pop",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/3671332_b86a_4.jpg"},
                    {head:"Tailwind CSS From Scratch | Learn By...",discriptionAuthor:"Brad Travesy", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/4699780_b487_2.jpg"},
                    {head:"Modern JavaScript From The Beginnig 2.0...",discriptionAuthor:"Brad Travesy", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/1463348_52a4_4.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:10,
        src:"https://img-c.udemycdn.com/course/750x422/1411694_0862.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/1411694_0862.jpg",
        mainHead:"The complete React 19 course, incl. Next JS & Express",
        subHead:"Take you coding to the next level with React, Redux, Next JS, Node js, Express and MongoDB",
        firstCreator:"Coding Revolution",
        updated: "Last updated 5/2025",
        PremiumRating:"4.6",
        PremiumRatingCount:"1,677 ratings",
        premiumCount:"9,263",
        couponPrize:"₹479",
        learnContent: [
            {head:"You will learn the whole React WebApp building procedd, from your pc to the server."},
            {head:"How to deploy applications to services like Firebase and Heroku."},
            {head:"Learn what NODE js is and How it works and create your own server"},
            {head:"Work with nosql databases (Firebase, MongoDB and Moongoose)"},
            {head:"Learn how Redux work and apply it on a real life application."},
            {head:`Learn the basics of Webpack`},
        ],    
        exploreTopic: [
            {head:"React JS"},
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"66.5 hours on-demand video", src:tvPlay},
            {head:"2 articles", src:notesNew},
            {head:"22 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Introduciton "},
            {head:"React Basics"},
            {head:"React Hooks"},
            {head:"Practice Projects One - Who pays the bill ?"},
            {head:"React Router"},
            {head:"React transitions"},
            {head:"React Forms"},
            {head:"React complex state"},
            {head:"Practice Project Two - Daily News"},
            {head:"Next JS Basics"}
        ],     
        requirementItems: [
            {head:"Knowing a little bit of HTML, CSS and Javascript, everything else you will learn it as we go."},
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Coding Revolution",
                role:"Professional Instructor and Web Developer",
                instructorList: [
                    {src:blackShadedStar, head:"4.5 Instructor Rating"},
                    {src:grade, head:"8,367 Reviews"},
                    {src:user, head:"82,024 Students"},
                    {src:blackPlay, head:"23 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/33236808_79b3_2.jpg",
                about: [
                    "Hi, I'm Coding Revolution I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }
        ],  
        commentItems: [
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Coding Revolution",
                ProvideItem: [
                    {head:"The complete Angular Course, Typescript...",discriptionAuthor:"Coding Revolution",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/2563014_c9a8_2.jpg"},
                    {head:"The complete VUE JS course",discriptionAuthor:"Coding Revolution", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/1945304_07e6.jpg"},
                    {head:"The essential guide to Firebase with React.",discriptionAuthor:"Coding Revolution", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/3164370_fe0e.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:11,
        src:"https://img-c.udemycdn.com/course/750x422/3873464_403c_3.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/3873464_403c_3.jpg",
        mainHead:"Next.js 15 & React - The Complete Guide",
        subHead:"Learn NextJS 15 from the ground up and build fullstack ReactJS + NextJS apps with the App Router or Pages Router!",
        firstCreator:"Maximilian Schwarzmuiler",
        updated: "Last updated 1/2025",
        PremiumRating:"4.7",
        PremiumRatingCount:"23,534 ratings",
        premiumCount:"148,009",
        couponPrize:"₹549",
        learnContent: [
            {head:"Learn how to build fullstack React apps with NextJS 15 & the App Router"},
            {head:"Learn about different ways of buiding NextJS app - App Router vs Pages Router"},
            {head:"Handle data submissions via Server Actions"},
            {head:"Take the full course or the NextJS Summary module for a quickstart if you have limited time"},
            {head:"Build real projects and apply what you learnerned with hands-on projects and examples"},
            {head:`Get started with React Server Components, Clinet Component data fetching & more!`},
            {head:"Learn all key NextJS features like pre-rendering, SSR, data fetching file-based routing and authentication"},
        ],    
        exploreTopic: [
            {head:"Next JS"},
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"35 hours on-demand video", src:tvPlay},
            {head:"5 articles", src:notesNew},
            {head:"2 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Getting Started"},
            {head:"Optional: React Refresher"},
            {head:"NextJS Essentials (App Router)"},
            {head:"Routing & Page Rendering - Deep Dive"},
            {head:"Data Fetching - Deep Dive"},
            {head:"Mutating Data - Deep Dive"},
            {head:"Understanding & Condiguring Caching"},
            {head:"NextJS APP Optimizations"},
            {head:"User Authentication"},
            {head:"Roundup & Next Steps"}
        ],     
        requirementItems: [
            {head:"Reack knowledge is strongly recommended, but the course also includes a complete React refresher module"},
            {head:"NO prior NextJS knowledge is required"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Maximilian Schwarzmuller",
                role:"AWS certified, Professional Web Developer and Instructor",
                instructorList: [
                    {src:blackShadedStar, head:"4.6 Instructor Rating"},
                    {src:grade, head:"1,242,213 Reviews"},
                    {src:user, head:"3,411,508 Students"},
                    {src:blackPlay, head:"66 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/13952972_e853.jpg",
                about: [
                    "Hi, I'm Maximilian Schwarzmuller I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }
        ],  
        commentItems: [
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Maximililan Schwarzmuller",
                ProvideItem: [
                    {head:"React - The Complete Guide 2025(incl.Next...",discriptionAuthor:"Academind by Maximililan Schwarzmuller",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg"},
                    {head:"Angular - The Complete Guide (2025 Edition)",discriptionAuthor:"Maximililan Schwarzmuller", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/756150_c033_4.jpg"},
                    {head:"Flutter & Dart - The Complete Guide[2025...",discriptionAuthor:"Academind by Maximililan Schwarzmuller", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/1708340_7108_5.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:12,
        src:"https://img-c.udemycdn.com/course/750x422/4840164_5aee_4.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/4840164_5aee_4.jpg",
        mainHead:"React for Beginners - From HTML CSS & JavaScript to React.js",
        subHead:"Complete React Guide including (incl Hooks, React Router, Redux, Styled Components) also Vite and Tailwind CSS",
        firstCreator:"Norbert B.Menyhart",
        updated: "Last updated 7/2025",
        PremiumRating:"4.5",
        PremiumRatingCount:"80 ratings",
        premiumCount:"424",
        couponPrize:"₹399",
        learnContent: [
            {head:"React Fundamentals: learn the basic concepts of React, including components, JSX(JavaScript XML), state, Props, and the component..."},
            {head:"React Router:a library that enables navigation and routing in React applications. Set up routes, handle URL parameteres"},
            {head:"Hooks: React Hooks revolutionized how developers write React components"},
            {head:"Components-based Architechture React is based on a component based architecture, and students will learn how to desing and create"},
            {head:"State Management: React Provides various techniqes for managing applications state."},
            {head:`Forms and User Input: learn how to handle form submission, validation,and user input using react components`}
        ],    
        exploreTopic: [
            {head:"React JS"},
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"18 hours on-demand video", src:tvPlay},
            {head:"4 articles", src:notesNew},
            {head:"15 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Introduction"},
            {head:"React Basics"},
            {head:"Create React App"},
            {head:"How to use Style in React"},
            {head:"React Components and Props"},
            {head:"Projects: E-learning Platform"},
            {head:"React State and useState Hook"},
            {head:"Working with DATA and the React useEffect Hook"},
            {head:"Element Reference with React useRef Hook"},
            {head:"Forms submissions in React"}
        ],     
        requirementItems: [
            {head:"No React experience necessary! I take you from beginner to expert!"},
            {head:"Basic understanding of JavaScript is required (this course contains a quick JavaScript review section)"},
            {head:"Any computer and OS will work - Windows, macOs or Linux"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Nobert B.Menyhart",
                role:"Knowledge is Power Acqire Knowledge by learning",
                instructorList: [
                    {src:blackShadedStar, head:"4.2 Instructor Rating"},
                    {src:grade, head:"519 Reviews"},
                    {src:user, head:"8,495 Students"},
                    {src:blackPlay, head:"13 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/75091288_a44f_3.jpg",
                about: [
                    "Hi, I'm Norbert I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }
        ],  
        commentItems: [
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Nobert B. Menyhart",
                ProvideItem: [
                    {head:"30+ React Projects, Learn React JS",discriptionAuthor:"Nobert B. Menyhart",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/4996252_93c7_5.jpg"},
                    {head:"Advanced CSS & SASS: Framework, Flexbox",discriptionAuthor:"Nobert B. Menyhart", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/2569752_5f4b_7.jpg"},
                    {head:"Web Development HTML CSS & JS a Beginner to Pro",discriptionAuthor:"Nobert B. Menyhart", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/2459100_87b1_6.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:13,
        src:"https://img-c.udemycdn.com/course/750x422/2795746_62d5.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/2795746_62d5.jpg",
        mainHead:"React JS- Complete Guide for Frontend Web Development",
        subHead:"Become an expert React JS Developer. Learn HTML, CSS, JavaScipt, ES6, React JS and jQury",
        firstCreator:"EdYoda for Business",
        secondCreator:"Qaifi Khan",
        updated: "Last updated 5/2025",
        PremiumRating:"4.4",
        PremiumRatingCount:"5,693 ratings",
        premiumCount:"245,981",
        couponPrize:"₹399",
        learnContent: [
            {head:"Learn to create basic web pages using HTML5"},
            {head:"Learn the Javascript language from basic to advanced along with the Next Gen JS - ES6"},
            {head:"Create user -friendly, beatiful, light and fast wesites using React JS"},
            {head:"Learn to style and add animation to bring those basic web paged to life using CSS3"},
            {head:"Learn to create responsive and interactive web pages using Javascipt and jQuery"},
            {head:`Become an expert front end developer using ReactJs`},
        ],    
        exploreTopic: [
            {head:"React JS"},
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"22 hours on-demand video", src:tvPlay},
            {head:"5 articles", src:notesNew},
            {head:"26 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
        ],  
        javascriptHead: [
            {head:"HTML-5 Basics to Advanced"},
            {head:"CSS3 - Basics to Advansced"},
            {head:"jQuery"},
            {head:"Modern Javascript (ES6) For React"},
            {head:"React JS"},
        ],     
        requirementItems: [
            {head:"Should have basic knowledge of operating Computer"},
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Qaifi Khan",
                role:"Learning Enabler",
                instructorList: [
                    {src:blackShadedStar, head:"4.3 Instructor Rating"},
                    {src:grade, head:"27,758 Reviews"},
                    {src:user, head:"767,416 Students"},
                    {src:blackPlay, head:"8 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/47000136_b4e9_2.jpg",
                about: [
                    "Hi, I'm Qaifi Khan I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            },
            {
                id:1,
                instructorSubHead:"Mavludin Abdulkadirov",
                role:"Learning Enabler",
                instructorList: [
                    {src:blackShadedStar, head:"4.2 Instructor Rating"},
                    {src:grade, head:"9,764 Reviews"},
                    {src:user, head:"388,329 Students"},
                    {src:blackPlay, head:"2 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/56962440_e69e.jpg",
                about: [
                    "Hi, I'm Mavludin Abdulkadirov I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }        
        ],  
        commentItems: [
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"EdYoda for Business",
                ProvideItem: [
                    {head:"The Complete ReactJs Course - Basics to pro",discriptionAuthor:"EdYoda for Business, Qalifi Khan",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/3033196_e7f4_3.jpg"},
                    {head:"Master JavaScipt from Basics to Advanced",discriptionAuthor:"EdYoda for Business, Qalifi Khan", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/3033186_ea5d_3.jpg"},
                    {head:"Machine Learning - From Basics to Advanced",discriptionAuthor:"EdYoda for Business, Awantik Das", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/2932030_7329_4.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:14,
        src:"https://img-c.udemycdn.com/course/750x422/6614593_63ed.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/6614593_63ed.jpg",
        mainHead:"React JS - A Deep Dive",
        subHead:"Learn React JS from Scratch No Prior Experience Required, Explained in a Very Simple, Extra Clear and Practical Manner.",
        firstCreator:"Remesh B",
        updated: "Last updated 6/2025",
        PremiumRating:"4.5",
        PremiumRatingCount:"94 ratings",
        premiumCount:"1,882",
        couponPrize:"₹399",
        learnContent: [
            {head:"This course start from scratch from installation to real-time coding. Each concept is taught practically with a supporting program "},
            {head:"Each concept includes theory practical, quizzes, and separate study material. Content is in simple Indian English, easy for students"},
            {head:"Cover 22 topics with 320+ concepts, 500+ quiz questions, 3 CRUD apps, and one detailed project. All source code."},
            {head:"Concepts are broken into small parts and explained in short, clear videos, Perfect for self-paced learning with complete support materieals."},
        ],    
        exploreTopic: [
            {head:"React JS"},
            {head:"IT Certifications"},
            {head:"IT & Software"},
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"20 hours on-demand video", src:tvPlay},
            {head:"5 articles", src:notesNew},
            {head:"27 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Setup"},
            {head:"Understanding the project content"},
            {head:"Essential concept of JavaScript - part1:"},
            {head:"Implementing JavaScript code and CSS in the App component"},
            {head:"Component creation and usage"},
            {head:"Essential React Hooks"},
            {head:"Form Fields"},
            {head:"Essential concepts of JavaScript - part2"},
            {head:"Complex form fields"},
            {head:"Form validations"}
        ],     
        requirementItems: [
            {head:"No React experience necessary! I take you from beginner to expert!"},
            {head:"Basic understanding of JavaScript is required (this course contains a quick JavaScript review section)"},
            {head:"Any computer and OS will work - Windows, macOs or Linux"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Ramesh B",
                role:"Java Mentor with 27+ Year of IT & Training Expertise",
                instructorList: [
                    {src:blackShadedStar, head:"4.5 Instructor Rating"},
                    {src:grade, head:"94 Reviews"},
                    {src:user, head:"1,882 Students"},
                    {src:blackPlay, head:"1 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/103271695_e604.jpg",
                about: [
                    "Hi, I'm Ramesh I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }
        ],  
        commentItems: [
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Ramesh",
                ProvideItem: [
                    {head:"The Complete ReactJs Course - Basics to pro",discriptionAuthor:"Ramesh",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/4996252_93c7_5.jpg"},
                    {head:"Master JavaScipt from Basics to Advanced",discriptionAuthor:"Ramesh", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/2569752_5f4b_7.jpg"},
                    {head:"Machine Learning - From Basics to Advanced",discriptionAuthor:"Ramesh", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/2459100_87b1_6.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:15,
        src:"https://img-c.udemycdn.com/course/750x422/3678212_d3fa_2.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/3678212_d3fa_2.jpg",
        mainHead:"Complete React Ultimate Guide | eCommerce | Func Comp &Redux",
        subHead:"Functional Components | eCommerce | React Projects | JavaScript | React for Busy Developer | Router | Redux Toolkit",
        firstCreator:"Web Academy by Harsha Vardhan",
        updated: "Last updated 7/2025",
        PremiumRating:"4.3",
        PremiumRatingCount:"740 ratings",
        premiumCount:"5,441",
        couponPrize:"₹479",
        learnContent: [
            {head:"Confidently speak about most of the essential concepts of React"},
            {head:"Learn React by doing a eCommere app"},
            {head:"Props and State "},
            {head:"ES6 Classes"},
            {head:"Forms Development in React"},
            {head:`CRUD Operatons in React with HTTP Rest API calls`},
            {head:"Create professional web app using React"},
            {head:"React Hooks"},
            {head:"HTTP Rest API calls using Fetch API"}
        ],    
        exploreTopic: [
            {head:"React JS"},
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"39 hours on-demand video", src:tvPlay},
            {head:"10 articles", src:notesNew},
            {head:"202 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Introduction & Basics"},
            {head:"Your First React App"},
            {head:"Render Your Data"},
            {head:"Parent-Child Component Communication"},
            {head:"Life Cylce component Communication"},
            {head:"Life Cycle Methods"},
            {head:"Forms"},
            {head:"REST-APi Calls"},
            {head:"Routing"},
            {head:"CRUD"}
        ],     
        requirementItems: [
            {head:"JavaScript -Don't worry, the most importent topics of JavaScript(Functions and Objects)"},
            {head:"HTML, CSS"},
            {head:"Bootstrap"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Web Academy by Harsha Vardhan",
                role:"MS Certified | 1.5M+ Happy Students",
                instructorList: [
                    {src:blackShadedStar, head:"4.6 Instructor Rating"},
                    {src:grade, head:"25,168 Reviews"},
                    {src:user, head:"162,223 Students"},
                    {src:blackPlay, head:"12 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/41532630_f626_4.jpg",
                about: [
                    "Hi, I'm Harsha Vardhan I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }
        ],  
        commentItems: [
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Web Academy by Harsha Vardhan",
                ProvideItem: [
                    {head:"Asp.Ner Core 10(.NET 10) | True Ultimate Guide",discriptionAuthor:"Web Academy by Harsha Vardhan",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/4931546_c247.jpg"},
                    {head:"C#12 - Ultimate Guide Beginner to Advanced",discriptionAuthor:"Web Academy by Harsha Vardhan", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/3237889_1bcc_2.jpg"},
                    {head:"Web Development | HTML | CSS | JavaScript",discriptionAuthor:"Web Academy by Harsha Vardhan", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/1586922_ab84_2.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:16,
        src:"https://img-c.udemycdn.com/course/750x422/6062215_fbcf.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/6062215_fbcf.jpg",
        mainHead:"React JS Bootcamp 2025: Build 1 Projects and Get Job-Ready",
        subHead:"Master Advanced React Concepts, Diverse Project Builds, Clear Code Architecture and Industry-Standard React JS Project.",
        firstCreator:"Vapa Academy",
        updated: "Last updated 7/2025",
        PremiumRating:"4.6",
        PremiumRatingCount:"39 ratings",
        premiumCount:"6,979",
        couponPrize:"₹399",
        learnContent: [
            {head:"How to Build Real-World React JS Web Apps"},
            {head:"React JS: Basic to Advanced Topic"},
            {head:"How to Get API Responses and Build a Complete React App"},
            {head:"How to Deploy a React Project to a Cloud Server"},
            {head:"Advanced Features of React JS"},
            {head:`How to Build a Responsive React JS App`},
            {head:"How to Play Videos in a React JS App"},
            {head:"How To Handle React JS Routing"},
        ],    
        exploreTopic: [
            {head:"React JS"},
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"9.5 hours on-demand video", src:tvPlay},
            {head:"2 articles", src:notesNew},
            {head:"2 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
        ],  
        javascriptHead: [
            {head:"Introduction "},
            {head:"Module 1 Introduction to React"},
            {head:"Module 2 React Fundamentals"},
            {head:"Module 3 React Hooks"},
            {head:"Module 4 Component Communication"},
            {head:"Module 5 Routing in React "},
            {head:"Module 6 State Persistence and Data Storage"},
            {head:"Module 7 Advanced Topic and Best Practices"},
            {head:"Movie Web App : Projec-1"},
        ],     
        requirementItems: [
            {head:"Studennts don't need to have prior skills to take this course. They will learn everything from this course."},
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Vapa Academy",
                role:"A learning Platform",
                instructorList: [
                    {src:blackShadedStar, head:"4.3 Instructor Rating"},
                    {src:grade, head:"1,264 Reviews"},
                    {src:user, head:"78,058 Students"},
                    {src:blackPlay, head:"21 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/258620202_02e3_12.jpg",
                about: [
                    "Hi, I'm Vapa Academy I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }
        ],  
        commentItems: [
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Vapa Academy",
                ProvideItem: [
                    {head:"React Native Bootcamp 2025: Build 2 Job",discriptionAuthor:"Vapa Academy",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/6121503_3400.jpg"},
                    {head:"React JS Bootcamp",discriptionAuthor:"Vapa Academy", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/6198115_2213_2.jpg"},
                    {head:"Playwright Automation Testing Complete course",discriptionAuthor:"Vapa Academy", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/6135155_a2bd_2.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:17,
        src:"https://img-c.udemycdn.com/course/750x422/947098_02ec_2.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/947098_02ec_2.jpg",
        mainHead:"Understanding TypeScript",
        subHead:"Boost your JavaScript projects with TypeScript: Learn all about core types, generics, Typrscript + React or Node & more!",
        firstCreator:"Maximillian Schwarzmuller",
        updated: "Last updated 4/2025",
        PremiumRating:"4.7",
        PremiumRatingCount:"56,229 ratings",
        premiumCount:"273,476",
        couponPrize:"₹549",
        learnContent: [
            {head:"Use TypeScript and its Features like Types, ES6 Support, Classed, Modules, Interfaces and much more in any of their Projects"},
            {head:"Why TypeScript offers a real advantage over vannilla JavaScript"},
            {head:"Explore Classes, Interfaces, Generic Types, Derived Types & Other Crucial Concepts"},
            {head:"Learn how to combine TypeScript with ReactJS or NodeJS / Express"},
            {head:"Understand what TypeScript really is about and how it works"},
            {head:`Learn about basics and advanced features(e.g "infer" as cosnt", "satisfies" & much more!)`},
            {head:"Learn TypeScript both in theory as well as applied to real use-case and projects"},
            {head:""},
            {head:""}
        ],    
        exploreTopic: [
            {head:"TypeScript"},
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"22.5 hours on-demand video", src:tvPlay},
            {head:"36 articles", src:notesNew},
            {head:"163 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Getting Started "},
            {head:"TypeScript Basics & Basic Types"},
            {head:"The TypeScript Compiler(and its Configaration)"},
            {head:"TypeScript Essentials Demo Project"},
            {head:"Next-genaration JavaScript & TypeScript"},
            {head:"Classes & Interfaces"},
            {head:"Advanced Types"},
            {head:"Generic Types"},
            {head:"Classes & Generic - Demo Project"},
            {head:"Deriving Types From Types"}
        ],     
        requirementItems: [
            {head:"JavaScript knoledge is required, though you don't need to be an Expert"},
            {head:"NO prior TypeScript experience is required"},
            {head:"ES6 Knowledge is plus but not required"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Maximilian Schwarzmuller",
                role:"AWS certified, Professional Web Developer and Instructor",
                instructorList: [
                    {src:blackShadedStar, head:"4.6 Instructor Rating"},
                    {src:grade, head:"1,242,213 Reviews"},
                    {src:user, head:"3,411,630 Students"},
                    {src:blackPlay, head:"68 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/13952972_e853.jpg",
                about: [
                    "Hi, I'm Maximilian Schwarzmuller I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }
        ],  
        commentItems: [
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Maximilian Schwarzmuller",
                ProvideItem: [
                    {head:"React - The Complete Guide 2025(incl.Next...",discriptionAuthor:"Maximilian Schwarzmuller",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg"},
                    {head:"Angular - The Complete Guide(2025 Edition)",discriptionAuthor:"Maximilian Schwarzmuller", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/756150_c033_4.jpg"},
                    {head:"Flutter & Dart - The Complete Guide [2025]",discriptionAuthor:"Maximilian Schwarzmuller", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/1708340_7108_5.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:18,
        src:"https://img-c.udemycdn.com/course/750x422/5478186_e752_3.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/5478186_e752_3.jpg",
        mainHead:"React Js 2025 Build Multi-Vendor Ecommerce Start to Finish",
        subHead:"Build Full Stack Multivendor Ecommerce Applications Project with React.js, Redux, Hooks, Node.js, Express.js and MongoDB",
        firstCreator:"Kazi Ariyan, easy Learning",
        updated: "Last updated 5/2025",
        PremiumRating:"4.7",
        PremiumRatingCount:"421 ratings",
        premiumCount:"3,431",
        couponPrize:"₹399",
        learnContent: [
            {head:"Build Complete Multi-Vendor Ecommerce Project"},
            {head:"Express js Fundamental"},
            {head:"Lean how to implement React Hooks, Async/Await, React Router 6, Axios"},
            {head:"Design Total Application with Tailwind CSS From Scratch"},
            {head:"Live Chat Option User to Vender and Vendor to User"},
            {head:`React js Fundamental`},
            {head:"Functional Component, Redux"},
            {head:"MongoDB Fundamental"},
            {head:"Use Middleware for Protected Routes"}
        ],    
        exploreTopic: [
            {head:"React JS"},
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"96 hours on-demand video", src:tvPlay},
            {head:"4 articles", src:notesNew},
            {head:"3 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Intoduction"},
            {head:"React Fundamentals React Structure, JSX component & Rendering"},
            {head:"React Routing"},
            {head:"React Hooks & State Management"},
            {head:"Express JS Fundamental"},
            {head:"MongoDB Fundamental - A NoSQL Database"},
            {head:"Introduction for Multi Vendor Ecommerce Project "},
            {head:"Ecommerce Project setup"},
            {head:"Create Route And Login Register Setup"},
            {head:"Login Register Page State Define"}
        ],     
        requirementItems: [
            {head:"Basic Understanding of JavaScript"},
            {head:"Good Grasp of Tailwind CSS"},
            {head:"Basic Command Line Knowledge"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Kazi Ariyan",
                role:"Web Developer, Enterpreneur, Online Instructor",
                instructorList: [
                    {src:blackShadedStar, head:"4.6 Instructor Rating"},
                    {src:grade, head:"10,245 Reviews"},
                    {src:user, head:"74,410 Students"},
                    {src:blackPlay, head:"31 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/15663854_c950_2.jpg",
                about: [
                    "Hi, I'm Kazi Ariyan I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            },
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"easy Learning",
                role:"Learn Professionally",
                instructorList: [
                    {src:blackShadedStar, head:"4.6 Instructor Rating"},
                    {src:grade, head:"8,104 Reviews"},
                    {src:user, head:"36,979 Students"},
                    {src:blackPlay, head:"23 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/75611664_5d1c.jpg",
                about: [
                    "Hi, I'm easy learning I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }        
        ],  
        commentItems: [
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Kazi Ariyan",
                ProvideItem: [
                    {head:"Larvel Build Complete Learning Management",discriptionAuthor:"Kazi Ariyan",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/5478172_ee9e_2.jpg"},
                    {head:"Larval Build Complete Hotel Booking",discriptionAuthor:"Kazi Ariyan", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/4764308_6596_3.jpg"},
                    {head:"Larvel- Build Real Estate Property listing",discriptionAuthor:"Kazi Ariyan", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/5196872_4a6c_2.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:19,
        src:"https://img-c.udemycdn.com/course/750x422/6438443_67a5_4.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/6438443_67a5_4.jpg",
        mainHead:"ReactJS Bootcamp - With Redux (NextJS + Firebase)[New]",
        subHead:"Master Fullstack Web Development with React.js, NextJS & Firebase! Learn React, Redux, Hooks, Router, and Firestore",
        firstCreator:"Kainaat Fida",
        secondCreator:"Fazilla B",
        updated: "Last updated 3/2025",
        PremiumRating:"4.8",
        PremiumRatingCount:"509 ratings",
        premiumCount:"1,065",
        couponPrize:"₹399",
        learnContent: [
            {head:"Master ReactJS & Redux- Learn how to build modern, scalable, and high-performance web applicaitons using React and state management"},
            {head:"Work with React Hook & Router Understand and use React Hooks for state management and side effects, and implement dynamic routing"},
            {head:"Work with firestore Database- Store, retrieve, and manage real time data using Firestore"},
            {head:"Develop Full Stack Appa - Use NextJS for SSR and Firebase for authentications, Firestore, and hoisting"},
            {head:"Build & Deploy Real-World Projects-Apply your knowledge by building real-wourld applications and deploying then to production"},
            {head:`Optimize Performance - Improve React apps using memorizations, lazy loading and server rendering`},
        ],    
        exploreTopic: [
            {head:"React JS"},
            {head:"Programming Languages"},
            {head:"Development"},
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"8 hours on-demand video", src:tvPlay},
            {head:"5 articles", src:notesNew},
            {head:"2 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Getting Started with React"},
            {head:"React Fundamentals"},
            {head:"Mastering React Hooks"},
            {head:"State Management with Redux"},
            {head:"React Routing Fundamentals"},
            {head:"Forms and User Input"},
            {head:"Mastering APIs, Advanced React concepts, and deployment"},
            {head:"Firebase Firestore Concepts"},
            {head:"Final Capstone Project"},
            {head:"Building Custom React Hooks"}
        ],     
        requirementItems: [
            {head:"Basics JavaScript Knowledge - A fundamental understanding of JavaScript will be helpful."},
            {head:"Familiarity with HTML & CSS - Basic knowledge of HTML and CSS is recommended for styling components. "},
            {head:"Eagerness to Learn & Build Projects - No prior React experience is needed! This course is beginner-friendly and will guide you step by step"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Kainaat Fida",
                role:"100k+ students Experienced Web Developer/Passionate Educator",
                instructorList: [
                    {src:blackShadedStar, head:"4.9 Instructor Rating"},
                    {src:grade, head:"822 Reviews"},
                    {src:user, head:"1,984 Students"},
                    {src:blackPlay, head:"2 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/290719675_c14c_3.jpg",
                about: [
                    "Hi, I'm Fida I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            },
            {
                id:2,
                instructorSubHead:"Fazila B",
                role:"50,000+ Students Learning React, Next.js & Firebase",
                instructorList: [
                    {src:blackShadedStar, head:"4.9 Instructor Rating"},
                    {src:grade, head:"822 Reviews"},
                    {src:user, head:"1,984 Students"},
                    {src:blackPlay, head:"2 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/292445937_53cf.jpg",
                about: [
                    "Hi, I'm Fazila I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }     
           ],  
        commentItems: [
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Fazila B",
                ProvideItem: [
                    {head:"Build Web Apps with Next.js 3",discriptionAuthor:"Fazila B, Kainaat Fida",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/6457785_5adc_2.jpg"},
                    {head:"Python Bootcamp: Learn AI Powered Python",discriptionAuthor:"Fazila B, Kainaat Fida", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/6434893_a7a8_3.jpg"},
                    {head:"React Firebase & TanStack",discriptionAuthor:"Fazila B, Kainaat Fida", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/6430079_6557_4.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:20,
        src:"https://img-c.udemycdn.com/course/750x422/2640372_5b44_5.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/2640372_5b44_5.jpg",
        mainHead:"React, NodeJS, Express & MongoDB - The MERN Fullstack Guide",
        subHead:"Build fullstack React.js applications with Node.js, Express.js & MongoDB(MERN) with this project-focused course.",
        firstCreator:"Academind by Maximillian Schawarzmuller",
        secondCreator:"Manuel Lorenz",
        updated: "Last updated 4/2025",
        PremiumRating:"4.5",
        PremiumRatingCount:"13,857 ratings",
        premiumCount:"84,913",
        couponPrize:"₹459",
        learnContent: [
            {head:"Learn how to connect ReactJS with NodeJS, Express & MongoDB"},
            {head:"Refresh the basics about ReactJS, NodeJS, Express and MongoDB"},
            {head:"Add File Upload to ReactJS + Node/Expresss Applications"},
            {head:"Build an entire project from scarch"},
            {head:"Learn how to implement Authentication & Authorization"},
        ],    
        exploreTopic: [
            {head:"MERN Stack"},
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"18.5 hours on-demand video", src:tvPlay},
            {head:"22 articles", src:notesNew},
            {head:"235 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Introduction"},
            {head:"The MERN Stack - Theory"},
            {head:"Planning the App"},
            {head:"React.js - A Refresher"},
            {head:"React.js - Building the Frontend"},
            {head:"Node.js & Express.js - A Refresher"},
            {head:"Node.js & Express.js - Building our REST API"},
            {head:"Working with MongoDB & Mongoose - A Refresher"},
            {head:"Connecting the Backend to the Database MonogoDB & Mongoose"},
            {head:"Connecting the React.js Frontend to the Backend"}
        ],     
        requirementItems: [
            {head:"Basic knowledge about ReactJS is required"},
            {head:"ReactJS Hooks knowledge is recommended"},
            {head:"Basic knowledge about Node, Express and MongoDB is recommended but not a must have "},
            {head:"NO expert React knowledge or MERN knowledge is required"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Maximilian Schwarzmuller",
                role:"AWS certified, Professional Web Developer and Instructor",
                instructorList: [
                    {src:blackShadedStar, head:"4.6 Instructor Rating"},
                    {src:grade, head:"1,242,383 Reviews"},
                    {src:user, head:"3,411,630 Students"},
                    {src:blackPlay, head:"66 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/13952972_e853.jpg",
                about: [
                    "Hi, I'm Maximilian Schwarzmuller I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            },
            {
                id:2,
                instructorSubHead:"Manuel Lorenz",
                role:"Professional Business Analyst and Instructor",
                instructorList: [
                    {src:blackShadedStar, head:"4.6 Instructor Rating"},
                    {src:grade, head:"155,644 Reviews"},
                    {src:user, head:"1,512,031 Students"},
                    {src:blackPlay, head:"12 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/30035496_b180_2.jpg",
                about: [
                    "Hi, I'm Manuel Lorenz I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }     
           ],  
        commentItems: [
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Maximilian Schwarzmuller",
                ProvideItem: [
                    {head:"React - The Complete Guide 2025(incl.Next)",discriptionAuthor:"Maximilian Schwarzmuller",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg"},
                    {head:"Angular - The Complete Guide(2025 Edition)",discriptionAuthor:"Maximilian Schwarzmuller", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/1708340_7108_5.jpg"},
                    {head:"Flutter & Dart - The Complete Guide[2025]",discriptionAuthor:"Maximilian Schwarzmuller", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/3490000_d298_2.jpg"}
                ],           
            },
            {
                id:1,
                author:"Manuel Lorenz",
                ProvideItem: [
                    {head:"ChatGPT & Generative AI - The Complete Guide",discriptionAuthor:"Maximilian Schwarzmuller,Manuel Lorenz",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/5291332_4a58_7.jpg"},
                    {head:"CSS - The Complete Guide 2025",discriptionAuthor:"Maximilian Schwarzmuller,Manuel Lorenz", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/1561458_7f3b_2.jpg"},
                    {head:"Microsoft Power BI - The Practical Guide 2025",discriptionAuthor:"Maximilian Schwarzmuller,Manuel Lorenz", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/1208634_cd50_2.jpg"}
                ],           
            }     
           ]
    }, 
    {
        id:21,
        src:"https://img-c.udemycdn.com/course/750x422/625204_436a_3.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/625204_436a_3.jpg",
        mainHead:"The Web Developer Bootcamp 2025",
        subHead:"With 10 Hours of React added, Become a Developer With ONE course - HTML, CSS, JavaScript, React, Node, mogoDB and More!",
        firstCreator:"Colt Steele",
        updated: "Last updated 6/2025",
        PremiumRating:"4.6",
        PremiumRatingCount:"282,702 ratings",
        premiumCount:"945,038",
        couponPrize:"₹399",
        learnContent: [
            {head:"The ins and outs of HTML5, CSS3, and Modern JavaScipt"},
            {head:"Create responsive, accessible, and beutiful layouts"},
            {head:"Continue to learn and grow as a developer, long after the course ends"},
            {head:"Create a complicated yelp-like application from scratch"},
            {head:"Make REAL web applications using cutting-edge technologies"},
            {head:`Recognized and prevent common security exploits like SQL-Injection & XSS`},
            {head:"Create a blog application from scratch using Node, Express, and MongoDB"},
            {head:"Deploy your applications and work with cloud database"},
        ],    
        exploreTopic: [
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"73.5 hours on-demand video", src:tvPlay},
            {head:"36 articles", src:notesNew},
            {head:"95 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Course Orientation"},
            {head:"An Introduction to Web Development"},
            {head:"HTML: The Essentials"},
            {head:"HTML: Next Steps & Semantics"},
            {head:"HTML: Forms & Tables"},
            {head:"CSS: The Very Basics"},
            {head:"The World of CSS Selectors"},
            {head:"The CSS Box Model"},
            {head:"Other Assorted Useful CSS Properties"},
            {head:"Respondive CSS & Flexbox"}
        ],     
        requirementItems: [
            {head:"Have a computer with internet"},
            {head:"Be ready to learn an insane amound of awesome stuff"},
            {head:"Prepare to build real web apps!"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Colt Steele",
                role:"Developer and Bootcamp Instuctor",
                instructorList: [
                    {src:blackShadedStar, head:"4.7 Instructor Rating"},
                    {src:grade, head:"577,357 Reviews"},
                    {src:user, head:"1,914,834 Students"},
                    {src:blackPlay, head:"30 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/4466306_6fd8_3.jpg",
                about: [
                    "Hi, I'm Colt Steele I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }
        ],  
        commentItems: [
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Colt Steele",
                ProvideItem: [
                    {head:"The Ultimate MYSQL Bootcamp",discriptionAuthor:"Colt Steele",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/1187016_51b3.jpg"},
                    {head:"The Git & Github Bootcamp",discriptionAuthor:"Colt Steele", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/3792262_6b0c_2.jpg"},
                    {head:"Mastering OpenAI Python APIs",discriptionAuthor:"Colt Steele", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/5239222_f364.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:22,
        src:"https://img-c.udemycdn.com/course/750x422/1436092_2024_4.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/1436092_2024_4.jpg",
        mainHead:"React Native - The Practical Guide [2025]",
        subHead:"Use React Native and your React knowledge to build native iOS and Android Apps - incl.Push Notifications, Hooks, Redux",
        firstCreator:"Academind by Maximilian Schwarzmuller",
        updated: "Last updated 8/2025",
        PremiumRating:"4.6",
        PremiumRatingCount:"44,404 ratings",
        premiumCount:"250,605",
        couponPrize:"₹629",
        learnContent: [
            {head:"Learn how to use ReactJS to build real native mobile apps for iOS and Android"},
            {head:"Explore React Native basics and advanced features!"},
            {head:"Develop cross-platform (iOS and Android) mobile apps without knowing Swift, ObjectiveC or Java/ Android"},
            {head:"Learn how to use key mobile app features like Google maps or the device camera"},
        ],    
        exploreTopic: [
            {head:"React Native "},
            {head:"Mobile Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"28.5 hours on-demand video", src:tvPlay},
            {head:"16 articles", src:notesNew},
            {head:"67 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Getting Started"},
            {head:"React Native Basics [ COURSE GOALS APP]"},
            {head:"Debugging React Native Apps (Intoduction)"},
            {head:"Diving Deeper into Components, Layouts & Styling -Building a Mini-Game App"},
            {head:"Building Adaptive User Interfaces (Adapt to Platform & Device Sizes)"},
            {head:"React Native Navigation with React Navigation [MEALS APP]"},
            {head:"App- wide State Management with Redux & Context API"},
            {head:"Time to Practice - The Expense Tracker App"},
            {head:"Handling User Input"},
            {head:"Sending HTTP Requests"}
        ],     
        requirementItems: [
            {head:"React knowledge is a must (but you absolutely DON'T have to be an expert)"},
            {head:"JavaScript knowledge is a must, next-gen JavaScript knowledge (ie,ES6+) is recommended"},
            {head:"NO Android/ Java or iOS (Swift, ObjectiveC) development experience is required"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Academind by Mazimilian Schwarzmuller",
                role:"Online Education",
                instructorList: [
                    {src:blackShadedStar, head:"4.6 Instructor Rating"},
                    {src:grade, head:"810,191 Reviews"},
                    {src:user, head:"3,369,328 Students"},
                    {src:blackPlay, head:"48 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/31926668_94e7_6.jpg",
                about: [
                    "Hi, I'm Maximilian Schwarzmuller I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }
        ],  
        commentItems: [
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Academind by Maximilian Schawarzmuller",
                ProvideItem: [
                    {head:"React - The Complete Guide 2025",discriptionAuthor:"Academind by Maximilian Schawarzmuller",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/1362070_b9a1_2.jpg"},
                    {head:"Flutter & Dart - The Complete Guide",discriptionAuthor:"Academind by Maximilian Schawarzmuller", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/1708340_7108_5.jpg"},
                    {head:"Docker & Kubernetes: The Practical Guide",discriptionAuthor:"Academind by Maximilian Schawarzmuller", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/3490000_d298_2.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:23,
        src:"https://img-c.udemycdn.com/course/750x422/1565838_e54e_18.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/1565838_e54e_18.jpg",
        mainHead:"The Complete Full-Stack Web Development Bootcamp",
        subHead:"Become a Full-Stack Web Developer with just ONE course. HTML, CSS. Javascript, Node, React, PostgreSQL, Web3 and DApps",
        firstCreator:"Dr.Angela YU, Developer and Lead Instructor",
        updated: "Last updated 2/2025",
        PremiumRating:"4.7",
        PremiumRatingCount:"450,262 ratings",
        premiumCount:"1,491,242",
        couponPrize:"₹399",
        learnContent: [
            {head:"Build 16 web development projects for your portfolio, ready to apply for junior developer jobs."},
            {head:"After the course you will be able to build ANY website you want."},
            {head:"Work as a freelance web developer."},
            {head:"Master backend development with Node"},
            {head:"Learn the latest technologies, including Javascript, React, Node and even Web3 development."},
            {head:`Build fully-fledged websites and web apps for your startup or business`},
            {head:"Master frontend development with React."},
            {head:"Learn professional developer best practices."}
        ],    
        exploreTopic: [
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"61 hours on-demand video", src:tvPlay},
            {head:"66 articles", src:notesNew},
            {head:"194 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
            {welcome:{tittle:"Section Overview",duration:"8:12"},react:{tittle:`Introduction to Part 2`,duration:"1:02"},vannilla:{tittle:"Useful Resources for Part 2",duration:"7:45"}},
            {welcome:{tittle:"Handling Hover Events",duration:"5:10"}, react:{tittle:"How to Split a UI Into Components",duration:"8:31"},vannilla:{tittle:"Splitting Components in Practice",duration:"4:37"},editing:{tittle:"Component Categories",duration:"10:10"}, about:{tittle:"Prop Drilling",duraiton:"4:10"}}
        ],  
        javascriptHead: [
            {head:"Front-End Web Development"},
            {head:"Introduction to HTML"},
            {head:"Intermediate HTML"},
            {head:"Multi-Page Websites"},
            {head:"Introduction to CSS"},
            {head:"CSS Propertise"},
            {head:"Intermidiate CSS"},
            {head:"Advanced CSS"},
            {head:"Flexbox"},
            {head:"Grid"}
        ],     
        requirementItems: [
            {head:"No programming experience needed - I'll teach you everything you need to know"},
            {head:"A computer with access to the internet"},
            {head:"No paid software required"},
            {head:"I'll walk you through step by step how to get all the software  installed and set up"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Dr.Angela Yu, Developer and Lead Instructor",
                role:"Developer and Lead Instructor",
                instructorList: [
                    {src:blackShadedStar, head:"4.7 Instructor Rating"},
                    {src:grade, head:"996,638 Reviews"},
                    {src:user, head:"3,256,823 Students"},
                    {src:blackPlay, head:"7 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/31334738_a13c_3.jpg",
                about: [
                    "Hi, I'm Angela, I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }
        ],  
        commentItems: [
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Angela!"},
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Angela for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Dr.Angela Yu, Developer and Lead Instructor",
                ProvideItem: [
                    {head:"100 Days of Code: The Complete Python Pro",discriptionAuthor:"Dr.Angela Yu, Developer and Lead Instructor",rating:"4.7",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg"},
                    {head:"IOS & Swift- The Complete iOS App",discriptionAuthor:"Dr.Angela Yu, Developer and Lead Instructor", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/1778502_f4b9_12.jpg"},
                    {head:"The Complete Flutter Development Bootcamp",discriptionAuthor:"Dr.Angela Yu, Developer and Lead Instructor", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/2259120_305f_6.jpg"}
                ],           
            }
        ]
    }, 
    {
        id:24,
        src:"https://img-c.udemycdn.com/course/750x422/6078765_05a8_5.jpg",
        desktopSrc:"https://img-c.udemycdn.com/course/240x135/6078765_05a8_5.jpg",
        mainHead:"React JS: Build 6 Real-world React Apps with AI Integration",
        subHead:"React Masterclass, Build 6 Real World React Projects, Integrate ChatGPT into your App using ChatGPT API",
        firstCreator:"Code And Create",
        secondCreator:"George Lomidze",
        updated: "Last updated 3/2025",
        PremiumRating:"4.4",
        PremiumRatingCount:"132 ratings",
        premiumCount:"1,398",
        couponPrize:"₹409",
        learnContent: [
            {head:"Build six functional, real-world React applications from scratch."},
            {head:"Integrate APIs and handle asynchronous operations in React."},
            {head:"Manage application data using local storage for a seamless user experience."},
            {head:"Understand core React concepts including components, state, and props."},
            {head:"Design responsive UIs that work seamlessly across devices"}
        ],    
        exploreTopic: [
            {head:"React JS"},
            {head:"Web Development"},
            {head:"Development"}
        ],
        includedItems: [
            {head:"Role Play", src:user},
            {head:"14 hours on-demand video", src:tvPlay},
            {head:"5 articles", src:notesNew},
            {head:"7 downloadable resources", src:downloads},
            {head:"Access on mobile and TV", src:mobile},
            {head:"Certificate of completion", src:prize}
        ],
        javascriptItems: [
            {welcome:{tittle:"Course Intoduction",duration:"01:07"}, react:{tittle:"Welcome To Course",duration:"02:58"},vannilla:{tittle:`Resources [Importent]`,duration:"10:02"},editing:{tittle:"Resources [Importen]",duration:"3:06"},about:{tittle:"Read Before You Start!",duration:"5:10"}},
            {welcome:{tittle:"Section Overview",duration:"8:02"},react:{tittle:"Introduction to Part 1",duration:"6:09"},vannilla:{tittle:"Useful Resources for Part 1",duration:"1:48"}},
            {welcome:{tittle:"Section Overview",duration:"9:47"}, react:{tittle:"Section Overview",duration:"6:23"},vannilla:{tittle:"Why Do Front-End Frameworks Exist?",duration:"2:28"},editing:{tittle:"React vs Vanilla JavaScript",duration:"5:40"},about:{tittle:"What is React?",duration:"10:58"}},
            {welcome:{tittle:"The Array map Method",duration:"4:10"},react:{tittle:"Section Overview",duration:"7:29"},vannilla:{tittle:"Destructuring Obects and Arrays",duration:"8:54"},editing:{tittle:"Rest/Spread Operator",duration:"7:29"},about:{tittle:"Template Literals",duration:"1:02"}},
            {welcome:{tittle:"Rendering Lists",duration:"3:47"},react:{tittle:"Rendering the Root Component and Srict Mode",duration:"5:14"},vannilla:{tittle:"Before We Start Coding Debugging",duration:"3:12"},editing:{tittle:"Before We Start Coding: Debugging",duration:"1:34"},about:{tittle:"Components as Building Blocks",duration:"5:10"}},
            {welcome:{tittle:"React Developer Tools",duration:"1:06"},react:{tittle:"Let's Build a Steps Component",duration:"6:10"},vannilla:{tittle:"Handling Events the React Way",duration:"4:10"},editing:{tittle:"What is State in React?",duration:"1:20"},about:{tittle:"Creating a State Variable With useState",duration:"7:10"}},
            {welcome:{tittle:"Creating the List",duration:"8:34"},react:{tittle:"Fundamentals of State Mangement",duration:"5:37"},vannilla:{tittle:"Thinking About State and Lifting State Up",duration:"5:23"},editing:{tittle:"Deleting an item: More Child-to-Parent- Communication",duration:"5:12"},about:{tittle:`Reviewing "Lifting Up State"`,duration:"4:32"}},
            {welcome:{tittle:"Creating Controlled Elements",duration:"1:03"},react:{tittle:"Project Setup",duration:"4:29"},vannilla:{tittle:"Building the Static App List of Friends",duration:"9:12"},editing:{tittle:"Building the Static App: Forms",duration:"8:03"},about:{tittle:"Displaying the New Friend Form",duration:"7:14"}},
        ],  
        javascriptHead: [
            {head:"Welcome"},
            {head:"React Crash Course"},
            {head:"Project - AI Chat Bot"},
            {head:"Project - Live Weather App"},
            {head:"Project - Quote Generator App"},
            {head:"Project - Calendar"},
            {head:"Project - News App"},
            {head:"Project - Translator App"},
        ],     
        requirementItems: [
            {head:"Modern Web Browser"},
            {head:"Code Editor"},
            {head:"Basic understanding of HTML, CSS, and JavaScript"},
            {head:"Basic understanding of React will be beneficial but is not manadatory"}
        ],
        courseInclude: [
            {head:"You just finished learning JavaScipt and are looking for your next step!"},
            {head:"You want to truly master React development including common libraries need to build real-world apps: React Router, Redux, React Query, Next.js, and many others"},
            {head:"You have been learning React, but still don't understand React or still don't feel confident to build professional React apps"},
            {head:"You have been building React apps, but are still missing the advanced stuff: useReducer, performance optimization, how React actually works advanced design patterns etc."}
        ],
        coursePara: [
            'In 2024 React is still the #1 skill to learn if you want to become a successful front-end developer!',
            "Why is this the right React course for you?",
            "But it can be hard. There are so many moving parts, so many different libraries, so many tutorials out there.",
            "That's why you came here...And you came to the right place! This is THE ultimate React course for 2024 and beyond.",
            "As you expect, this course is 100% project-based So throughout the course, you'll start building your portfolio of 10+ beautiful and high-quality React-apps, where each one will showcase a few of the new skills  you will be learning",
            "Why am I the right React teacher for you?",
            "My name is Jonas. I'm an experienced web developer and designer, and one of Udemy's top Instructors. I've been teaching web development course since 2015 to over 1,900,000 developers, so I kone exaclty how students learn and what is needed to master any subject",
            "With this in mind, I disigned the ideal curriculum for this course a unique blend of real world projects, deep explanations, and theory lectures, to turn you into a confident React and Next.js developer in just a couple weeks."
        ],
        broughtItems: [
            {head:"Next.js 15 & React - The Complete Guide",seller:"Bestseller",hour:"40.5 total hours", update:"Updated 1/2025",rating:"4.7",people:"147,673",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/3873464_403c_3.jpg"},
            {head:"Next.js Ecommerce 2025- Shopping Platform From...",seller:"Premium",hour:"22.5 total hours",update:"Updated 2/2025",rating:"4.7",people:"7,182",price:"₹3,009",src:"https://img-c.udemycdn.com/course/50x50/6347145_b715.jpg"},
            {head:"100 Hours Web Development Bootcamp - Build 23 React...",seller:"Premium",hour:"128.5 total hours",update:"Updated 7/2025",rating:"4.7",people:"6,854",price:"₹799",src:"https://img-c.udemycdn.com/course/50x50/6375895_c850_2.jpg"},
            {head:"The Complete Full-Stack Web Develompment Bootcamp",seller:"Bestseller",hour:"61.5 total hours",update:"2/2025",rating:"4.7",people:"1,488,556",price:"₹3,089",src:"https://img-c.udemycdn.com/course/100x100/1565838_e54e_18.jpg"},
            {head:"React- The Complete Guide 2025(incl.Next.js, Redux)",seller:"Bestseller",hour:"71.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"980,275",price:"₹3,779",src:"https://img-c.udemycdn.com/course/50x50/1362070_b9a1_2.jpg"},
            {head:"React JS Masterclass: Zero To Job Ready With 10 Projects",seller:"Bestseller",hour:"35 total hours",update:"Updated 7/2025",rating:"4.4",people:"13,303",price:"₹3,889",src:"https://img-c.udemycdn.com/course/50x50/5042208_7db9_3.jpg"},
            {head:"Complete React, Next.js & TypeScipt Projects Course...",seller:"Bestseller",hour:"109 total hours",update:"Updated 8/2025",rating:"4.7",people:"76,789",price:"₹3,999",src:"https://img-c.udemycdn.com/course/50x50/2018828_41a9_3.jpg"},
            {head:"React Native - The Practical Guide [2025]",seller:"Bestseller",hour:"28.5 total hours",update:"Updated 8/2025",rating:"4.6",people:"250,425",price:"₹4,469",src:"https://img-c.udemycdn.com/course/100x100/1436092_2024_4.jpg"},
        ],         
        profile: [
            {
                id:1,
                instructorHead:"Instructors",
                instructorSubHead:"Code And Create",
                role:"Web Development / Web Design",
                instructorList: [
                    {src:blackShadedStar, head:"4.5 Instructor Rating"},
                    {src:grade, head:"10,054 Reviews"},
                    {src:user, head:"76,357 Students"},
                    {src:blackPlay, head:"21 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/29894208_f87c_6.jpg",
                about: [
                    "Hi, I'm Code And Create I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            },
            {
                id:2,
                instructorHead:"Instructors",
                instructorSubHead:"George Lomidze",
                role:"Web Developer / Designer / Co-Founder of 'CodeAndCreate'",
                instructorList: [
                    {src:blackShadedStar, head:"4.5 Instructor Rating"},
                    {src:grade, head:"10,054 Reviews"},
                    {src:user, head:"76,362 Students"},
                    {src:blackPlay, head:"21 Courses"}
                ],
                instructorSrc:"https://img-c.udemycdn.com/user/200_H/26429000_5590_7.jpg",
                about: [
                    "Hi, I'm Geroge Lomidze I'm one of Udemy's Top instructors and all my premium courses have earned the best-selling status for outstanding performance and student satisfication",
                    "I'm a full-stack web developer and designer with a passion for building beautiful web interface from scratch. I've been building websites and apps since 2010 and also have a Master's degree in Engineering.",
                    "I discovered my passion for teaching and helping others by sharing everything I knew during college. This passion led me to Udemy in 2015, where I now have the privillage of trainig 2,000,000+ learners in the field of web development",
                    "What learners love the most about all my course is the fact that i take the time to explain every single concept in a way that everyone can easily understand",
                    "These couses are exactly the courses I wish I had when first getting into web developement"
                ], 
            }     
        ],  
        commentItems: [
            {head:"Youssef S.", src:fiveStar, days:"6 days ago", user:"YS",description:"I am very happy with this course and very sad that I have to end this exicting journey  so thank you so much for the really clear concepts and in-depth sections. Thank you very much Jonas"},
            {head:"Yossed W.",src:fourStar, days:"2 weeks ago", user:"YW", description:"The course is really amazing but the section redux very difficult to understant Otherwise, there is no doubt about it."},
            {head:"Suraj C.", src:fiveStar, days:"a week ago", user:"SC",description:"The best course that there is out there. With so many different projects and technologies arranged perfectly to build upon, and also the content delivery was a masterpiece"},
            {head:"Pablo Sebastian P.", src:fiveStar, days:"a month ago", user:"PP", description:"shubham es um excelente profesor que sabe expocar bien el contenido yte da motivacion para seguir avanzandol Super recomendado para cualquier nivel.Muchas gracias!"},
            {head:"Atefeh N.",src:fiveStar,days:"3 days ago",user:"AN",description:"The best course ever!! including tones of useful tutorials incliding in many real use cases in React and Next.js world."},
            {head:"Abdul Waris S.", src:fourStar, days:"a week ago", user:"AS",description:"Good course for someone who has a lot of time to watch and practice it. Try to watch is at 1.5x speed since the speech is slow."},
            {head:"Oleksii P.",src:fiveStar,days:"4 days ago",user:"OP",description:"Great course to get acquainted with frontend developement in general and React and Next.js in particular Be prepare to learn and practice much more on your own, but this course will definitely give you some foundation for this."},
            {head:"Shubham B.", src:fourStar,days:"a month ago", user:"SB",description:"Thank you Jonas for your course, I landed an Internship with this course. To the people out there considering this course, yes you should close your eyes and pick this course. This course is structured and deep. It will teach you all the neccessary libraries also, take Router, Redux, React Query, NextJs also. My only advice stay away from tutorial hell, and keep making projects, writing code yourself only."},
            {head:"Ahamed Mohammed A.",src:fiveStar, days:"2 days ago", user:"AA", description:"Took me around 3 month to finish but damn, such a long journey since im working full time next to it, i learned alot as always a course from Jonas is always an amazing course. Thank you big time"},
            {head:"Vivek Kumar S.",src:fiveStar,days:"5 week ago", user:"VS",description:"Thanks Jonas for creating such a great couse I'm grateful to say thar I've completed the entire 85 hour long course by watching every lecture. Looking ahead. I'd love to see you create a course on Data stuctures and Algorithms(DSA) as well. I know there are many DSA courses availabel in the market but honestly, none of them are truly good. I'm pretty sure you would create the best one out there!"},
            {head:"Adriano C.", src:fourStar, days:"2 months ago", user:"AD", description:"The course is decently up to date, and many of the problems you might have during development, can be solved by cheking the Q&A section. Thankds Jonas!"},
            {head:"Simon B.", src:fourStar, days:"4 months ago", user:"SB", description:"Really enjoyed the couse, very comprehensive and I learnt a lot about React. NextJS and just coding in general. Only negative is that some parts are outstand which did cause a few problems along the way. Although this is not something that is specifically Jonas fault. As with all things tech, new versions of this or that are relaesed all the time and the code needs to be modified ot altered. One good addition that could be made to this course is an extra section on React v19 now that it is out and stable. Thank you."}, 
        ],   
        providedCourseSection: [
            {
                id:1,
                author:"Code And Create",
                ProvideItem: [
                    {head:"10 Mega Responsive Websites with HTML",discriptionAuthor:"Code And Create, Georage Lomidze",rating:"4.3",count:"(609)",hour:"21 total hours",lectures:"130 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/3598684_c319_5.jpg"},
                    {head:"Build 30 Web Projects with HTML, CSS, and JavaScript",discriptionAuthor:"Code And Create, Georage Lomidze", rating:"4.7",count:"(2,427)",hour:"12 total hours",lectures:"74 lectures",Price:"₹3,289",src:"https://img-c.udemycdn.com/course/240x135/5523428_184b_2.jpg"},
                    {head:"50+ Web Projects with HTML, CSS and React",discriptionAuthor:"Code And Create, Georage Lomidze", rating:"4.5",count:"(1,624)",hour:"20 total hours", lectures:"122 lectures", Price:"₹3,779",src:"https://img-c.udemycdn.com/course/240x135/4663468_cc81_2.jpg"}
                ],           
            }
        ]
    }
]
      
                                                                                         

export default course;                                                                                                                                                                   