import React from 'react';
import ReactCanvas from 'react-canvas';

const { Surface, Image, Text, Layer } = ReactCanvas;

const styles = {

  roomImage: {
    top: 0,
    left: 0,
    width: 960,
    height: 640
  },

  faceImage: {
    top: 193,
    left: 500,
    width: 200,
    height: 200
  }

};

class Canvas extends React.Component {

  constructor(props) {
    super(props);
  }

  widgets() {
    const store = this.props.store;
    const widgets = [];

    for (let question in store) {
      if (store[question] !== null && this.props.audioQuestion !== question) {
        const style = this.props.madlib[question].style;
        const src = `assets/${this.props.madlib[question].answers[store[question]].media}`;

        widgets.push(
          <Image style={style} src={src} key={question} />
        );
      }
    }

    return widgets;
  }

  currentFaceSrc() {
    return `assets/${this.props.face}`;
  }

  render() {
    return (
      <Surface width={960} height={640} top={0} left={0}>
        <Image style={styles.roomImage} src="assets/room.jpg" />
        <Image style={styles.faceImage} src={this.currentFaceSrc()} />
        {this.widgets()}
      </Surface>
    );
  }

}

export default Canvas;
