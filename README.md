# faq-vb-cli
创建自定义的vue模板工具

### 功能
1. 从github下载模板代码到本地

### 步骤

1. 初始化项目，安装需要的工具库
````js
// 生成package.json文件
npm init -y
// 安装commander inquirer chalk ora
npm install commander inquirer chalk ora --save
````
2. 创建bin目录
- 在项目根目录下创建bin文件夹
- 在bin目录下创建vb-cli.js

3. 使用commander库定义命令行命令
````js
const program = require('commander');
program
	.command('init')
	.alias('fi')
	.description('初始化项目')
	.option('-fn, --faq-name', '项目名称')
	.action(function (option) {
    // do some works...
    console.log('初始化...');
  });
program.parse(process.argv)
// 执行 node .\bin\faq-vb-cli.js init
// 输出：=> 初始化
````
4. 以全局方式运行
   通过配置，使用[模块名] [cmd] 运行

- 配置package.json的bin字段
````json
"bin": {
  "vb-cli": "./bin/vb-cli.js"
}
````
- 执行npm run link
- 在入口文件vb-cli.js中首行添加 #! /usr/bin/env node 表明这是一个可执行的应用
- 以上步骤完成后，运行vb-cli init。输出：'初始化'

