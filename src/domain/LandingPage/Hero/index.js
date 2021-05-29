import React from 'react';

function Hero() {
  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-1 fw-bold lh-1 mb-3 gradient__text">
            <span className="motshe-font motshe-reverse">M</span>
            <span className="motshe-font">O</span>
            <span className="motshe-font">T</span>
            <span className="motshe-font">S</span>
            <span className="motshe-font">H</span>
            <span className="motshe-font">E</span>
            <span className="motshe-font">!</span>
          </h1>
          <h3 className="display-6 fw-bold lh-1 mb-3">
            JESTEM. CHCĘ. POTRAFIĘ.
          </h3>
          <p className="col-lg-10 fs-4">
            Masz cel, ale nie wiesz jak go osiągnąć? Nie wierzysz we własne
            siły? Chcesz coś zmienić, ale nie jesteś pewna co? Obawiasz się, że
            ci się nie uda?
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-light">
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
            </div>
            <div className="form-floating mb-3">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
            </div>
            <button className="w-100 btn button--red btn-light" type="submit">
              Dołącz do nas!
            </button>
            <hr className="my-4" />
            <small className="text-muted">
              Przez dołączenie do nas akceptujesz nasze warunki użytkowania.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Hero;
