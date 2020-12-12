login.onclick = function () {
    fetch("/api/admin/login", {
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            loginId: "abc",
            loginPwd: "123"
        })
    }).then((resp) => resp.json()).then((resp) => {
        console.log(resp);
    });
}

updateStu.onclick = function () {
    fetch("/api/student/538", {
        method: "put",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            name: "123",
        })
    }).then((resp) => resp.json()).then((resp) => {
        console.log(resp);
    });
}
