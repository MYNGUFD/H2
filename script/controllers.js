
// 实例一个模块，用来专门管理所有的控制器
angular.module('Controllers', [])
     
.controller('NavController', ['$scope', function ($scope) {
	  $scope.navs=[
	  {link:'views/reg.html',src:'public/images/nav3.png',text:'挂号预约'},
	  {link:'views/buy.html',src:'public/images/nav6.png',text:'购买药物'},
	  {link: 'views/call.html',src:'public/images/nav4.png',text:'紧急求救'},
	  {link:'views/collect.html',src:'public/images/nav7.png',text:'收藏阅览'},
	  {link:'views/mes.html',src:'public/images/nav0.png',text:'信息档案'},
	  {link:'views/apply.html',src:'public/images/nav5.png',text:'医疗报销'}
	  ];
}])
//个人信息的内容
.controller('selfMessage',['$scope',function($scope){
	$scope.selfNavs=[
	   {link:'views/selfMessage.html',text:'个人信息'},
       {link:'views/selfMessage.html',text:'修改密码'},
        {link:'#',text:'退出登录'},
       {link:'views/selfMessage.html',text:'关于我们'},

	]
}])
//医疗信息公告。每一条详细的内容
.controller('hosMessage',['$scope','$http',function($scope,$http){
	  //获取后台的医疗信息
	  //医疗信息包括题目、发布时间、内容
	  $http({
	  	url:'./api/messsge.php',
	  	method:'get'
	  }).success(function(info){
	  	$scope.infomessage = info;
	  })
}])
//预约医生的信息
.controller('regDoctor',['$scope','$http',function($scope,$http){

	$http({
		url:'../api/regDoc.php',
		method:'get'
	}).success(function(info){
		 $scope.doctor=info;
	})
}])
.controller('call',['$scope',function($scope){
	$scope.phoneNumber=[
	  {address:'长安校区', phone:'1548141'},
	  {address:'太白校区', phone:'1548141'},
	  {address:'长安校区' ,phone:'1548141'},
	  {address:'桃园', phone:'1548141'},
	  {address:'长安校区', phone:'1548141'}
	];
}])
//应用收藏
.controller('collect',['$scope',"$http",function($scope,$http){
	$scope.collect=[];
	  $http({
	  	  url:'../api/collect.php',
	  	  method:'get'
	  }).success(function(info){
	  	$scope.collect=info;
	  	$scope.name=$scope.collect.name;
	  	$scope.mfunction=$scope.collect.function;
	  })
}])
//医疗报销
.controller('apply',['$scope',"$http",function($scope,$http){
	$http({
		url:'../api/apply.php',
		method:'get'
	}).success(function(info){
	      $scope.apply=info;
	      console.log(info);
	})
       	      
}])
//疫苗注射数据
.controller('mesMec',['$scope',"$http",function($scope,$http){
	$http({
		url:'../api/in.php',
		method:'get'
	}).success(function(info){
	      $scope.inMech=info;
	})
       	      
}])
//新闻的内容获取
.controller('news',['$scope','$http','$location',function($scope,$http,$location){
	
	//首先要获取到当前页面的url后面的index
	$scope.index=$location.search().index;
     $http({
     	url:'../api/getNews.php',
     	method:'get',
     	data:{
     		key:1
//   		key:$scope.index
     	},
     	headers: {
					'Content-Type': 'application/x-www-form-urlencoded'
				}
     }).success(function(info){
     	console.log($scope.index);
     	 $scope.oneNews=info;
     	 console.log(info);
     })
}])
//对于侧面栏的部分
.controller('left',['$scope','$location','$http',function($scope,$location,$http){
	    $scope.text = $location.search().text;
	    console.log($scope.text);
}])
