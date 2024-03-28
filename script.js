let getValue=function(fname,sname,per){
let url='https://sheetdb.io/api/v1/qqlxhbad9vktl/';
fetch(url, {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: {
            
            'fname':  fname,
             'sname':sname,
            'per':per,
             
        }
    })
})
  .then((response) => response.json())
  .then((data) => console.log(data));
}
getValue();

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '79151f59a0msh939e5527e2a1d43p1a4197jsn013f55a6b0d0',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    }
};
let calculateLove = async function () {
    let fname = document.getElementById("name1").value;
    let sname = document.getElementById("name2").value;
    const url = ` https://love-calculator.p.rapidapi.com/getPercentage?sname=${sname}&fname=${fname}`;

    try {
        const response = await fetch(url, options);
        const res = await response.json();
        let data=navigator.userAgent.toString();
        document.getElementById("result").innerHTML = "Love Percentage is " + res.percentage + "%" + "<br>" + res.result;
getValue(fname,sname,data);
    } catch (error) {
        console.error(error);
        document.getElementById("result").innerHTML = "Invalid";
    }
}
