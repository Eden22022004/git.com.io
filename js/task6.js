let btn = document.getElementById('btn');
btn.addEventListener('click', ()=>{
    for (let i = 0;i < 5;i++){
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => {
                return response.json();
            })
            .then(data => {
                let img = document.createElement('img');
                img.src = data.message;
                img.style.height = '250px';
                img.style.width = '250px';
                let body = document.body;
                body.appendChild(img);
            });
    }
});
