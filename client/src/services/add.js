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
        const response = await fetch('http://18.210.66.126:3001:3000/add', requestOptions);
        console.log("result =", response)
        return await response.json();
    }catch(error) {
        return [];
    }
    
}