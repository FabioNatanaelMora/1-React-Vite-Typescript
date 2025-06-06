import React from 'react';

const About: React.FC = () => {
  return (
    <section style={styles.section}>
      <h2>Sobre Nosotros</h2>
      <p>
        Somos una empresa dedicada a brindar soluciones tecnológicas innovadoras. Nuestro objetivo es ayudar a nuestros clientes a crecer mediante el uso eficiente de herramientas digitales.
      </p>
      <p>
        Con un equipo multidisciplinario y años de experiencia, nos especializamos en desarrollo web, aplicaciones móviles y consultoría tecnológica.
      </p>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
    color: '#333',
  },
};

export default About;
