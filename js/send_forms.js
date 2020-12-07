function Order_apart1(){
    var data_1 = $(".Mod2_Name").val();
    var data_2 = $(".Mod2_Phone").val();
    var date_1 = $(".Ap1_date1").val();
    var date_2 = $(".Ap1_date2").val();
    
    var status = 0;
            
    $(".Mod2_Name").css('background-color', '#ffffff');        
    $(".Mod2_Phone").css('background-color', '#ffffff');
            
    if(data_1 == "" || data_2 == ""){
        status = 1;
    }
    if(status == 1){
        if(data_1 == ""){
            $(".Mod2_Name").css('background-color', '#ffd6d6');
        }
        if (data_2 == ""){
            $(".Mod2_Phone").css('background-color', '#ffd6d6');
        }
    }
    else{
        $.ajax({
            type: "POST",
            url: "php/Order_apart1.php",
            data: "&data_1="+data_1+"&data_2="+data_2+"&date_1="+date_1+"&date_2="+date_2	
        });
                
        //Очистка всех полей
        $(".Mod2_Name").val('');
        $(".Mod2_Phone").val('');
        //Показываем информацию в модальном окне
        $("#send_header2").css("display","none");
        $(".M2_info").css("display","block");
        //Закрывает модальное окно через 2 сек.
        setTimeout('$(".modal_close").click();', 2000);
        //Через 2,2 сек. скрываем информацию и показываем форму
        setTimeout('$(".M2_info").css("display","none"); $("#send_header2").css("display","block");', 2200);
    }
}

function Order_apart2(){
    var data_1 = $(".Mod3_Name").val();
    var data_2 = $(".Mod3_Phone").val();
    var date_1 = $(".Ap2_date1").val();
    var date_2 = $(".Ap2_date2").val();
    
    var status = 0;
            
    $(".Mod3_Name").css('background-color', '#ffffff');        
    $(".Mod3_Phone").css('background-color', '#ffffff');
            
    if(data_1 == "" || data_2 == ""){
        status = 1;
    }
    if(status == 1){
        if(data_1 == ""){
            $(".Mod3_Name").css('background-color', '#ffd6d6');
        }
        if (data_2 == ""){
            $(".Mod3_Phone").css('background-color', '#ffd6d6');
        }
    }
    else{
        $.ajax({
            type: "POST",
            url: "php/Order_apart2.php",
            data: "&data_1="+data_1+"&data_2="+data_2+"&date_1="+date_1+"&date_2="+date_2	
        });
                
        //Очистка всех полей
        $(".Mod3_Name").val('');
        $(".Mod3_Phone").val('');
        //Показываем информацию в модальном окне
        $("#send_header3").css("display","none");
        $(".M3_info").css("display","block");
        //Закрывает модальное окно через 2 сек.
        setTimeout('$(".modal_close").click();', 2000);
        //Через 2,2 сек. скрываем информацию и показываем форму
        setTimeout('$(".M3_info").css("display","none"); $("#send_header3").css("display","block");', 2200);
    }
}

function OrderCall_header(){
    var data_1 = $(".Mod4_Name").val();
    var data_2 = $(".Mod4_Phone").val();
    
    var status = 0;
            
    $(".Mod4_Name").css('background-color', '#ffffff');        
    $(".Mod4_Phone").css('background-color', '#ffffff');
            
    if(data_1 == "" || data_2 == ""){
        status = 1;
    }
    if(status == 1){
        if(data_1 == ""){
            $(".Mod4_Name").css('background-color', '#ffd6d6');
        }
        if (data_2 == ""){
            $(".Mod4_Phone").css('background-color', '#ffd6d6');
        }
    }
    else{
        $.ajax({
            type: "POST",
            url: "php/OrderCall_header.php",
            data: "&data_1="+data_1+"&data_2="+data_2	
        });
                
        //Очистка всех полей
        $(".Mod4_Name").val('');
        $(".Mod4_Phone").val('');
        //Показываем информацию в модальном окне
        $("#send_header4").css("display","none");
        $(".M4_info").css("display","block");
        //Закрывает модальное окно через 2 сек.
        setTimeout('$(".modal_close").click();', 2000);
        //Через 2,2 сек. скрываем информацию и показываем форму
        setTimeout('$(".M4_info").css("display","none"); $("#send_header4").css("display","block");', 2200);
    }
}

