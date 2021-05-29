import React from 'react';
import { Container } from 'react-bootstrap';

function Pricing() {
  return (
    <Container>
      <div className="pricing-header p-3 pb-md-4 mx-auto text-center my-5">
        <h1 className="display-4 fw-normal">Ile to kosztuje?</h1>
        <p className="fs-5 text-muted">
          Chcesz nas poznać lub wypróbować? A może już wiesz, że warto z nami
          trzymać? Może masz plan na podbój wszechświata i możemy ci w tym
          pomóc? Wybierz motshe dla siebie.
        </p>
      </div>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Free</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                0 PLN<small className="text-muted fw-light">/miesiąc</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>1 odblokowany cel</li>
                <li>1 cel historyczny</li>
                <li>Podstawowa ścieżka</li>
                <li>Podstawowe profilowanie</li>
                <li>Bierny udział w sesjach mentorskich</li>
                <li>Profilowanie Premium w 1 z 4 kategorii</li>
              </ul>
              <button
                type="button"
                className="w-100 btn btn-lg motshe-button--secondary"
              >
                Dasz radę!
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm">
            <div className="card-header py-3">
              <h4 className="my-0 fw-normal">Freemium</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                0 PLN<small className="text-muted fw-light">/miesiąc</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>3 odblokowane cele</li>
                <li>3 cele historyczne</li>
                <li>Podstawowa ścieżka</li>
                <li>Podstawowe profilowanie</li>
                <li>Bierny udział w sesjach mentorskich</li>
                <li>Profilowanie Premium w 2 z 4 kategorii</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg motshe-button">
                Chodź z przyjaciółkami!
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card mb-4 rounded-3 shadow-sm motshe-border">
            <div className="card-header py-3 text-white motshe-background motshe-border">
              <h4 className="my-0 fw-normal">Premium</h4>
            </div>
            <div className="card-body">
              <h1 className="card-title pricing-card-title">
                49 PLN<small className="text-muted fw-light">/miesiąc</small>
              </h1>
              <ul className="list-unstyled mt-3 mb-4">
                <li>10 odblokowanych celów</li>
                <li>Nielimitowane cele historyczny</li>
                <li>Podstawowa ścieżka</li>
                <li>Podstawowe profilowanie</li>
                <li>Aktywny udział w sesjach mentorskich</li>
                <li>Profilowanie Premium w 4 kategoriach</li>
              </ul>
              <button type="button" className="w-100 btn btn-lg motshe-button">
                Poznajmy się!
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Pricing;
