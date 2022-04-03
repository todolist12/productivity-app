export const createUid = () => {
    let uid = '';
    for(let i = 0; i < 6; i ++) {
        uid += btoa(Math.random().toString()).substr(10, 5);
    }
    return uid;
}