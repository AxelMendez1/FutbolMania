//Firebase
var firebaseConfig = {
    apiKey: "AIzaSyADaS2xQsnpqPL6NzxEF4eu08BWaE69wPc",
    authDomain: "futbolmania-2b313.firebaseapp.com",
    databaseURL: "https://futbolmania-2b313.firebaseio.com",
    projectId: "futbolmania-2b313",
    storageBucket: "futbolmania-2b313.appspot.com",
    messagingSenderId: "12192940854",
    appId: "1:12192940854:web:f4f1e3c997ef74a18c6997"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//GLOBAL
var d= new Date();
var t=d.getTime();
var counter=t;
//FORM
document.getElementById("form").addEventListener("submit",(e)=>{
    var order= document.getElementById("order").value;
    var total= document.getElementById("total").value;
    e.preventDefault();
    createOrder(order,total);
    FormData.reset();
});
//CREAR NUEVA ORDEN
function createOrder(orden,total){
    counter+=1;
    var newOrder={
        id:counter,
        order:order,
        total:total
    }
    let db=firebase.database().ref("order/"+counter);
    db.set(newOrder);
    document.getElementById("cardSection").innerHTML='';
    readOrder();
}
function readOrder(){
    var order= firebase.database().ref("order/");
    order.on("child_added",function(data){
        var orderValue=data.val();
        document.getElementById("cardSection").innerHTML+=`
        <div class="card mb-3">
        <div class="card-body">
        <h5 class="card-title">${orderValue.order}</h5>
        <p class="card-text">Total: ${orderValue.total}</p>
        <button type="submit" style="color:white" class="btn btn-warning"
        onclick="udapteOrder(${orderValue.id},'${orderValue.order}','${orderValue.total}')">
        <i class="fas fa-edit"></i> Editar orden </button>
        <button type="submit" class="btn btn-danger" onclick="deleteOrder(${orderValue.id})">
        <i class="fas fa-trash-alt"></i> Elimar orden</button>
        </div>
        </div>
        
        `
    });
}
function reset(){
    document.getElementById("firstSection").innerHTML=`
    <form class="border p-4 mb-4" id="form">
                    <div class="form-group">
                        <label>Orden</label>
                        <input type="text" class="form-control" id="order" placeholder="order">
                    </div>
                    <div class="form-group">
                        <label>Total</label>
                        <input type="text" class="form-control" id="total" placeholder="total">
                    </div>
                    <button type="submit" id="button1"  id="btn btn-primary">
                        <i class="fas fa-plus"></i>Añadir orden
                    </button>
                    <button style="display:none;" id="button2" class="btn btn-success"></button>
                    <button style="display:none;" id="button3" class="btn btn-danger"></button>
                </form>
    
    `;
    document.getElementById("form").addEventListener("submit",(e)=>{
        var order= document.getElementById("order").value;
        var total= document.getElementById("total").value;
        e.preventDefault();
        createOrder(order,total);
        form.reset();
    });
}
function udapteOrder(id,order,total){
    document.getElementById("firstSection").innerHTML=`
    <form class="border p-4 mb-4" id="form2">
    <div class="form-group">
        <label>Orden</label>
        <input type="text" class="form-control" id="order" placeholder="order">
    </div>
    <div class="form-group">
        <label>Total</label>
        <input type="text" class="form-control" id="total" placeholder="total">
    </div>
    <button style="display:none; type="submit" id="button1"  id="btn btn-primary">
        <i class="fas fa-plus"></i>Añadir orden
    </button>
    <button id="button2" class="btn btn-success">Actualizar orden</button>
    <button id="button3" class="btn btn-danger">Cancelar</button>
</form>
    
    `;
    document.getElementById("form2").addEventListener("submit",(e)=>{
        e.preventDefault();
    });
    document.getElementById("button3").addEventListener("click",(e)=>{
        reset();
    });
    document.getElementById("button2").addEventListener("click",(e)=>{
        udapteOrder2(id,document.getElementById("order").value,document.getElementById("total").value);
    });
    document.getElementById("order").value=order;
    document.getElementById("total").value=total;
}
function udapteOrder2(id,order,total){
    var orderUdapted={
        id:id,
        order:order,
        total:total
    }
    let db= firebase.database().ref("order/"+id);
    db.set(orderUdapted);
    document.getElementById("cardSection").innerHTML="";
    readOrder();
    reset();
}
function deleteOrder(id){
    var order=firebase.database().ref("order/"+id);
    order.remove();
    reset();
    document.getElementById("cardSection").innerHTML="";
    readOrder();


}