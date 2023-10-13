async function post(url: string, reqBody: object) {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reqBody)
    })
    const data = await res.json();
    return data.data;
}
async function get(url: string) {
    const res = await fetch(url);
    const data = await res.json();
    return data.data;
}

export { post, get }