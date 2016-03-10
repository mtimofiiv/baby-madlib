import React from 'react';

class Form extends React.Component {

  constructor(props) {
    super(props);
  }

  formInput(key, question) {
    const answers = [];

    for (let i in question.answers) {
      answers.push(
        <option value={i} key={i}>{question.answers[i].title}</option>
      );
    }

    return (
      <span className="control" key={key}>
        {question.label}
        <span className="select">
          <select key={key} data-slug={key} onChange={this.changed.bind(this)}>
            <option>{this.props.defaultSelectText}</option>
            {answers}
          </select>
        </span>
      </span>
    );
  }

  changed(e) {
    const action = this.props.changeChoice;
    const value = (e.target.value === this.props.defaultSelectText) ? null : e.target.value;

    return action(e.target.dataset.slug, value);
  }

  closing() {
    return { __html: this.props.closingRemark };
  }

  render() {
    const form = [];

    for (let question in this.props.madlib) {
      form.push(this.formInput(question, this.props.madlib[question]));
    }

    return (
      <section className="section">
        <p className="choices">
          {form}
        </p>
        <p dangerouslySetInnerHTML={this.closing()} />
      </section>
    );
  }

}

export default Form;
