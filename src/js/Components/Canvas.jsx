import React from 'react';
import ReactCanvas from 'react-canvas';

const { Surface, Image, Text } = ReactCanvas;

const styles = {

  roomImage: {
    top: 0,
    left: 0,
    width: 960,
    height: 640
  }

};

class Canvas extends React.Component {

  constructor(props) {
    super(props);
  }

  widgets() {
    const store = this.props.store;
    const widgets = [];

    this.setState({ redraw: true });

    for (let question in store) {
      if (store[question] !== null && this.props.audioQuestion !== question) {
        const style = this.props.madlib[question].style;
        const src = `assets/${this.props.madlib[question].answers[store[question]].media}`;

        widgets.push(
          <Image style={this.dynamicStyles(style)} src={src} key={question} />
        );
      }
    }

    return widgets;
  }

  sizeMultiplier() {
    const width = window.innerWidth;
    const multiplier = width / 960;

    return (multiplier > 1) ? 1 : multiplier;
  }

  dynamicStyles(styles) {
    const coordinates = [ 'width', 'height', 'left', 'top' ];
    const restyle = {};

    for (let p in styles) {
      if (coordinates.indexOf(p) > -1) restyle[p] = styles[p] * this.sizeMultiplier();
    }

    return restyle;
  }

  render() {
    return (
      <Surface width={960 * this.sizeMultiplier()} height={640 * this.sizeMultiplier()} top={0} left={0}>
        <Image style={this.dynamicStyles(styles.roomImage)} src="assets/room.jpg" />
        {this.widgets()}
      </Surface>
    );
  }

}

export default Canvas;
