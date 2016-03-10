import React from 'react';

import Hero from './Hero.jsx';
import Form from './Form.jsx';
import Canvas from './Canvas.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    const store = {};
    for (let question in this.props.madlib) store[question] = null;

    this.state = { store };
  }

  changeChoice(key, value) {
    const store = this.state.store;
    store[key] = value;

    this.setState({ store });
  }

  render() {
    return (
      <div>
        <Hero
          title={this.props.copy.title}
          subtitle={this.props.copy.subtitle}
          introImage={this.props.introImage}
          />

        <div className="container">

          <Form
            madlib={this.props.madlib}
            defaultSelectText={this.props.copy.defaultSelectText}
            changeChoice={this.changeChoice.bind(this)}
            />

        </div>
        <div className="container">

          <Canvas
            madlib={this.props.madlib}
            store={this.state.store}
            />

        </div>
      </div>
    );
  }

}

export default App;
