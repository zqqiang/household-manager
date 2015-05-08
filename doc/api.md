美好家园 和 格家美居 接口需求文档
===============================

* 本文定义各家美居需要提供给美好家园的接口
* 接口符合HTTP协议，采用JSON格式的Restful标准

设计目标
=======

* 能够将平台登录的用户注册到格家美居
* 能够让平台用户自动登陆到格家美居在线3D设计页面
* 能够开放读取注册用户的购买信息

目录
====

* [注册接口](#注册接口)
* [登陆接口](#登陆接口)
* [读取接口](#读取接口)

注册接口
=======

* Request:
	POST http://www.gj5s.com/user/api/v1.0/Register HTTP/1.1
	Accept: aplication/json
	Content-Type: application/json; charset=UTF-8

	{
		"user_id":"xxx",
		"email":"xxx@email.com",
		"password":"xxxxxx",
		"repassword":"xxxxxx",
	}

* Response:
	HTTP/1.1 200 OK
	Content-Type: applicaion/json; charset=utf-8
	Content-Length: xx

	{
		"affected":true,
	}

登陆接口
=======

* Request:
	POST http://www.gj5s.com/user/api/v1.0/Login HTTP/1.1
	Accept: aplication/json
	Content-Type: application/json; charset=UTF-8

	{
		"user_id":"xxx",
		"password":"xxxxxx",
	}

* Response:
	HTTP/1.1 200 OK
	Content-Type: applicaion/json; charset=utf-8
	Content-Length: xx

	{
		"affected":true,
	}

读取接口
=======

* Request:
	GET http://www.gj5s.com/api/v1.0/Order HTTP/1.1
	Accept: aplication/json
	Content-Type: application/json; charset=UTF-8

* Response:
	HTTP/1.1 200 OK
	Content-Type: applicaion/json; charset=utf-8
	Content-Length: xx

	[{
		"commodity":"xxx",
		"price":"xxx",
		"amount":"xxx",
		"total":"xxx",
		"description":"xxx",
	}, {
		......
	}]

[回到目录](#目录)
