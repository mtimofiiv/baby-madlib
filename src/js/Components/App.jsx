import React from 'react';

import Hero from './Hero.jsx';
import Form from './Form.jsx';
import Canvas from './Canvas.jsx';
import Audio from './Audio.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    const store = {};
    for (let question in this.props.madlib) store[question] = null;

    let weight = 2;

    this.state = { store, weight };
  }

  changeChoice(key, value) {
    const store = this.state.store;
    store[key] = value;

    let weight = this.state.weight;

    if (this.props.madlib[key].answers[value].pick === 'mike') {
      weight++;
    } else if (this.props.madlib[key].answers[value].pick === 'tina') {
      weight--;
    }

    this.setState({ store, weight });
  }

  face() {
    return this.props.faces[this.state.weight];
  }

  render() {
    return (
      <div>
        <Hero
          title={this.props.copy.title}
          subtitle={this.props.copy.subtitle}
          introImage={this.props.introImage}
          />

        <Audio
          madlib={this.props.madlib}
          store={this.state.store}
          audioQuestion={this.props.audioQuestion}
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
            audioQuestion={this.props.audioQuestion}
            face={this.face()}
            />

        </div>

        <Footer caption={this.props.copy.footer} />
      </div>
    );
  }

}

export default App;
