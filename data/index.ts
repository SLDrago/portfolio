import { link } from "fs";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experiances", link: "#experiances" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "Learning never ends. Curiousty keeps me going learning new things everyday.",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Technology empowers me to be a valuable asset on a global scale.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently studying GIS and Android Development",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Hey wanna connect with me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "HappyTank",
    des: "HappyTank is a modern adverticement platform that build for local ornamental fish industry",
    img: "/happytankhome.jpeg",
    iconLists: [
      "/re.svg",
      "/laravel.svg",
      "/tail.svg",
      "/ts.svg",
      "/mysql.svg",
    ],
    link: "Private",
  },
  {
    id: 2,
    title: "GEO Processing Tools",
    des: "This is a bundle of Geo processing tools that can use that created for problems that I face.",
    img: "/geoprocess.jpg",
    iconLists: ["/python.svg"],
    link: "github.com/SLDrago/GEO-Processing-Tools",
  },
  {
    id: 3,
    title: "DOT Music",
    des: "DOT-Music is a modern web-based music streaming platform developed as a university project.",
    img: "/dotmusic.svg",
    iconLists: [
      "/re.svg",
      "/django.svg",
      "/tail.svg",
      "/ts.svg",
      "/python.svg",
    ],
    link: "Private",
  },
  {
    id: 4,
    title: "CoreHR — HRISSolution",
    des: "I worked on an HR Management tool tailored for small and medium-sized enterprises at GrowthScope Company.",
    img: "/corehr.png",
    iconLists: [
      "/codeigniter.svg",
      "/bootstrap.svg",
      "/javascript.svg",
      "/jquery.svg",
      "/mysql.svg",
    ],
    link: "Private",
  },
];

export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Intern -  GrowthScope(Pvt) Ltd.",
    desc: "Developed software applications using a variety of programming languages and frameworks, including PHP, JavaScript, jQuery, Bootstrap, and React.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: " Quality Assurance Engineer (Trainee) — CSIDevTeam",
    desc: "Played a key role in identifying, isolating, and troubleshooting software defects. Worked with Selenium, OWASP ZAP, and Apache JMeter to handle automated testing",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/SLDrago",
  },
  {
    id: 2,
    img: "/insta.svg",
    link: "https://instagram.com/dilshanoshada7/",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://linkedin.com/in/dilshan-oshada",
  },
];