function OrderCall_footer(){
    var data_1 = $(".Mod5_Name").val();
    var data_2 = $(".Mod5_Phone").val();
    
    var status = 0;
            
    $(".Mod5_Name").css('background-color', '#ffffff');        
    $(".Mod5_Phone").css('background-color', '#ffffff');
            
    if(data_1 == "" || data_2 == ""){
        status = 1;
    }
    if(status == 1){
        if(data_1 == ""){
            $(".Mod5_Name").css('background-color', '#ffd6d6');
        }
        if (data_2 == ""){
            $(".Mod5_Phone").css('background-color', '#ffd6d6');
        }
    }
    else{
        $.ajax({
            type: "POST",
            url: "php/OrderCall_footer.php",
            data: "&data_1="+data_1+"&data_2="+data_2	
        });
                
        //Очистка всех полей
        $(".Mod5_Name").val('');
        $(".Mod5_Phone").val('');
        //Показываем информацию в модальном окне
        $("#send_header5").css("display","none");
        $(".M5_info").css("display","block");
        //Закрывает модальное окно через 2 сек.
        setTimeout('$(".modal_close").click();', 2000);
        //Через 2,2 сек. скрываем информацию и показываем форму
        setTimeout('$(".M5_info").css("display","none"); $("#send_header5").css("display","block");', 2200);
    }
}

function OrderAp_Main(){
    var data_1 = $(".MName1").val();
    var data_2 = $(".MPhone1").val();
    var status = 0;
            
    $(".MName1").css('background-color', '#ffffff');        
    $(".MPhone1").css('background-color', '#ffffff');
            
    if(data_1 == "" || data_2 == ""){
        status = 1;
    }
            
    if(status == 1){
        if(data_1 == ""){
            $(".MName1").css('background-color', '#ffd6d6');
        }
        if (data_2 == ""){
            $(".MPhone1").css('background-color', '#ffd6d6');
        }
    }
    else{
        $.ajax({
            type: "POST",
            url: "php/OrderAp_Main.php",
            data: "&data_1="+data_1+"&data_2="+data_2	
        });
                
        $(".MName1").val('');
        $(".MPhone1").val('');
        $("#StartLink_mod").click();
        //Закрывает модальное окно через 2 сек.
        setTimeout('$(".modal_close").click();', 2000);
    }
}

function Order_Form1(){
    var data_1 = $(".MName2").val();
    var data_2 = $(".MPhone2").val();
    var status = 0;
            
    $(".MName2").css('background-color', '#ffffff');        
    $(".MPhone2").css('background-color', '#ffffff');
            
    if(data_1 == "" || data_2 == ""){
        status = 1;
    }
            
    if(status == 1){
        if(data_1 == ""){
            $(".MName2").css('background-color', '#ffd6d6');
        }
        if (data_2 == ""){
            $(".MPhone2").css('background-color', '#ffd6d6');
        }
    }
    else{
        $.ajax({
            type: "POST",
            url: "php/Order_Form1.php",
            data: "&data_1="+data_1+"&data_2="+data_2	
        });
                
        $(".MName2").val('');
        $(".MPhone2").val('');
        $("#StartLink_mod").click();
        //Закрывает модальное окно через 2 сек.
        setTimeout('$(".modal_close").click();', 2000);
    }
}

function Order_Form2(){
    var data_1 = $(".MName3").val();
    var data_2 = $(".MPhone3").val();
    var status = 0;
            
    $(".MName3").css('background-color', '#ffffff');        
    $(".MPhone3").css('background-color', '#ffffff');
            
    if(data_1 == "" || data_2 == ""){
        status = 1;
    }
            
    if(status == 1){
        if(data_1 == ""){
            $(".MName3").css('background-color', '#ffd6d6');
        }
        if (data_2 == ""){
            $(".MPhone3").css('background-color', '#ffd6d6');
        }
    }
    else{
        $.ajax({
            type: "POST",
            url: "php/Order_Form2.php",
            data: "&data_1="+data_1+"&data_2="+data_2	
        });
                
        $(".MName3").val('');
        $(".MPhone3").val('');
        $("#StartLink_mod").click();
        //Закрывает модальное окно через 2 сек.
        setTimeout('$(".modal_close").click();', 2000);
    }
}

