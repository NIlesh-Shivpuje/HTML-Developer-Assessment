let btn = document.getElementById("submitData").addEventListener("click", getData);
let sel = document.getElementById("data");
let setData = 

function setData(res){
   let table = document.getElementById('table');
   let li = `<tr><th>Name</th><th>price</th><th>currency</th><th>country_code</th></tr>`;
   let AllData = [res.name,res.price,res.currency,res.country_code]
   console.log(AllData);
   
    li += `<tr>
    <td>${res.name}</td>
    <td>${res.price} </td>
    <td>${res.currency}</td>
    <td>${res.country_code}</td>
  </tr>`;
 
    
 table.innerHTML = li;

    return console.log(li);
}



async function getData() {
    let val = sel.value;
    const url = `https://real-time-finance-data.p.rapidapi.com/search?query=${val}+&language=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '544d29983dmsh79966c4370f1bb3p159eeejsn079eb2ff93a9',
            'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console
     let r = result.data.stock[0];
      setData(r)
    } catch (error) {
        console.error(error);
    }

}

