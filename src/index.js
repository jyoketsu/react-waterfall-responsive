import React, { Component } from "react";

class Waterfall extends Component {
  constructor(props) {
    super(props);
    this.setItemWidth = this.setItemWidth.bind(this);
    this.state = { itemWidth: 0 };
  }

  render() {
    const { itemWidth } = this.state;
    const { columnNum, gap, children } = this.props;
    // 高度数组
    let heightArr = [];
    // 元素数组
    let items = [];
    for (let i = 0; i < children.length; i++) {
      const nowChild = children[i];
      const height = (nowChild.props.height / nowChild.props.width) * itemWidth;
      if (i < columnNum) {
        // 第一行的
        items.push({
          // 子组件
          item: nowChild,
          // 样式
          style: {
            top: 0,
            left: itemWidth * i,
            width: itemWidth,
            height: height
          }
        });
        heightArr.push(height);
      } else {
        // 其他行
        // 最小高度
        let minHeight = Math.min(...heightArr);
        // 最小高度的索引
        let index = heightArr.indexOf(minHeight);

        items.push({
          item: nowChild,
          style: {
            top: minHeight,
            left: items[index].style.left,
            width: itemWidth,
            height: height
          }
        });
        // 更新最小高度：最小高度 + 当前组件的高
        heightArr[index] = minHeight + height;
      }
    }

    return (
      <div
        className="waterfall"
        style={{
          width: "100%",
          position: "relative"
        }}
        ref={node => (this.ref = node)}
      >
        {items.map((child, index) => (
          <div
            key={index}
            ref={`item${index}`}
            style={{
              position: "absolute",
              top: `${child.style.top}px`,
              left: `${child.style.left}px`,
              width: `${child.style.width}px`,
              height: `${child.style.height}px`,
              padding: `${gap}px`,
              boxSizing: "border-box"
            }}
          >
            {child.item}
          </div>
        ))}
      </div>
    );
  }

  componentDidMount() {
    const that = this;
    this.setState({
      itemWidth: this.setItemWidth()
    });
    window.addEventListener(
      "resize",
      function() {
        that.setState({ itemWidth: that.setItemWidth() });
      },
      true
    );
  }

  setItemWidth() {
    return this.ref.offsetWidth / this.props.columnNum;
  }
}

export default Waterfall;
