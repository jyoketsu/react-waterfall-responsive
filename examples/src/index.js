import React from 'react';
import './index.css';
import { render } from 'react-dom';
import Waterfall from '../../src';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.columnNum = 4;
        this.columnGap = 10;
        this.rowGap = 5;
        this.state = { itemWidth: this.setItemWidth() }
    }
    render() {
        const { itemWidth } = this.state;
        const images = [
            'http://cdn-icare.qingtime.cn/AEB82EAA.jpg',
            'http://cdn-icare.qingtime.cn/AAE09617.jpg',
            'http://cdn-icare.qingtime.cn/975F1604.jpg',
            'http://cdn-icare.qingtime.cn/111D757D.jpg',
            'http://cdn-icare.qingtime.cn/4E70E5FD.jpg',
            'http://cdn-icare.qingtime.cn/D62BB7C2.jpg',
            'http://cdn-icare.qingtime.cn/7D223412.jpg',
            'http://cdn-icare.qingtime.cn/A50DF805.jpg',
            'http://cdn-icare.qingtime.cn/90D11455.jpg',
            'http://cdn-icare.qingtime.cn/2A499A33.jpg',
            'http://cdn-icare.qingtime.cn/D82F962E.jpg',
            'http://cdn-icare.qingtime.cn/5A842A52.jpg',
            'http://cdn-icare.qingtime.cn/B489E25C.jpg',
        ];
        return (
            <Waterfall
                itemWidth={itemWidth}
                columnNum={this.columnNum}
                columnGap={this.columnGap}
                rowGap={this.rowGap}
                kernel={10}
            >
                {
                    images.map((image, index) => (
                        <img key={index} src={image} width={itemWidth} />
                    ))
                }
            </Waterfall>
        );
    }

    setItemWidth() {
        return (document.body.offsetWidth - ((this.columnNum - 1) * this.columnGap)) / this.columnNum;
    }

    componentDidMount() {
        const that = this;
        this.setState({
            itemWidth: this.setItemWidth()
        });
        window.addEventListener('resize', function () {
            that.setState({ itemWidth: that.setItemWidth() })
        }, true)
    }
}
render(<App />, document.getElementById("root"));