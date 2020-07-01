axios.get('http://localhost:8086/todo').then(res=>{
    var item =res.data;
    render(item);
})

function render(item){
    var list_Item = document.getElementById('list-Item');
    var content = item.map(item=>{
        return '<li>'+item.content+'</li>';
    })
    list_Item.innerHTML=content.join('');
}

