//after page load
window.onload = function(){

    //set age
    let setAge = function(){
        let ageSpan = $("#age")

        let birthday = new Date(ageSpan.attr("data-birthday"))
        let today = new Date();

        //calcs the year difference
        let age = today.getFullYear() - birthday.getFullYear()

        //if i hadn't have birthday this year, remove one year
        birthday.setFullYear(today.getFullYear())
        if(birthday > today) age -= 1;

        ageSpan.text(age);
    }
    setAge()

}