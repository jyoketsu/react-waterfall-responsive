# Waterfall-react 瀑布流组件

### Usage
```
<Waterfall
    columnNum={3}
    kernel={10}
>
    {
    items.map((item, index) => (
        <div
            key={index}
            height={item.height}
            style={{height: item.height}}
        >
        </div>
    ))
    }
</Waterfall> 
```
- columnNum：瀑布流的列数
- kernel：颗粒度，越小越好，一般设为10
- height：元素的属性，元素高度