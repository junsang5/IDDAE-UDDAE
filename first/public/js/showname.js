async function getName(){
    var name;
    await fetch('http://localhost:4000/name')
    .then((res) => res.json())
    .then((data) => {
        name = data.name;
    })
    .catch((err) => {console.log(err)});

    return name;
    // or const name = fetch ~ + return name.then((res)~)
}

async function showName(){
    var name = await getName();
    let new_text = document.querySelector('.introduce-text');
    new_text.innerText = `${name}님 안녕하세요!`;
}

showName();