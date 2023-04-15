export async function getAddresult(a, b) {

    console.log("a, b =", a, b)
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "a": a,
            "b": b})
    };
    console.log(20);
    try{
        console.log(10);
        const response = await fetch('http://3.213.111.194:3003/add', requestOptions);
        console.log("result =", response)
        return await response.json();
    }catch(error) {
        return [];
    }
    
}