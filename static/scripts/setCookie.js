function getNewIdFromServer() {
    //get id from server -> document.cookie
    let p = fetch('/cookies/getNew', {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((jsonObject) => {
        let d = new Date();
        d.setTime(d.getTime() + (31 * 24 * 60 * 60 * 1000)); //31 dayes
        let expDate = d.toGMTString();
        document.cookie = JSON.stringify(jsonObject) + "; expires=" + expDate + ";path=/";
    });
    return p;
}

if (document.cookie === undefined || document.cookie === '') {
    console.log('UUID GET:');
    getNewIdFromServer();
}