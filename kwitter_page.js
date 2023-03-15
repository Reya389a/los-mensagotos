
function send()
{
    msg = document.getElementById("msg").value;
    firebaseConfig.databaseURL().ref(room_name).push({
        name:user_name,
        massage:msg,
        like:0
    });

    document.getElementById("msg").value = "";
}