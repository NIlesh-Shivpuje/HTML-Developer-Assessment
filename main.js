function getCheckedCheckboxesFor(checkboxName) {
    var checkboxes = document.getElementsByClassName('get_checkBxVal'), values = [];
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            values.push(checkboxes[i].value);
        } 
    }
    if(values.length){
        alert(values)
    }else{
        alert("please select the images")

    }
    return values;
}
let submit = document.querySelector('#submitBtn');
submit.addEventListener('click', getCheckedCheckboxesFor);
 


