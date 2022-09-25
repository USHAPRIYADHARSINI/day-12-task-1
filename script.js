
var firstname = document.getElementById('firstname');
var lastname = document.getElementById('lastname');
var address = document.getElementById('address');
var pincode = document.getElementById('pincode');
var state = document.getElementById('state');
var country = document.getElementById('country');
// var compulsory =document.getElementsByClassName("complusory");

// variable for gender
var gender = document.getElementsByName("gender")
var male = gender[0]
var female= gender[1]
var genderarray= [male,female]

// variable declaration for fav food
// var food ="" ;
var type = document.getElementsByName("favfood")
    var idli = type[0]
    var dosa = type[1]
    var meals = type[2]
    var adai = type[3]
    var fish = type[4]
    var foodarray =[idli,dosa,meals,adai,fish]

    // document.getElementsByClassName("complusory").style.display = "none";

function addrow(){

    console.log("submitting Form...")
    console.log(firstname.value)

    // if(firstname.value=="" || null || undefined){
    //     document.getElementsByName("complusory").style.display = "block";
    //      return
    // } else if(lastname.value=="" || null){
    //      document.getElementsByName("complusory").style.display = "block";
    //      return
    // } else if (address.value=="" || null){
    //      document.getElementsByName("complusory").style.display = "block";
    //      return
    // }else if (pincode.value=="" || null){
    //      document.getElementsByName("complusory").style.display = "block";
    //      return
    // }else if (gender.value=="" || null){
    //      document.getElementsByName("complusory").style.display = "block";
    //      return
    // }else if (favfood.value=="" || null){
    //      document.getElementsByName("complusory").style.display = "block";
    //      return
    // }else{

// inserting a new row in the table[0]
    var table = document.getElementsByTagName('table')[0];
    
    var newrow = table.insertRow(1);

    var cell1 = newrow.insertCell(0);
    var cell2 = newrow.insertCell(1);
    var cell3 = newrow.insertCell(2);
    var cell4 = newrow.insertCell(3);
    var cell5 = newrow.insertCell(4);
    var cell6 = newrow.insertCell(5);
    var cell7 = newrow.insertCell(6);
    var cell8 = newrow.insertCell(7);

    cell1.innerHTML= firstname.value;
    cell2.innerHTML= lastname.value;
    cell3.innerHTML= address.value;
    cell4.innerHTML= pincode.value;
    cell5.innerHTML= func();
    cell6.innerHTML= funcfavfood();
    cell7.innerHTML= state.value;
    cell8.innerHTML= country.value;
    allclear()
    }
// }

// FUNCTION TO SELECT THE GENDER

function func(){

    if(male.checked == true){
        console.log(male.value)
        return (male.value);
    }else if(female.checked == true){
        console.log(female.value)
        return (female.value);
    }
}


// function to listout the slected items of fav foods
function funcfavfood(){
    // foodarray.forEach(element => {
    // (.checked == true){
        var checked = foodarray
        .filter ((e)=> e.checked)
        .map((s)=> s.value)
        // console.log(idli, dosa, meals, adai, fish)
        // food = checked
        console.log(checked)
        return checked;
    }

// to clear everything after submitting
function allclear(){
    firstname.value=""
    lastname.value=""
    address.value=""
    pincode.value=""
    uncheckgender()
    uncheckfood()
    state.value=""
    country.value=""
} 

// to uncheck all the checkboxes
function uncheckfood(){
        var checked = foodarray
        .filter ((e)=> e.checked=false)
        return checked;
}

// to uncheck all the radiobutton
function uncheckgender(){
    var checked = genderarray
    .filter ((e)=> e.checked=false)
    return checked;
}