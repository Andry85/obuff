$(document).ready(function(){

    $("#form").validate({
        
       rules:{ 
        
            fio:{
                required: true,
                minlength: 4,
                maxlength: 50,
            },
            
            email:{
                required: true,
                email: true
            },
            phone:{
                required: true
            }  
        
       },
       
       messages:{
        
            fio:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 50",
            },
            
            email:{
                required: "Это поле обязательно для заполнения",
                email: "Пожалуйста, введите адрес электронной почты",
            },

            phone:{
                required: "Это поле необходимо заполнить."
            }    
        
       }

    
    });


    $("#myaccount").validate({
        
       rules:{ 
        
            fio:{
                required: true,
                minlength: 4,
                maxlength: 50,
            },
            email:{
                required: true,
                email: true
            },
            phone:{
                required: true
            },
            password:{
                required: true,
                minlength: 4,
                maxlength: 50,
            },
            passwordRepeat:{
                required: true,
                minlength: 4,
                maxlength: 50,
            }

        
       },
       
       messages:{
        
            fio:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 50",
            },
            
            email:{
                required: "Это поле обязательно для заполнения",
                email: "Пожалуйста, введите адрес электронной почты",
            },

            phone:{
                required: "Это поле необходимо заполнить."
            },

            password:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 50",
            },

            passwordRepeat:{
                required: "Это поле обязательно для заполнения",
                minlength: "Логин должен быть минимум 4 символа",
                maxlength: "Максимальное число символо - 50",
            }

        
       }

    
    });




    

}); //end of ready