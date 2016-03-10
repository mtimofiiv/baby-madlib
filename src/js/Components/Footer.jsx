import React from 'react';

class Footer extends React.Component {

  constructor(props) {
    super(props);
  }

  caption() {
    return { __html: this.props.caption };
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="content">
            <p className="is-text-centered" dangerouslySetInnerHTML={this.caption()} />
          </div>
        </div>
      </footer>
    );
  }

}

Footer.propTypes = {
  caption: React.PropTypes.string.isRequired
};

export default Footer;
