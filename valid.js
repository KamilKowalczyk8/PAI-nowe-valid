 var zle=": ";
        var imie = document.getElementById("imie");
         var email = document.getElementById("email");
         var nazwisko = document.getElementById("nazwisko");
        var haslo = document.getElementById("haslo");
        var haslo1 = document.getElementById("haslo1");
         var check = document.getElementById("check");
        var punkty=0;
        function klik()
        {
        if(imie.value.match(/^[A-Z]{1}[a-z]+/))
        {}
        else
        {
        zle=zle+" Name ";
        punkty++;
        }
        if(nazwisko.value.match(/^[A-Z]{1}[a-z]+/) && imie.value!=nazwisko.value)
        {}
        else
        {
        zle=zle+" Surname ";
        punkty++;
        }
        if(email.value.match(/^[a-z\d]+[\w\d.-]*@(?:[a-z\d]+[a-z\d-]+\.){1,5}[a-z]{2,6}$/i))
        {}
        else
        {zle=zle+" Email ";
        punkty++;
        }
        if(haslo.value.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/))
        {}
        else
        {
        zle=zle+" Password ";
        punkty++;
        }
        if(haslo.value==haslo1.value && haslo.value.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/))
        {}
        else
        {                
        zle=zle+" Confirmed password ";
        punkty++;
        }
        if(check.checked == true)
        {}
        else
        {
        zle=zle+"\n Accept The Terms";
        punkty++;
        }
        if(punkty==0)
        {
        alert("Registration was successful")
        }
        else
        {
        alert("Wrong data "+zle);
        }
        zle=": ";
        punkty=0;
        }