美好家园 和 格家美居 接口需求文档
===============================

* 本文定义各家美居需要提供给美好家园的接口
* 接口符合HTTP协议，采用JSON格式的Restful标准

目录
====

* [注册接口](#注册接口)
* [读取接口](#读取接口)

注册接口
=======
	POST /api/v1.0/Register
	{
		"user_id":"xxx",
		"email":"xxx@email.com",
		"password":"xxxxxx",
		"repassword":"xxxxxx",
	}

读取接口
=======
	GET /api/v1.0/Purchase

	Response Payload:
	{

	}

[回到目录](#目录)
