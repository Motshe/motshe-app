import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="text-muted py-5 my-3">
      <div className="container">
        <p className="float-end mb-1">
          <a href="#">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#ff5757"
              className="bi bi-arrow-up-circle"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
              />
            </svg>
          </a>
        </p>
        <p className="mb-1">
          Super, że tu trafiłaś! To jest Landing Page{' '}
          <span className="motshe-font text__main-color fs-3">Motshe!</span> -
          aplikacji, którą tworzymy w trakcie Hackathonu{' '}
          <a href="https://hack4girlz.gocarrots.org/">Hack4Girlz 2021'.</a>
        </p>
        <p>
          Jest nas 5, jesteśmy zmotywowane, mózgi nam puchną, ale wierzymy w ten
          pomysł! Luknij na naszego{' '}
          <a href="https://github.com/Motshe/motshe-app">githuba</a>, tam w
          Readme poczytasz więcej.
        </p>
        <p>© Motshe. Wszystkie prawa zastrzeżone</p>
      </div>
    </footer>
  );
}

export default Footer;
