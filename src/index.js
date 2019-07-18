import React, { Component } from 'react';

class Waterfall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemStyleList: null
        }
    }

    render() {
        const { itemStyleList } = this.state;
        // 颗粒度，列数
        const { columnNum, columnGap, rowGap, children, itemWidth } = this.props;

        return (
            <div
                className="waterfall"
                style={itemStyleList ? {
                    width: `${itemWidth * columnNum + (columnNum - 1) * columnGap}px`,
                    display: 'grid',
                    gridTemplateColumns: `repeat(${columnNum}, 1fr)`,
                    gridGap: `${rowGap}px ${columnGap}px`,
                    justifyItems: 'center',
                } : {}}
            >
                {children.map((child, index) => (
                    <div
                        key={index}
                        ref={`item${index}`}
                        style={itemStyleList ? itemStyleList[index] : {}}
                    >
                        {child}
                    </div>
                ))}
            </div>
        );
    }

    componentDidMount() {
        // 颗粒度，列数
        const { kernel, columnNum, } = this.props;
        this.columns = Array(columnNum).fill(0);
        let itemStyleList = [];
        const keys = Object.keys(this.refs);
        for (let i = 0; i < keys.length; i++) {
            // 元素高
            const height = this.refs[keys[i]].clientHeight;
            // 列
            // const gridColumn = (i + 1) % columnNum === 0 ? columnNum : (i + 1) % columnNum;
            const gridColumn = this.columns.indexOf(Math.min(...this.columns)) + 1;
            // 开始行
            const gridStart = this.columns[gridColumn - 1] + 1;
            // 结束行
            const gridEnd = gridStart + Math.ceil(height / kernel) - 1;
            const gridRow = `${gridStart} / ${gridEnd}`;
            this.columns[gridColumn - 1] = gridEnd;
            itemStyleList.push({
                gridRow: gridRow,
                gridColumn: gridColumn,
            });
        }
        this.setState({ itemStyleList: itemStyleList });
    }
}

export default Waterfall;