function Order_Form3(){
    var data_1 = $(".MName4").val();
    var data_2 = $(".MPhone4").val();
    var status = 0;
            
    $(".MName4").css('background-color', '#ffffff');        
    $(".MPhone4").css('background-color', '#ffffff');
            
    if(data_1 == "" || data_2 == ""){
        status = 1;
    }
            
    if(status == 1){
        if(data_1 == ""){
            $(".MName4").css('background-color', '#ffd6d6');
        }
        if (data_2 == ""){
            $(".MPhone4").css('background-color', '#ffd6d6');
        }
    }
    else{
        $.ajax({
            type: "POST",
            url: "php/Order_Form3.php",
            data: "&data_1="+data_1+"&data_2="+data_2	
        });
                
        $(".MName4").val('');
        $(".MPhone4").val('');
        $("#StartLink_mod").click();
        //Закрывает модальное окно через 2 сек.
        setTimeout('$(".modal_close").click();', 2000);
    }
}

function Count_costA1(){
        var date_1 = $(".Ap1_date1").val();
        var date_2 = $(".Ap1_date2").val();
        var pattern = /([0-2]\d|3[01])\.(0\d|1[012])\.(\d{4})/;
        var count = 0;
    
        $(".Ap1_date1").css('background-color', '#ffffff');        
        $(".Ap1_date2").css('background-color', '#ffffff');
        
        
        if(date_1 == "" || date_2 == ""){
            if(date_1 == ""){
                $(".Ap1_date1").css('background-color', '#ffd6d6');
            }
            if (date_2 == ""){
                $(".Ap1_date2").css('background-color', '#ffd6d6');
            }
        }else{
            if(pattern.test(date_1) || pattern.test(date_2)){
                if(pattern.test(date_1)){
                    count++;
                }else{
//                    $(".Ap1_date1").css('background-color', '#ffd6d6');
//                    alert('Неверный формат даты!');
                }
                if(pattern.test(date_2)){
                    count++;
                }else{
//                    $(".Ap1_date2").css('background-color', '#ffd6d6');
//                    alert('Неверный формат даты!');
                }
            }else{
//                $(".Ap1_date1").css('background-color', '#ffd6d6');
//                $(".Ap1_date2").css('background-color', '#ffd6d6');
//                alert('Неверный формат даты!');
            }
        }
        
        if(count == 2){
            $.ajax({
                type: "POST",
                url: "php/Count_cost1.php",
                data: "&date_1="+date_1+"&date_2="+date_2,
                success: function(data){
                    if(data == 0){
                        $(".Ap1_cost").html('Неверный ввод данных!');
                    }else{
                        $(".Ap1_date1").css('background-color', '#ffffff');        
                        $(".Ap1_date2").css('background-color', '#ffffff');
                        $(".Ap1_cost").html('$'+data);
                    }
                }
            });
        }
}

function Count_costA2(){
    var date_1 = $(".Ap2_date1").val();
        var date_2 = $(".Ap2_date2").val();
        var pattern = /([0-2]\d|3[01])\.(0\d|1[012])\.(\d{4})/;
        var count = 0;
    
        $(".Ap2_date1").css('background-color', '#ffffff');        
        $(".Ap2_date2").css('background-color', '#ffffff');
        
        
        if(date_1 == "" || date_2 == ""){
            if(date_1 == ""){
                $(".Ap2_date1").css('background-color', '#ffd6d6');
            }
            if (date_2 == ""){
                $(".Ap2_date2").css('background-color', '#ffd6d6');
            }
        }else{
            if(pattern.test(date_1) || pattern.test(date_2)){
                if(pattern.test(date_1)){
                    count++;
                }else{
//                    $(".Ap2_date1").css('background-color', '#ffd6d6');
//                    alert('Неверный формат даты!');
                }
                if(pattern.test(date_2)){
                    count++;
                }else{
//                    $(".Ap2_date2").css('background-color', '#ffd6d6');
//                    alert('Неверный формат даты!');
                }
            }else{
//                $(".Ap2_date1").css('background-color', '#ffd6d6');
//                $(".Ap2_date2").css('background-color', '#ffd6d6');
//                alert('Неверный формат даты!');
            }
        }
        
        if(count == 2){
            $.ajax({
                type: "POST",
                url: "php/Count_cost2.php",
                data: "&date_1="+date_1+"&date_2="+date_2,
                success: function(data){
                    if(data == 0){
                        $(".Ap2_date1").css('background-color', '#ffd6d6');
                        $(".Ap2_date2").css('background-color', '#ffd6d6');
                        alert('Значение даты задаётся от меньшего к большему!');
                    }else{
                        $(".Ap2_date1").css('background-color', '#ffffff');        
                        $(".Ap2_date2").css('background-color', '#ffffff');
                        $(".Ap2_cost").html('$'+data);
                    }
                }
            });
        } 
}

