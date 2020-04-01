var x = document.getElementById("emaila");
var p = document.getElementById("passworda");

document.getElementById("formA").addEventListener("submit",(ee)=>{
    if (x.value=="admin@gmail.com" && p.value=="qwerty"){
        swal({
            title:'Welcome',
            html:'Access granted',
            type:'success'
        });
        setTimeout(() => {
            loadPage();
        }, 3);
    } else {
        swal({
            title:'Error',
            html:'Access denied',
            type:'error'
        });

    }
    function loadPage(){
        window.location.href="./admin/admin.html"
        
    }
});