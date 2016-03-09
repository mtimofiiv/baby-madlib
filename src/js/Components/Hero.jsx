import React from 'react';

class Hero extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="hero is-warning">
        <div className="hero-content">
          <div className="container">
            <img src="assets/big-tuna.png" />

            <h1 className="title">
              Fiiva and the Tuna are having a child.
            </h1>
            <h2 className="subtitle">
              Everybody knows the combination is going to be incredible. But just how incredible?
            </h2>
          </div>
        </div>
      </section>
    );
  }

}

export default Hero;
