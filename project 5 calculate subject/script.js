const idForm = document.getElementById("form");
const result = document.getElementById("result")

function formFun (event){
    event.preventDefault();
    let maxValue = 400;
    let formsValue = new FormData(idForm);
    let data = {};
    formsValue.forEach((vlaue,index) =>{
        // console.log(vlaue[index])
        data[index] = +vlaue;
    } )


    let total = data.english + data.math + data.bangal + data.bayligi;
    let ava = (total / maxValue ) * 100;
    // console.log(ava)
    result.innerText = `Total marks ${total} and avarage marks ${ava}%`

}