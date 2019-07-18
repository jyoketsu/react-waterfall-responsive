# Waterfall-react 瀑布流组件

### demo
[demo](https://jyoketsu.github.io/react-waterfall-responsive/)
### Usage
```
<Waterfall
    itemWidth={300}
    columnNum={3}
    columnGap={10}
    rowGap={5}
    kernel={10}
>
    {
        items.map((item, index) => (
            <ChildComponent key={index}/>
        ))
    }
</Waterfall>
```
- itemWidth：元素宽度
- columnNum：瀑布流的列数
- columnGap：列间距
- rowGap：行间距
- kernel：颗粒度，越小越好，一般设为10