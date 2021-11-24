function getFileNamesPromise() {
    //get id from server -> document.cookie
    let p = fetch('/upload/getFilenames', {
        method: 'get'
    }).then((response) => {
        return response.json();
    }).then((jsonObject) => {
        return jsonObject;
    });
    return p;
}

let fileList = document.getElementById('fileList');
if (!(document.cookie === undefined || document.cookie === '')) {
    getFileNamesPromise().then((namesArr) => {
        try {
            for (name of namesArr) {
                let item = document.createElement('li')
                item.innerHTML = name;
                fileList.appendChild(item);
            }
        } catch (err) {
            console.log(err);
            console.log('namesArr =', namesArr);
        }
    });
}