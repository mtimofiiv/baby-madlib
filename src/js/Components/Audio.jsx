import React from 'react';
import YouTube from 'react-youtube';

const options = {
  height: '0',
  width: '0',
  playerVars: {
    autoplay: 1
  }
};

class Audio extends React.Component {

  constructor(props) {
    super(props);
  }

  element() {
    const audioQuestion = this.props.audioQuestion;
    const currentChoice = this.props.store[audioQuestion];

    if (!currentChoice) return;

    const embedCode = this.props.madlib[audioQuestion].answers[currentChoice].media;

    return (
      <YouTube
        videoId={embedCode}
        opts={options}
        />
    );
  }

  render() {
    return (
      <div>
        {this.element()}
      </div>
    );
  }

}

export default Audio;
