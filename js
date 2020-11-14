JavaScript

JavaScript 是一个脚本语言。它是一个轻量级，但功能强大的编程语言。

1,在HTML中必须在<script> 与 </script> 标签之间。

也可以在<boby>和<head>

2,JavaScript 可以通过不同的方式来输出数据：

- 使用 **window.alert()** 弹出警告框。
- 使用 **document.write()** 方法将内容写到 HTML 文档中。
- 使用 **innerHTML** 写入到 HTML 元素。
- 使用 **console.log()** 写入到浏览器的控制台。

3,

语法：

**数字**可以是整数可以是小数也可以是科学计数法。

**字符串**可以用单引号也可以用双引号。

JavaScript 使用关键字 **var** 来定义变量， 使用等号来为变量赋值

**var** x, length

x = 5

length = 6

**注释**用//内容

**多行**注释以 **/\*** 开始，以 ***/** 结尾。

用分号隔开

| 语句         | 描述                                                         |
| :----------- | :----------------------------------------------------------- |
| break        | 用于跳出循环。                                               |
| catch        | 语句块，在 try 语句块执行出错时执行 catch 语句块。           |
| continue     | 跳过循环中的一个迭代。                                       |
| do ... while | 执行一个语句块，在条件语句为 true 时继续执行该语句块。       |
| for          | 在条件语句为 true 时，可以将代码块执行指定的次数。           |
| for ... in   | 用于遍历数组或者对象的属性（对数组或者对象的属性进行循环操作）。 |
| function     | 定义一个函数                                                 |
| if ... else  | 用于基于不同的条件来执行不同的动作。                         |
| return       | 退出函数                                                     |
| switch       | 用于基于不同的条件来执行不同的动作。                         |
| throw        | 抛出（生成）错误 。                                          |
| try          | 实现错误处理，与 catch 一同使用。                            |
| var          | 声明一个变量。                                               |
| while        | 当条件语句为 true 时，执行语句块。                           |

### 变量：

- 变量必须以字母开头

- 变量也能以 $ 和 _ 符号开头（不过我们不推荐这么做）

- 变量名称对大小写敏感（y 和 Y 是不同的变量）

  当您声明新变量时，可以使用关键词 "new" 来声明其类型：

  var carname=new String;
  var x=   new Number;
  var y=   new Boolean;
  var cars=  new Array;
  var person= new Object;

#### 对象

对象是变量的容器

对象的方法定义了一个函数，并作为对象的属性存储。

对象方法通过添加 () 调用 (作为一个函数)。

该实例访问了 person 对象的 fullName() 方法:

## 实例

对象的方法定义了一个函数，并作为对象的属性存储。

对象方法通过添加 () 调用 (作为一个函数)。

该实例访问了 person 对象的 fullName() 方法:

name = person.fullName();

如果你要访问 person 对象的 fullName 属性，它将作为一个定义函数的字符串返回：

name = person.fullName;
