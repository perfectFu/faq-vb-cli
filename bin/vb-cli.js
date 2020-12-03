#! /usr/bin/env node

const program = require('commander');
program
	.command('init')
	.alias('fi')
	.description('初始化项目')
	.option('-fn, --faq-name', '项目名称')
	.action(function (option) {
    console.log('初始化...');
  });
program.parse(process.argv)
