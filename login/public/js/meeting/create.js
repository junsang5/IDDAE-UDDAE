// fetch("/create", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//     },
//     body: JSON.stringify(),
// })
//     .then((res) => res.json())
//     .then((res) => {
//         if(res.success){
//             location.href="/";
//         }
//         else{
//             alert(res.msg);
//         }
//     })
//     .catch((err) => {
//         console.error(new Error("login error"));
//     })