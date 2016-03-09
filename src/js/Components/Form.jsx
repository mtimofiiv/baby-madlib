import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  formInput(key, question) {
    const label = question.label;
    const answers = [];

    for (let i in question.answers) {
      answers.push(
        <option key={i}>{question.answers[i].title}</option>
      );
    }

    return (
      <p className="control" key={key}>
        <label className="label">{label}</label>
        <span className="select">
          <select onChange={this.changed}>
            <option>- select -</option>
            {answers}
          </select>
        </span>
      </p>
    );
  }

  changed(e, v) {
    console.log(e, v);
  }

  render() {
    const form = [];

    for (let i in this.props.formData) {
      form.push(this.formInput(i, this.props.formData[i]));
    }

    return (
      <section className="section">
        {form}
        <button onClick={this.clicked}>sdfsdf</button>
      </section>
    );
  }

}

export default Form;
