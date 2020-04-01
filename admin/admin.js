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
  //RENDER
  function renderTable(){
      var order= firebase.database().ref("order/");
      order.on("child_added",function(data){
          var orderValue= data.val();
          document.getElementById("table").innerHTML+=`
          <tr>
          <td>${orderValue.id}</td>
          <td>${orderValue.order}</td>
          <td>${orderValue.total}</td>
          </tr>
          
          `;
      });
  }