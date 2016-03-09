class Store {

  constructor(fixtures) {
    this.fixtures = fixtures;
    this.data = {};

    for (let question of fixtures) {
      this.data[question.key] = null;
    }
  }

  get(key) {

  }

  set(key, value) {

  }

}

export default Store;
