(function(global){
    var LoginViewModel,
    	app = global.app = global.app || {};
    
    LoginViewModel = kendo.data.ObservableObject.extend({
    
        loginSubmit:function(){
            alert("hello");
        }
    });
    app.loginService = {
        viewModel :new LoginViewModel()
    };
})(window);