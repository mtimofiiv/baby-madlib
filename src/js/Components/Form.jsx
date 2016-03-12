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
      <p className="selection">
        <span className="control is-3" key={key}>

          {question.label[0]}

          <span className="select is-large is-danger">
            <select className="is-large is-danger" key={key} data-slug={key} onChange={this.changed.bind(this)}>
              <option>{this.props.defaultSelectText}</option>
              {answers}
            </select>
          </span>

          {question.label[1]}
        </span>
      </p>
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
      <section className="section selection-form">
        <p className="intro-text is-text-centered">{this.props.introText}</p>

        <div className="choices">
          {form}
        </div>

        <p dangerouslySetInnerHTML={this.closing()} />

        <p className="is-text-centered chevron">
          <i className="fa fa-chevron-down"></i>
        </p>
      </section>
    );
  }

}

export default Form;
