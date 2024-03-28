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
        document.getElementById("result").innerHTML = "Love Percentage is " + res.percentage + "%" + "<br>" + res.result;

    } catch (error) {
        console.error(error);
        document.getElementById("result").innerHTML = "Invalid";
    }
}
