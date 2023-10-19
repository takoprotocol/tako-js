async function post(url: string, reqBody: object) {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    }
    return await httpRequest(url, option);
}
async function postWithToken(url: string, token: string, reqBody: object) {
    const option = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(reqBody)
    }
    return await httpRequest(url, option);
}
async function get(url: string) {
    return await httpRequest(url, {});
}
async function httpRequest(url: string, option: object) {
    const res = await fetch(url, option);
    const resText = await res.text();
    try {
        const data = JSON.parse(resText);
        if (data.data) {
            return data.data;
        } else if (data.error_msg) {
            throw data.error_msg;
        }
    } catch (error) {
        throw `error:${resText}`;
    }
}

export { post, get, postWithToken }