#! /usr/bin/env node

const program = require('commander')
const inquirer = require('inquirer')
program
	.command('init')
	.alias('fi')
	.description('初始化项目')
	.option('-fn, --faq-name<projectName>', '项目名称')
	.option('-sa, --sass', '启用sass')
	.option('-le, --less', '启用less')
	.action(function (option) {
		console.log('初始化...')
		const config = Object.assign(
			{
				projectName: '',
				desc: '',
				sass: false,
				less: false,
			},
			option
		)
		const promp = []
		if (!config.projectName) {
			promp.push({
				type: 'input',
				name: 'projectName',
				message: '请输入项目名称',
				validate: function (input) {
					if (!input) {
						return '不能为空'
					}
					return true
				},
			})
		}
		if (!config.desc) {
			promp.push({
				type: 'input',
				name: 'desc',
				message: '请输入项目描述',
			})
		}
		if (config.sass === false && config.less === false) {
			promp.push({
				type: 'list',
				name: 'cssPretreatment',
				message: '想用什么css处理器呢？',
				choices: [
					{
						name: 'sass/compass',
						value: 'sass',
					},
					{
						name: 'less',
						value: 'less',
					},
				],
			})
		}
		inquirer.prompt(promp).then(answers => {
			console.log(answers)
		})
	})
program.parse(process.argv)
