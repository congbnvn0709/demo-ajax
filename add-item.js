const callback = () =>{
    console.log(1)
    //window.location.href = "./index.html";
}

function addItem(x) {
    var input = document.getElementById('new-item');
    // them du lieu dang object de luu vao Product.json
     var newItem = {
        content: input.value
    };
    // them 1 du lieu moi vao Product.json
    axios.post('http://localhost:8086/todo', newItem)

    x();
}

var bntAdd = document.getElementById('add-btn');
 bntAdd.addEventListener('click', addItem);






// var backbtn = document.getElementById("back-toList");
// backbtn.addEventListener('click', BacktoList);
// function BacktoList() {
//     window.location.href = "./";
// }