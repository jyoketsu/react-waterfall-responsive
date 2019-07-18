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
            {
                url: 'http://cdn-icare.qingtime.cn/AEB82EAA.jpg',
                width: 2048,
                height: 1152,
            },
            {
                url: 'http://cdn-icare.qingtime.cn/4E70E5FD.jpg',
                width: 1080,
                height: 1920,
            },
            {
                url: 'http://cdn-icare.qingtime.cn/AAE09617.jpg',
                width: 1557,
                height: 1637,
            },
            {
                url: 'http://cdn-icare.qingtime.cn/111D757D.jpg',
                width: 1080,
                height: 1920,
            },
            {
                url: 'http://cdn-icare.qingtime.cn/975F1604.jpg',
                width: 750,
                height: 499,
            },
            {
                url: 'http://cdn-icare.qingtime.cn/7D223412.jpg',
                width: 1080,
                height: 1920,
            },
            {
                url: 'http://cdn-icare.qingtime.cn/A50DF805.jpg',
                width: 736,
                height: 907,
            },
            {
                url: 'http://cdn-icare.qingtime.cn/90D11455.jpg',
                width: 1080,
                height: 1920,
            },
            {
                url: 'http://cdn-icare.qingtime.cn/2A499A33.jpg',
                width: 1024,
                height: 576,
            },
            {
                url: 'http://cdn-icare.qingtime.cn/D62BB7C2.jpg',
                width: 1080,
                height: 1920,
            },
            {
                url: 'http://cdn-icare.qingtime.cn/D82F962E.jpg',
                width: 1440,
                height: 810,
            },
            {
                url: 'http://cdn-icare.qingtime.cn/B489E25C.jpg',
                width: 640,
                height: 640,
            },
            {
                url: 'http://cdn-icare.qingtime.cn/5A842A52.jpg',
                width: 1440,
                height: 810,
            },
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
                        <Image
                            key={index}
                            num={index}
                            image={image}
                            itemWidth={itemWidth}
                        />
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

class Image extends React.Component {
    render() {
        const { image, itemWidth, num } = this.props;
        return (
            <div
                className="my-image"
                style={{
                    backgroundImage: `url(${image.url})`,
                    width: `${itemWidth}px`,
                    height: `${image.height / image.width * itemWidth}px`,
                }}

            >
                <div><span>{num}</span></div>
            </div >
        )
    }
}
render(<App />, document.getElementById("root"));