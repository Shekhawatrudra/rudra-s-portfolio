import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';

const AboutMe = () => {
  const styles = {
    section: {
      margin: '2rem auto',
      padding: '4rem 2rem',
      width: '90%',
      maxWidth: '1200px',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      borderRadius: '16px',
      boxShadow: '0 0 30px rgba(0, 0, 0, 0.25)',
      color: '#f1f1f1',
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: '2rem',
      flexWrap: 'wrap',
    },
    imageBox: {
      maxWidth: '300px',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: '2rem'
    },
    image: {
      width: '100%',
      borderRadius: '16px',
      boxShadow: '0 0 15px rgba(255, 255, 255, 0.1)',
    },
    downloadBtn: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      padding: '0.6rem 1.2rem',
      marginTop: '1.5rem',
      fontSize: '0.95rem',
      color: '#fff',
      backgroundColor: 'rgba(0, 206, 201, 0.2)',
      border: '1px solid #00cec9',
      borderRadius: '12px',
      backdropFilter: 'blur(12px)',
      textDecoration: 'none',
      cursor: 'pointer',
      transition: '0.3s ease',
      boxShadow: '0 4px 20px rgba(0, 206, 201, 0.3)',
    },
    textBox: {
      flex: 1,
      minWidth: '280px',
    },
    heading: {
      fontSize: '2.5rem',
      marginBottom: '1.5rem',
      color: '#00cec9',
    },
    text: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      marginBottom: '1rem',
    },
    skillHeading: {
      fontSize: '1.8rem',
      margin: '1.5rem 0 0.5rem',
      color: '#00cec9',
    },
    list: {
      listStyleType: 'none',
      paddingLeft: 0,
      lineHeight: '1.8',
    },
    listItem: {
      fontSize: '1.1rem',
      color: '#ccc',
    },
  };

  return (
    <motion.section
      id="about-me"
      style={styles.section}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <div style={styles.container}>
        {/* Left Side - Profile Image */}
        <div style={styles.imageBox}>
          <img src="/assets/profile.jpg" alt="Profile" style={styles.image} />
        </div>

        {/* Right Side - Text Content and CV Download */}
        <div style={styles.textBox}>
          <h2 style={styles.heading}>About Me</h2>
         
          <p style={styles.text}>
            Hello! I'm Rudra Shekhawat, a passionate Software Developer from Uttar Pradesh. I’m currently pursuing my BTech in Computer Science Engineering at Chandigarh University.
          </p>
          <p style={styles.text}>
            I'm currently focusing on enhancing my web development skills with React and learning data structures and algorithms (DSA). I'm always up for challenges and am committed to continuous learning.
          </p>
          <p style={styles.text}>
            Outside of coding, I love traveling and exploring new places, and cooking is one of my favorite hobbies.
          </p>
          

          {/* CV Download Button Below Skills */}
          <a
            href="/assets/rudra-resume.pdf"
            download="Rudra-Shekhawat-Resume.pdf"
            style={styles.downloadBtn}
          >
            <FiDownload size={18} />
            Download CV
          </a>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMe;
