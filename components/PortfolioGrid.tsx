import PortfolioCard from "@/components/PortfolioCard";
import personalPortfolio from "../data/projects/personal-projects.json";

//TODO: Optimize photos and change format

const PortfolioGrid = () => {
  return (
    <div className="lg:mt-[150px] mt-[50px]">
      <h2 className="text-3xl text-center">Commercial Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-4 grid-flow-row mt-10">
        {personalPortfolio.map((project, index) => {
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
              github2={project.github2}
              privateRepo={project.privateRepo}
            />
          );
        })}
      </div>
      <h2 className="text-3xl text-center mt-10">Personal Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-4 grid-flow-row mt-10">
        {personalPortfolio.map((project, index) => {
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
              github2={project.github2}
              privateRepo={project.privateRepo}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PortfolioGrid;
