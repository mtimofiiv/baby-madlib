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
            <img src={"assets/" + this.props.introImage} />

            <h1 className="title">
              {this.props.title}
            </h1>
            <h2 className="subtitle">
              {this.props.subtitle}
            </h2>
          </div>
        </div>
      </section>
    );
  }

}

Hero.propTypes = {
  title: React.PropTypes.string.isRequired,
  subtitle: React.PropTypes.string.isRequired,
  introImage: React.PropTypes.string.isRequired
};

export default Hero;
