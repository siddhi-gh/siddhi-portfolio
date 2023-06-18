import { AboutImg, RoundedText, WorkingEmoji } from "../../images";
import {
  AboutContent,
  ContentImage,
  ContentText,
  ImageSideContainer,
  SectionContainer,
  SectionWrapper,
  WorkEmoji,
  ContentTextH3,
  ContentTextH4,
  ContentTextP,
  ImageSideSpan,
  ImageSideSpanImage,
} from "./AboutMe.styles";

export const AboutMe = () => {
  return (
    <SectionWrapper id="about">
      <SectionContainer>
        <AboutContent>
          <ImageSideContainer>
            <WorkEmoji src={WorkingEmoji} alt="emoji" />
            <ContentImage src={AboutImg} alt="mee" />
            <ImageSideSpan>
              <ImageSideSpanImage src={RoundedText} alt="text" />
            </ImageSideSpan>
          </ImageSideContainer>
          <ContentText>
            <ContentTextH3>About me</ContentTextH3>
            <ContentTextH4>
              A dedicated Front-end Developer <br /> based in Bangalore, India
              📍
            </ContentTextH4>
            <ContentTextP>
              As a Junior Front-End Developer, I possess an impressive arsenal
              of skills in CSS, JavaScript, TypeScript and React. I excel in
              designing and maintaining responsive websites that offer a smooth
              user experience. My expertise lies in crafting dynamic, engaging
              interfaces through writing clean and optimized code and utilizing
              cutting-edge development tools and techniques. I am also a team
              player who thrives in collaborating with cross-functional teams to
              produce outstanding web applications.
            </ContentTextP>
          </ContentText>
        </AboutContent>
      </SectionContainer>
    </SectionWrapper>
  );
};