#                    css中的盒子模型

#### 盒子模型简介：

盒子模型是把HTML页面中的布局元素当做一个矩形盒子，也就是一个可以盛放内容的容器

自己理解：就是可以在里面放入自己想要放入的东西，使这个盒子里面呈现出自己想要的一种样子

#### 组成部分：

- 内容
- 边框
- 内边距   内容与边框的距离
- 外边框   盒子边框与相邻盒子边框的距离

#### 使用方法：

- ##### 盒子边框

语法：border:border-width||border-style||border-color

- 属性： border-width:定义边框粗细，默认单位px
- ​         border-style：边框的样式
- ​           none:没有边框
- ​           solid：边框为单实线
- ​           dashed：边框为虚线
- ​          dotted：边框为点线
- ​          border-color：边框颜色

例子：div{

​       width：500px；

​      height：500px；

border-width:5px;

border-style:solid;

border-color:red;

border:5px solid res;

}

可以单独改变边框：

|          上边框          |           下边框            |          左边框          |            右边框            |
| :----------------------: | :-------------------------: | :----------------------: | :--------------------------: |
| border-top-style：样式； | border-bottom-style：样式； | border-left-style：样式; |  border-right-style：样式；  |
|                          |                             |                          |  boder-right-width：样式；   |
|                          |                             |                          |  border-right-color：样式；  |
|                          |                             |                          | border-right：宽度 样式 颜色 |

##### 表格细线边框

属性：border-collapse：collapse

例子:th,

​         td,

​         table{

​         border：1px solid red；

​         border-collapse：collap；

​          }

#### 内边距：

边框和内容的距离

属性：

|      属性      |   作用   |
| :------------: | :------: |
|  padding-left  | 左内边距 |
| padding-right  | 右内边距 |
|  padding-top   | 上内边距 |
| padding-bottom | 下内边距 |

简写：

padding：10px（上下左右都为10px）

padding：10px 20px（上下10px 左右20px）

padding：10px 20px 30px （上10px 左右20px 下30px）

padding：10px 20px 30px 40px （上10px 右20px 下30px 左40px（顺时针））

记忆方法：先分上下再分左右

注意：添加内边距之后，盒子边距会变大

##### 内盒尺寸计算

盒子高度=内边距上下宽度+内容高度+边框宽度

盒子宽度=内边距左右宽度+内容高度+边框宽度

pandding不影响盒子大小的情况

结论：结果盒子没有指定宽度，则不会被撑开

#### 外边距

盒子与相邻盒子的距离

属性：与内边距相似，将padding替换为margin

简写：与内边距相同，上右下左

##### 实现盒子居中对齐

div{

width：300px；（盒子必须要有宽度）

/*让块级盒子居中对齐水平，左右外边距设置为auto*/

margin：0 auto；

/*其他写法*/

margin：auto；

/*其他写法*/

margin-left：auto；

margin-right：auto；

}

##### 文字居中与盒子居中

p{

/*文本内容从，行内元素，行内块元素*/

text-algin：center；

}

div{

/*块元素居中*/

margin：0 auto；

}

##### 插入图片与背景图片区别

插入图片：常用，一般做产品展示类

移动位置只能靠盒子模型padding margin

背景图片：一般用作小图标或者超大图片

移动位置通过background-position

例子：

<!DOCTYPE html>
<html lang="en">
    <head>    <meta charset="UTF-8">
        <title>Title</title>
        <style>        .pic,        .bg{            width: 2000px;            height: 1000px;            background-color: aquamarine;        }        .pic img {            margin: 200px;        }        .bg {            /*padding: 200px;*/            background-image: url(img/background.jpeg);            background-repeat: no-repeat;            background-position: 100px 100px;        }    
        </style>
    </head>
    <body>
    <div class="pic">        
        <img src="img/background.jpeg" alt="">
    </div>    
    <div class="bg">
    </div>
    </body>
</html>

清楚默认内外边距

为了更灵活方便地控制网页中的元素，制作网页时，我们需要将元素的默认内外边距清除

代码

\* {
  padding:0;     /* 清除内边距 */
  margin:0;     /* 清除外边距 */
}

行内元素为了照顾兼容性， 尽量只设置左右内外边距， 不要设置上下内外边距。

#### 外边距合并

##### 相邻块元素垂直外边距的合并

1.当上下相邻的两个块元素相遇时，如果上面的元素有下外边距margin-bottom
2.下面的元素有上外边距margin-top，则他们之间的垂直间距不是margin-bottom与margin-top之和
3.取两个值中的较大者这种现象被称为相邻块元素垂直外边距的合并（也称外边距塌陷）。
解决方案：尽量给只给一个盒子添加margin值。

##### 嵌套块元素垂直外边距的合并（塌陷）

1.对于两个嵌套关系的块元素，如果父元素没有上内边距及边框
2.父元素的上外边距会与子元素的上外边距发生合并
3.合并后的外边距为两者中的较大者
解决方案：

可以为父元素定义上边框。
可以为父元素定义上内边距
可以为父元素添加overflow:hidden。

##### 盒子模型布局稳定性

width 、 padding 、margin
稳定性： width > padding > margin
原因：

- margin会有合并的问题
  padding会撑大盒子，需要计算盒子数据