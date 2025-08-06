import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaPython, FaGitAlt, FaDatabase, FaMobile } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiDocker, SiFigma } from 'react-icons/si';

const AboutSection = styled.section`
  background: ${props => props.theme.colors.white};
  padding: 100px 0;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled(motion.h2)`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.dark};
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
    margin: 1rem auto;
    border-radius: 2px;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const AboutText = styled(motion.div)`
  h3 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.dark};
  }
  
  p {
    color: ${props => props.theme.colors.gray};
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-size: 1.1rem;
  }
`;

const AboutStats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
`;

const StatCard = styled(motion.div)`
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  color: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  h4 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    opacity: 0.9;
  }
`;

const SkillsSection = styled.div`
  h3 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: 1.8rem;
    font-weight: 600;
    text-align: center;
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.dark};
  }
`;

const SkillsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${props => props.theme.colors.light};
  padding: 2rem;
  border-radius: 15px;
  border: 2px solid transparent;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: ${props => props.theme.colors.primary};
    transform: translateY(-5px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  }
  
  h4 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.dark};
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillTag = styled(motion.span)`
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.primary};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${props => props.theme.colors.primary};
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.primary};
    color: white;
    transform: scale(1.05);
  }
`;

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <FaReact />,
      technologies: ['React', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      icon: <FaNode />,
      technologies: ['Node.js', 'Python', 'Express.js', 'Django', 'REST APIs', 'GraphQL']
    },
    {
      category: 'Database',
      icon: <FaDatabase />,
      technologies: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase']
    },
    {
      category: 'Tools & Others',
      icon: <FaGitAlt />,
      technologies: ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'Webpack']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <AboutSection id="about">
      <AboutContent>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          About Me
        </SectionTitle>

        <AboutGrid>
          <AboutText
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3>Passionate Developer</h3>
            <p>
              I'm a full-stack developer with 3+ years of experience creating digital solutions 
              that make a difference. I love turning complex problems into simple, beautiful 
              designs and bringing ideas to life through code.
            </p>
            <p>
              My journey in web development started with curiosity and has grown into a passion 
              for creating user-centered applications that are both functional and aesthetically 
              pleasing. I believe in writing clean, maintainable code and staying up-to-date 
              with the latest technologies and best practices.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </AboutText>

          <AboutStats
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <StatCard
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h4>50+</h4>
              <p>Projects Completed</p>
            </StatCard>
            <StatCard
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h4>3+</h4>
              <p>Years Experience</p>
            </StatCard>
            <StatCard
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h4>25+</h4>
              <p>Happy Clients</p>
            </StatCard>
            <StatCard
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h4>100%</h4>
              <p>Satisfaction Rate</p>
            </StatCard>
          </AboutStats>
        </AboutGrid>

        <SkillsSection>
          <h3>Technical Skills</h3>
          <SkillsGrid
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <SkillCategory
                key={skill.category}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h4>
                  {skill.icon}
                  {skill.category}
                </h4>
                <SkillsList>
                  {skill.technologies.map((tech, techIndex) => (
                    <SkillTag
                      key={tech}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {tech}
                    </SkillTag>
                  ))}
                </SkillsList>
              </SkillCategory>
            ))}
          </SkillsGrid>
        </SkillsSection>
      </AboutContent>
    </AboutSection>
  );
};

export default About;