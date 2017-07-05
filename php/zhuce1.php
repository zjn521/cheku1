<?php
	//
	header("Content-type","text/html;charset=utf-8");
	//1、建立连接（搭桥）
	$conn = mysql_connect("localhost:3306","root","qianfeng");
	//2、选择数据库
	mysql_select_db("gt",$conn);
	$shouji=$_POST["youxiang"];
	$mima=$_POST["mima"];
	//3、执行SQL语句
	//$sqlStr ="insert into stuInfo(stuId,stuName,stuSex,stuAge) values('170201','蒲晨辉','男',18)";
	//$sqlStr ="insert into stuInfo(stuId,stuName,stuSex,stuAge) values('170204','刘德华','男',50)";
	$sqlStr ="insert into user(userName,userPass) values('".$shouji."','".$mima."')";
	mysql_query($sqlStr,$conn);
	
	//4、关闭数据库
	mysql_close($conn);
	echo "1";
?>