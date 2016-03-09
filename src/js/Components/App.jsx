import React from 'react';

import Hero from './Hero.jsx';
import Form from './Form.jsx';
import Canvas from './Canvas.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Hero />
        <div className="container">
          <Form formData={this.props} />
        </div>
        <div className="container">
          <Canvas />
        </div>
      </div>
    );
  }

}

export default App;
