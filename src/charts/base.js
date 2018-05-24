class BaseChart {
  constructor(element, config, data) {
    this.config = config;
    this.data = data;

    const defaultConfig = {
      margin: {
        top: 20,
        right: 20,
        bottom: 30,
        left: 50
      },
      width: 1200,
      height: 600
    };

    this.config = Object.assign(defaultConfig, config);

    this.init(element);
  }

  updateData(data) {
    this.data = data;
    this.render(data);
  }

  render() {}
}

export default BaseChart;