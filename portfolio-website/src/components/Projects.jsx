import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaReact, FaNode, FaPython, FaMobile } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiMongodb, SiPostgresql, SiNextdotjs } from 'react-icons/si';

const ProjectsSection = styled.section`
  background: ${props => props.theme.colors.light};
  padding: 100px 0;
`;

const ProjectsContent = styled.div`
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled(motion.button)`
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 25px;
  background: ${props => props.active ? 
    `linear-gradient(135deg, ${props.theme.colors.primary}, ${props.theme.colors.accent})` : 
    props.theme.colors.white};
  color: ${props => props.active ? 'white' : props.theme.colors.gray};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectsGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="25" cy="25" r="3" fill="white" opacity="0.1"/><circle cx="75" cy="25" r="3" fill="white" opacity="0.1"/><circle cx="50" cy="50" r="3" fill="white" opacity="0.1"/><circle cx="25" cy="75" r="3" fill="white" opacity="0.1"/><circle cx="75" cy="75" r="3" fill="white" opacity="0.1"/></svg>');
    background-size: 50px 50px;
  }
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  font-family: ${props => props.theme.fonts.heading};
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.dark};
`;

const ProjectDescription = styled.p`
  color: ${props => props.theme.colors.gray};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.primary};
  padding: 0.3rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.3rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.6rem 1rem;
  border-radius: 25px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &.primary {
    background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
    color: white;
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(37, 99, 235, 0.3);
    }
  }
  
  &.secondary {
    background: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.primary};
    border: 1px solid ${props => props.theme.colors.primary};
    
    &:hover {
      background: ${props => props.theme.colors.primary};
      color: white;
      transform: translateY(-2px);
    }
  }
`;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with modern UI, payment integration, and admin dashboard.',
      image: '🛍️',
      category: 'Web',
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'Node.js', icon: <FaNode /> },
        { name: 'MongoDB', icon: <SiMongodb /> }
      ],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: '📋',
      category: 'Web',
      technologies: [
        { name: 'Next.js', icon: <SiNextdotjs /> },
        { name: 'TypeScript', icon: <SiTypescript /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> }
      ],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 3,
      title: 'Weather Mobile App',
      description: 'A beautiful weather application with location-based forecasts and interactive maps.',
      image: '🌤️',
      category: 'Mobile',
      technologies: [
        { name: 'React Native', icon: <FaMobile /> },
        { name: 'JavaScript', icon: <SiJavascript /> }
      ],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 4,
      title: 'AI Chat Bot',
      description: 'An intelligent chatbot powered by machine learning for customer service automation.',
      image: '🤖',
      category: 'AI',
      technologies: [
        { name: 'Python', icon: <FaPython /> },
        { name: 'JavaScript', icon: <SiJavascript /> }
      ],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects with modern animations and design.',
      image: '💼',
      category: 'Web',
      technologies: [
        { name: 'React', icon: <FaReact /> },
        { name: 'TypeScript', icon: <SiTypescript /> }
      ],
      github: 'https://github.com',
      live: 'https://example.com'
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description: 'A mobile app for tracking workouts, nutrition, and health metrics with social features.',
      image: '💪',
      category: 'Mobile',
      technologies: [
        { name: 'React Native', icon: <FaMobile /> },
        { name: 'Node.js', icon: <FaNode /> }
      ],
      github: 'https://github.com',
      live: 'https://example.com'
    }
  ];

  const categories = ['All', 'Web', 'Mobile', 'AI'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    <ProjectsSection id="projects">
      <ProjectsContent>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          My Projects
        </SectionTitle>

        <FilterButtons>
          {categories.map(category => (
            <FilterButton
              key={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </FilterButton>
          ))}
        </FilterButtons>

        <ProjectsGrid
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                variants={itemVariants}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -10 }}
              >
                <ProjectImage>
                  <span style={{ zIndex: 2 }}>{project.image}</span>
                </ProjectImage>
                
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  
                  <TechStack>
                    {project.technologies.map((tech, index) => (
                      <TechTag key={index}>
                        {tech.icon}
                        {tech.name}
                      </TechTag>
                    ))}
                  </TechStack>
                  
                  <ProjectLinks>
                    <ProjectLink
                      href={project.github}
                      target="_blank"
                      className="secondary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaGithub />
                      Code
                    </ProjectLink>
                    
                    <ProjectLink
                      href={project.live}
                      target="_blank"
                      className="primary"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>
      </ProjectsContent>
    </ProjectsSection>
  );
};

export default Projects;