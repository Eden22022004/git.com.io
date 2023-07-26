class Student {
    constructor(surname,name,marks) {
        this.name = name;
        this.surname = surname;
        this.marks = marks;
    }
}

students = [
    new Student('Федорко', 'Петров',[3,4,5]),
    new Student('Остапенко', 'Сергій',[4,5,5]),
    new Student('Колос', 'Олеся',[4,3,3])
];

class ListOfStudents{
    constructor(students){
        this.students = students;
    }
    getTableList(){
        let table = document.createElement('table');
        let row = table.insertRow(0);

        let name = row.insertCell(0);
        let surname = row.insertCell(1);
        let math = row.insertCell(2);
        let eng = row.insertCell(3);
        let js = row.insertCell(4);
        name.innerHTML = "Name";
        surname.innerHTML = "Surname";
        math.innerHTML = "Math";
        eng.innerHTML = "Eng";
        js.innerHTML = "JS";

        for(let i = 0;i<this.students.length;i++){
            let row = table.insertRow(i+1);
            let cell = row.insertCell(0);
            cell.innerHTML = this.students[i].name;
            cell = row.insertCell(1);
            cell.innerHTML = this.students[i].surname;
            cell = row.insertCell(2);
            cell.innerHTML = this.students[i].marks[0];
            cell = row.insertCell(3);
            cell.innerHTML = this.students[i].marks[1];
            cell = row.insertCell(4);
            cell.innerHTML = this.students[i].marks[2];
        }
        return table;
    }
}

let avgGroup = 0;
class StylesTable extends ListOfStudents{
    getStyles(){
        return "<style>table,td{font-size: 22px;border: 1px solid green;}table,tr{color: green;}table tr:first-child{background-color: green;color: white;}</style>"
    }
    getTableList(){
        let table = super.getTableList();
        document.head.insertAdjacentHTML("beforeend", this.getStyles())
        return table;
    }
    getAvg(){
        let table = this.getTableList();
        let row = table.rows[0]
        let cell = document.createElement('td');
        cell.innerHTML = 'Avg';
        row.appendChild(cell);
        for(let i = 0;i<this.students.length;i++){
            let marks = this.students[i].marks;
            let summa = 0;
            for(let j = 0;j<marks.length;j++){
                summa+=marks[j];
            }
            let avg = parseFloat(summa / marks.length);
            avgGroup += avg;
            row = table.rows[i+1];
            cell = document.createElement('td');
            cell.innerHTML = avg.toFixed(2);
            row.appendChild(cell);
            console.log(cell);
        }
        avgGroup/=this.students.length;
        avgGroup = parseInt(avgGroup);
        return table;
    }
}

list = new StylesTable(students);
let table = list.getTableList();
document.body.appendChild(table);

let newTable = list.getAvg();
table.remove();
document.body.appendChild(newTable);


newTable.after("Середній бал по групі: " + avgGroup);