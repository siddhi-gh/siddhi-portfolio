import {
  ProjectSection,
  SectionContainer,
  NewProjects,
  ProjectContent,
  ProjectContentP,
  ProjectContentH3,
  ProjectsGrid,
} from "./Projects.styles";

export const Projects = () => {
  return (
    <>
      <ProjectSection id="projects">
        <SectionContainer>
          <ProjectContent>
            <ProjectContentP>projects</ProjectContentP>
            <ProjectContentH3>
              Each project is a unique piece of development 🧩
            </ProjectContentH3>
            <ProjectsGrid>
              {/* <ProBox
                title="Car Rental"
                img={CarRental}
                description="A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars."
                techno1="React"
                techno2="SCSS"
                code="https://github.com/stefvndev/car-rental"
                demo="https://car-rental-ten.vercel.app/"
                scrollY="-83%"
                icon="🚗"
              /> */}
            </ProjectsGrid>
          </ProjectContent>
          {/* <NewProjects className="new-projects">
            New projects coming soon...🙂
          </NewProjects> */}
        </SectionContainer>
      </ProjectSection>
    </>
  );
};
