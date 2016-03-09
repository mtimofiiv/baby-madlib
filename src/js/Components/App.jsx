import React from 'react';

import Hero from './Hero.jsx';
import Form from './Form.jsx';
import Image from './Image.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Hero />
        <Form formData={this.props} />
        <Image />
      </div>
    );
  }

}

export default App;
