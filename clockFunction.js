function start(){
    $(function(){
        $("#datePicker").datepicker();
    });
    var dateToday, startTime, endTime,message;
    document.getElementById("submit").addEventListener("click", newEntry, false );

    function newEntry(){
        dateToday= document.getElementById("datePicker").value;
        localStorage.setItem("Date Today", dateToday);
        startTime= document.getElementById("startTime").value;
        localStorage.setItem("Start Time", startTime);
        endTime= document.getElementById("endTime").value;
        localStorage.setItem("End Time", endTime);
        message= document.getElementById("message").value;
        localStorage.setItem("Message", message);
        summary();
    }
    function summary(){
        document.getElementById("results").setAttribute("style", "display: block");

    }





}

window.addEventListener("load", start, false);