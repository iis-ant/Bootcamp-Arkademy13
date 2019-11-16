function username(uname){
    if(uname.length !== 7) return false;
    for(var i=0 ; i<uname.length ; i++){
        if(uname[i].charCodeAt(0) < 65 || uname[i].charCodeAt(0) > 90) return false;
    }
    return true;
}

function password(pass){
    if(pass.length !== 7) return false;
    if((pass[0] !== pass[1] && pass[0]!== pass[2] || pass[3] !== '*' || (pass[4] !== pass[5] && pass[4] !== pass[6]))) return false;
    return true;
}

username("ARKDEMY");
username("GALIH");
password("111*sss");
password("1234*try");
