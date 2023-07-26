let textInput = document.querySelector('[type=text]');
let opts = document.querySelectorAll('option');
let boxes = document.querySelectorAll('[type=checkbox]');
let radio = document.querySelectorAll('[type=radio]');
let area = document.querySelector("textarea");

if (performance.navigation.type == performance.navigation.TYPE_RELOAD)
{
    textInput.value = localStorage.getItem("text");
    area.value = localStorage.getItem("textarea").replaceAll("EnTer","\n");
    arr = localStorage.getItem("check");
    if (boxes.length != 0){
        for(i = 0; i < boxes.length; i++){
            if(arr.includes(i)){
                boxes[i].checked = true;
            }
        }
    }

    radio[localStorage.getItem("radio")].checked = true;

    opts[localStorage.getItem("select")].selected = true;
}

document.querySelector("form").addEventListener('change',(event)=>
    {
        let target = event.target;
        console.log(target.tagName);
        if(target.tagName.toLowerCase() == 'input')
        {
            console.log(target.type);
            switch(target.type)
            {
                case "text":
                    localStorage.setItem("text",target.value);
                    break;

                case "checkbox":
                    let arr = [];
                    for(i = 0;i < boxes.length;i++)
                    {
                        if(boxes[i].checked)
                        {
                            arr.push(i);
                        }
                    }
                    console.log(arr);
                    localStorage.setItem("check",arr);
                    break;

                case "radio":
                    for(i = 0;i < radio.length;i++)
                    {
                        if(radio[i].checked)
                        {
                            localStorage.setItem("radio",i);
                        }
                    }
                    break;
            }
        }
        if(target.tagName.toLowerCase() == 'textarea')
        {
            let text = document.querySelector("textarea").value;
            text = text.replaceAll("\n","EnTer");
            localStorage.setItem("textarea",text);
        }
        if(target.tagName.toLowerCase() == 'select')
        {
            for(i = 0;i < opts.length;i++)
            {
                if(opts[i].selected){
                    localStorage.setItem("select",i);
                }
            }
        }
    }
);