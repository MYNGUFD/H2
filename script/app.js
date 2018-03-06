
var myHospital = angular.module('cHospital', ['ngRoute', 'Controllers', 'Directives']);
//这个是页面跳转
myHospital.config(['$routeProvider', function ($routeProvider) {

	$routeProvider.when('/today', {
		templateUrl: './views/today.html',
		controller: 'TodayController'
	})
	.when('/older', {
		templateUrl: './views/older.html',
		controller: 'OlderController'
	})
	.otherwise({
		redirectTo: '/today'
	});

}]);
myHospital.config(['$locationProvider', function($locationProvider) {  
         // $locationProvider.html5Mode(true);  
         $locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });
       }])

myHospital.run(['$rootScope', function ($rootScope) {
	// 设置类名初始值
	$rootScope.collapsed = false;

	// 全局方法
	$rootScope.toggle = function () {
		// console.log(1);
		// 改变类名初始值
		$rootScope.collapsed = !$rootScope.collapsed;
	//当页面消失时，有一个欢动的过程
	
		// 获取所有导航
		var navs = document.querySelector('.selfMessage');
        if($rootScope.collapsed) {
			 console.log('打开');
			
				navs.style.transform = 'translate(0)';
				navs.style.transitionDelay = '0.2s';
		} else {
			  
				navs.style.transform = 'translate(-100%)';
				navs.style.transitionDelay = '';
			}
		}
}]);