import React from "react";
import "./index.css";
import { render } from "react-dom";
import Waterfall from "../../src";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.columnNum = 4;
    this.gap = 5;
  }
  render() {
    const images = [
      {
        url: "http://cdn-icare.qingtime.cn/AEB82EAA.jpg",
        width: 2048,
        height: 1152
      },
      {
        url: "http://cdn-icare.qingtime.cn/4E70E5FD.jpg",
        width: 1080,
        height: 1920
      },
      {
        url: "http://cdn-icare.qingtime.cn/AAE09617.jpg",
        width: 1557,
        height: 1637
      },
      {
        url: "http://cdn-icare.qingtime.cn/111D757D.jpg",
        width: 1080,
        height: 1920
      },
      {
        url: "http://cdn-icare.qingtime.cn/975F1604.jpg",
        width: 750,
        height: 499
      },
      {
        url: "http://cdn-icare.qingtime.cn/7D223412.jpg",
        width: 1080,
        height: 1920
      },
      {
        url: "http://cdn-icare.qingtime.cn/A50DF805.jpg",
        width: 736,
        height: 907
      },
      {
        url: "http://cdn-icare.qingtime.cn/90D11455.jpg",
        width: 1080,
        height: 1920
      },
      {
        url: "http://cdn-icare.qingtime.cn/2A499A33.jpg",
        width: 1024,
        height: 576
      },
      {
        url: "http://cdn-icare.qingtime.cn/D62BB7C2.jpg",
        width: 1080,
        height: 1920
      },
      {
        url: "http://cdn-icare.qingtime.cn/D82F962E.jpg",
        width: 1440,
        height: 810
      },
      {
        url: "http://cdn-icare.qingtime.cn/B489E25C.jpg",
        width: 640,
        height: 640
      },
      {
        url: "http://cdn-icare.qingtime.cn/5A842A52.jpg",
        width: 1440,
        height: 810
      }
    ];
    return (
      <div style={{ width: "100%" }}>
        <Waterfall columnNum={this.columnNum} gap={this.gap}>
          {images.map((image, index) => (
            <Image
              key={index}
              num={index}
              image={image}
              width={image.width}
              height={image.height}
            />
          ))}
        </Waterfall>
      </div>
    );
  }
}

class Image extends React.Component {
  render() {
    const { image, num } = this.props;
    return (
      <div
        className="my-image"
        style={{
          backgroundImage: `url(${image.url})`,
          width: "100%",
          height: "100%"
        }}
      >
        <div>
          <span>{num}</span>
        </div>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
