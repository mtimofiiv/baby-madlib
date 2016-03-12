import React from 'react';

class Hero extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="hero is-danger is-fullheight">
        <div className="hero-content">
          <div className="container">

            <h1 className="title is-1">
              {this.props.title}
            </h1>

            <div className="columns">
              <div className="column">
                <img src={"assets/" + this.props.introImage} />
              </div>

              <div className="column">

                <h2 className="subtitle is-3">
                  {this.props.subtitle}
                </h2>

              </div>
            </div>

            <p className="is-text-centered chevron">
              <i className="fa fa-chevron-down"></i>
            </p>
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
