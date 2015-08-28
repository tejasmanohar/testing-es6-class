class Thing {

  constructor(options) {
    this.name = options.name;
  }

  test() {
    return true;
  }

}

const jack = new Thing({
  name: 'jack'
});

console.log(jack.test());
