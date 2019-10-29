# Waterfall-react 瀑布流组件

### Install with npm

```bash
npm i react-waterfall-responsive
```

### demo

[demo](https://jyoketsu.github.io/react-waterfall-responsive/)

### Usage

```
<Waterfall
    columnNum={4}
    gap={5}
>
    {
        items.map((item, index) => (
            <ChildComponent
                key={index}
                width={width}
                height={height}
            />
        ))
    }
</Waterfall>
```

- columnNum：瀑布流的列数
- gap：间距
