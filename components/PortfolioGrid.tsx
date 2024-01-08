import PortfolioCard from "@/components/PortfolioCard";

const portfolio = [
  {
    title: "Personal Site (this site)",
    description: "Personal site to showcase my work",
    image: "/personal-site.gif",
    username: null,
    password: null,
    notes:
      "I created this site to showcase a little about myself and share my journey into software engineering. I created a minimalistic design to show small pieces of what I have learned from my professional experience in programming. I used Next.js, Tailwind CSS, and TypeScript to build this site and deployed it to vercel.",
    alt: "Personal Site Photo",
    website: "https://benjaminklarer.com",
    github: "https://github.com/bklarer/personal-site",
  },
  {
    title: "Firm Management App",
    description: "Schedule Tasks within a firm",
    image: "/firm-management.png",
    username: "testing",
    password: "test",
    notes:
      "For my capstone project at Flatiron School, I developed an internal management application aimed at improving task assignment processes within an organization. This project afforded me the opportunity to acquire new skills in Git branching, SCSS, Cloudinary, and Active Mailer, while also enhancing my understanding of Redux, React.js, PostgreSQL, and Rails. When loading this site, keep in mind the server takes a minute to spin up and may not come up right away on the free plan.",
    alt: "Firm Management App Photo",
    website: "https://firm-management.onrender.com/",
    github: "https://github.com/bklarer/firm-management",
  },
  {
    title: "Event App",
    description: "App to schedule events and see who is going",
    image: "/event-app.png",
    username: "testing",
    password: "test",
    notes:
      "I created an event app during my attendance at Flatiron School to create events and track attendance. Through this app I learned global state management with Redux and used Bootstrap for some simple styling. This was the first app that I combined authorization with reactjs and rails while isolation actions and events to a uer. When loading this site, keep in mind the server takes a minute to spin up and may not come up right away on the free plan.",
    alt: "Event App Photo",
    website: "https://event-app-26zc.onrender.com/",
    github: "https://github.com/bklarer/event-app",
  },
];

const PortfolioGrid = () => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 grid-flow-row lg:mt-[150px] mt-[50px]">
      {portfolio.map((project, index) => {
        return (
          <PortfolioCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            username={project.username}
            password={project.password}
            notes={project.notes}
            alt={project.alt}
            website={project.website}
            github={project.github}
          />
        );
      })}
    </div>
  );
};

export default PortfolioGrid;
