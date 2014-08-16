(function(global){
    var SignupViewModel,
    	app = global.app = global.app || {};
    
    SignupViewModel = kendo.data.ObservableObject.extend({
    
        show:function(){
       	
            //date time picker
           $("#dob").kendoDatePicker({
               animation: {
               close: {
                 effects: "fadeOut zoom:out",
                 duration: 800
               },
               open: {
                 effects: "fadeIn zoom:in",
                 duration: 800
               }
              },
               min: new Date(1986, 0, 1)
           });
            
            //state drop down list
            $("#state").kendoDropDownList({
                optionLabel: "Select state...",
                dataTextField: "statename",
                dataValueField: "stateid",
                dataSource: {
                    transport:{
                        read:{
                        url:"project/data/state.json",
                        dataType:"json"
                        }
                    }
                }
            }).data("kendoDropDownList");
            
            //city drop down list
            $("#city").kendoDropDownList({
                autoBind: false,
                cascadeFrom: "state",
                optionLabel: "Select City...",
                dataTextField: "cityname",
                dataValueField: "cityid",
                dataSource: {
                    transport:{
                    read:{
                        url:"project/data/city.json",
                        dataType:"json"
                    }
                    }
                }
            }).data("kendoDropDownList");
            
            //blood group data
            $("#bldgrp").kendoDropDownList({
                 optionLabel: "Select Blood Group...",
                dataSource: {
                    data: ["A+", "B+","A-","B-","O+","O-","AB+","AB-"]
                  }
            });
            
            //Validation
            $('#signupForm').validate({
                rules:{
                    sname:true
                },
                messages:{
                    sname:"This value is required"
                }
            });
            
            
        },
        
        signup:function(){
          /* var status = $('#signupForm').valid();
            if(status === false)
            {
                return status;
            }*/
        }
    });
    app.signupService = {
        viewModel :new SignupViewModel()
    };
})(window);