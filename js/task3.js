let button = document.querySelector('button');
let div = document.querySelector('div');
let div2 = document.getElementById('click');
let body = document.body;
button.addEventListener('click',()=>
{
    div2.innerHTML = '';
    div.innerHTML = '';
    let text = document.querySelector('[type=text]').value;
    let span;
    if (!text.startsWith('["')) {
        span = document.createElement("p");
        span.innerHTML = "ERROR!";
        span.style.color = 'red';
        div.appendChild(span);
    } else {
        let json = JSON.parse(text);
        for (let i = 0; i < json.length; i++) {
            let img = document.createElement('img');
            img.style.width = '40px';
            img.style.height = '40px';
            img.src = json[i];
            img.addEventListener('error', function handleError() {
                img.style.display = 'none';
            });
            div.appendChild(img);
        }
        console.log(div);
    }
});
//[" 1.jpg "," 2.jpg "," 3.jpg "," 4.jpg "]

div.addEventListener('click',(event)=>
{

    let target = event.target;
    if(target.tagName != "div"){
        let src = target.src;
        let img = document.createElement('img');
        img.style.width = '250px';
        img.style.height = '300px';
        img.style.position = 'absolute';
        img.src = src;
        div2.appendChild(img);
    }
});