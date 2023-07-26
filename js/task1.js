let save = document.querySelector('.save')
let prev = document.querySelector('.prev')
let next = document.querySelector('.next')
let ind = 0
let curInd = 0
if (performance.navigation.type === performance.navigation.TYPE_RELOAD)
{
    ind = sessionStorage.getItem("ind");
    curInd = sessionStorage.getItem("curInd");
}
save.addEventListener('click', ()=>
{
    ind++;
    curInd = ind;
    let text = document.querySelector("textarea").value;
    text = text.replaceAll("\n", "EnTer");
    document.cookie = `text ${ind} = ${text}`;
    sessionStorage.setItem("ind",ind);
    sessionStorage.setItem("curInd",curInd);
});

prev.addEventListener('click', ()=>
{
    let cookies = document.cookie.split(";");
    if (curInd-1 <= 0){

    }
    else
    {
        curInd--;
        let text = cookies[curInd-1].split("=");
        text = text[1];
        text = text.replaceAll("EnTer","\n");
        document.querySelector("textarea").value = text;
    }
});
next.addEventListener('click', ()=>
{
    let cookies = document.cookie.split("; ");
    if(curInd + 1 > ind){

    }
    else
    {
        curInd++;
        let text = cookies[curInd-1].split("=");
        text = text[1];
        text = text.replaceAll("EnTer","\n");
        document.querySelector("textarea").value = text;
    }
});
