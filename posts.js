var database = firebase.database().ref();
var posts = document.getElementById('posts');

database.child('posts').on('child_added',function(snapshot)
{
    var obj = snapshot.val();
    obj.id = snapshot.key;
    render(obj);
})


function render(dua)
{
    var div = document.createElement('DIV');
    div.setAttribute('id',dua.id);
    var span = document.createElement('SPAN');
    var sender = document.createTextNode('Name: ' +dua.name + '     ');
    var duaa = document.createTextNode('Dua: ' +dua.duas + ' \t');
    span.appendChild(sender);
    span.appendChild(duaa);

    div.appendChild(span);

    var commentBox = document.createElement('TEXTAREA');
    commentBox.setAttribute('id', 'comment'+dua.id);
    var btn = document.createElement("BUTTON");
    var btntxt  = document.createTextNode('Comment');
    btn.appendChild(btntxt);
    btn.onclick = function(){
        submitComment(dua.id);
    }
posts.appendChild(div);
}