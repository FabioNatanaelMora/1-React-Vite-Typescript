import React from 'react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer style={styles.footer}>
      <p>&copy; {year} Mi Empresa. Todos los derechos reservados.</p>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    marginTop: 'auto',
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#f1f1f1',
    fontSize: '0.9rem',
    color: '#333',
  },
};

export default Footer;
