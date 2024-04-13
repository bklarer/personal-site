import Hero from "@/components/Hero";
import TimeSection from "@/components/TimeSection";
import Timeline from "@/components/Timeline";

const Resume = () => {
  return (
    <div>
      <Hero title={["EXPERIENCE"]}></Hero>
      <Timeline>
        <TimeSection
          title="Full-Stack Developer at Eightfold Technologies - Marketing and
            Developer Company"
          dateRange="March 2023 - Present"
          latest
        >
          <li>
            Build components and layouts through Next.js and TypeScript and
            integrate with backend
          </li>
          <li>
            Regularly meet with the CEO and CTO to have discussions on enhancing
            process efficiency
          </li>
          <li>
            Update backend with new tables and columns and custom logic (Strapi)
          </li>
          <li>
            Communicate and have discussions with backend team on needed items
            for new features
          </li>
          <li>
            Perform QA on apps and translate into linear tasks for the rest of
            the team
          </li>
          <li>
            Increase styling skills by using CSS, SASS, Material UI, and
            Tailwind to build applications from designs
          </li>
          <li>
            Develop team skills through working with multiple teammates on a
            single app
          </li>
        </TimeSection>
        <TimeSection
          title="Owner and Strategist at Practical Accounting & Tax - Small Business
          Tax Strategies Company"
          dateRange="January 2020 - December 2023"
        >
          <li>
            Create customized solutions to solve unique problems for over 200
            clients
          </li>
          <li>
            Grow profitability through referrals and improving value-added
            services
          </li>
          <li>
            Improve strategies through networking and learning from other
            professionals in the industry
          </li>
        </TimeSection>
        <TimeSection title="Flatiron School" dateRange="May 2022 - May 2023">
          <li>
            Improve JavaScript, React, Ruby, and Rails skills through
            instruction and projects
          </li>
          <li>
            Develop a portfolio of projects to improve abilities creating apps
            from scratch
          </li>
          <li>
            Use instructor feedback to improve code and build on latest best
            practices
          </li>
        </TimeSection>
        <TimeSection
          title="University of Arizona"
          dateRange="August 2011 - May 2015"
        >
          <li>
            Explored various areas of study including science, business, and
            economics but a major in Business Management
          </li>
          <li>
            My first exposure to programming was through a class using
            Statistical Analytic Systems (SAS)
          </li>
          <li>
            Won the entrepreneurship capstone competition competing against
            about 30 teams
          </li>
        </TimeSection>
      </Timeline>
    </div>
  );
};

export default Resume;
