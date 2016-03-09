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

  render() {
    return (
      <Surface width={960} height={640} top={0} left={0}>
        <Image style={styles.roomImage} src="assets/room.jpg" />
      </Surface>
    );
  }

}

export default Canvas;
