import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from 'react-icons/fa';

const FooterWrapper = styled.footer`
  background: ${props => props.theme.colors.dark};
  color: white;
  padding: 3rem 0 1rem;
  position: relative;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
  margin-bottom: 2rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    text-align: center;
  }
`;

const FooterSection = styled(motion.div)`
  h3 {
    font-family: ${props => props.theme.fonts.heading};
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: white;
  }
  
  p {
    color: ${props => props.theme.colors.gray};
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  ul {
    list-style: none;
    
    li {
      margin-bottom: 0.5rem;
      
      a {
        color: ${props => props.theme.colors.gray};
        text-decoration: none;
        transition: color 0.3s ease;
        
        &:hover {
          color: ${props => props.theme.colors.accent};
        }
      }
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    justify-content: center;
  }
`;

const SocialLink = styled(motion.a)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.theme.colors.accent};
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${props => props.theme.colors.gray};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  .heart {
    color: ${props => props.theme.colors.accent};
    animation: heartbeat 2s ease-in-out infinite;
  }
  
  @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.1); }
  }
`;

const BackToTop = styled(motion.button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.accent});
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <FaTwitter />, url: 'https://twitter.com', label: 'Twitter' }
  ];

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  const services = [
    'Web Development',
    'Mobile Apps',
    'UI/UX Design',
    'Consulting'
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <FooterWrapper>
      <FooterContent>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FooterGrid>
            <FooterSection variants={itemVariants}>
              <h3>John Developer</h3>
              <p>
                Passionate full-stack developer creating digital solutions that make a difference. 
                Let's build something amazing together!
              </p>
              <SocialLinks>
                {socialLinks.map((social, index) => (
                  <SocialLink
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {social.icon}
                  </SocialLink>
                ))}
              </SocialLinks>
            </FooterSection>

            <FooterSection variants={itemVariants}>
              <h3>Quick Links</h3>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.querySelector(link.href);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#hero" onClick={(e) => {
                    e.preventDefault();
                    scrollToTop();
                  }}>
                    Home
                  </a>
                </li>
              </ul>
            </FooterSection>

            <FooterSection variants={itemVariants}>
              <h3>Services</h3>
              <ul>
                {services.map((service, index) => (
                  <li key={index}>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </FooterSection>
          </FooterGrid>
        </motion.div>

        <FooterBottom>
          <Copyright>
            Made with <FaHeart className="heart" /> by John Developer
            <span style={{ margin: '0 0.5rem' }}>•</span>
            © {currentYear} All rights reserved
          </Copyright>
          
          <BackToTop
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <FaArrowUp />
          </BackToTop>
        </FooterBottom>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;