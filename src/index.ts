async function getTakoInfo() {
    const res = await fetch("https://api.takoyaki.so/v2/takohub_info");
    const data = await res.json();
    return data.data;
}
export { getTakoInfo }