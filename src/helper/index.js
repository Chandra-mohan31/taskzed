const API = "https://run.mocky.io/v3/45752826-6a0c-4cba-921c-a34f03f9cd6c";

export const fetchData = () => {
    return fetch(`${API}`,{
        method:"GET",

    })
    .then((res)=>{
        return res.json();
    })
    .catch((err)=>{
        console.log(err);
    })
}