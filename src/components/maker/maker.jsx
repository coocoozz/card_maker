import { React, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';

const Maker = ({ authService }) => {
  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  useEffect(() => {
    authService.onAuthChanged((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <section>
      <Header onLogout={onLogout} />
      <Footer />
    </section>
  );
};

export default Maker;
