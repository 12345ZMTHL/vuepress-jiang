# table表格内容过长处理

**table表格内容太长，过长内容使用......代替，设置如下样式**

``` css
table {
     //必须，表格宽度不随文字增多而变长
    table-layout: fixed;
}
td {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
```

* table-layout: fixed 由于table-layout的默认值是auto，即table的宽高将取决于其内容的多寡，如果内容的体积无法估测，那么最终表格的呈现形式也无法保证了，fixed一下就好了。（注意：此样式是关键）
* white-space: nowrap 是为了保证无论单元格（TD）中文本内容有多少，都不会自动换行，此时多余的内容会在水平方向撑破单元格。
* overflow: hidden 隐藏超出单元格的部分。
* text-overflow: ellipsis 将被隐藏的那部分用省略号代替。