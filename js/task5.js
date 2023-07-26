let div = document.getElementById('click');
class Shape{
    static total = 1;
    static a = 50;
    static Fill(){
        if (Shape.total !== 1){
            this.total = 1
        }
    }
    static Draw(){
        let newDiv = document.createElement('div');
        newDiv.style.width = this.a+'px';
        newDiv.style.height = this.a+'px';
        newDiv.style.backgroundColor = 'red';
        newDiv.style.display = 'inline-block';
        // newDiv.style.border = '1px solid black';
        newDiv.style.boxShadow = "3px 3px 3px 3px black"
        newDiv.style.opacity = this.total;
        div.appendChild(newDiv);
        this.total -= 0.1;
        console.log(this.total)
    }

}