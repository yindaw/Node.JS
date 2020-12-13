import request from "./request";

function delay (duration) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, duration);
    })
}
 
export async function login (loginId, loginPwd) {
    await delay(2000);
    const resp = await request().post("/api/admin/login", { loginId, loginPwd });
    return resp.data;
}

export function loginOut () {
    localStorage.removeItem("token");
}

export async function whoAmI () {
    await delay(2000);
    const resp = await request().post("/api/admin/whoami");
    return resp.data;
}