## 存储的数据构成
数组:数组中的每一项为对象(注册登录的学生)
对象中存储
用户名（字符串形式）,密码(字符串形式),姓名(字符串形式),年龄(数字),性别(字符串),
成绩(数组)每一项为每次获得的成绩,
排名(数组)每一项为每次比赛的排名，
做该套题的人数,
日记(数组类型,数组每一项为总结的错误)


## 路由跳转
路由默认跳转到 答题页面
注册路由跳转到登录页面
登录页面跳转到答题页面(传递params参数,传递用户名是谁)
答题页面跳转到成绩与排名页面(传递query参数,传递成绩与排名)
答题页面的日记查看跳转到article页面(搜索框可以搜索指定的日记内容,即点击提交后跳转到artcile路由,并将写的日记通过全局事件总线传递过去)

##  语文区
分为诗词  组词

##  数学区
加法
减法
乘法
除法
上一题的按钮  下一题的按钮   提交按钮

 ## 英语区

 ## 抽奖功能,如果分数到了可以去抽奖




