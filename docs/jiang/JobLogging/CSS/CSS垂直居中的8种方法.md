# CSS垂直居中的8种方法

## 通过verticle-align:middle实现CSS垂直居中

通过vertical-align:middle实现CSS垂直居中是最常使用的方法，但是有一点需要格外注意，vertical生效的前提是元素的display：inline-block。



## 通过display:flex实现CSS垂直居中

随着越来越多浏览器兼容CSS中的flexbox特性，所以现在通过“display:flex”实现CSS水平居中的方案也越来越受青睐。通过display:flex实现CSS垂直居中的方法是给父元素display:flex;而子元素align-self:center;这个跟CSS水平居中的原理是一样的，只是在flex-direction上有所差别，一个是row(默认值)，另外一个是column。



## 通过伪元素:before实现CSS垂直居中

具体方式是为父元素添加伪元素:before，使得子元素实现垂直居中



## 通过display:table-cell实现CSS垂直居中

给父元素display:table，子元素display：table-cell的方式实现CSS垂直居中。



## 通过隐藏节点实现CSS垂直居中

创建一个隐藏节点#hide，使得隐藏节点的height值为剩余高度的一半即可。这种方法也适用于CSS水平居中，原理一样。



## 已知父元素高度通过transform实现CSS垂直居中

给子元素的position:relative，再通过translateY即可定位到垂直居中的位置。



## 到垂直居中的位置。



## 通过line-height实现CSS垂直居中。

设置子元素的line-height值等于父元素的height，这种方法适用于子元素为单行文本的情况。