function calculate() {
    let total = document.getElementById("total").value;
    let attended = document.getElementById("attended").value;

    if (total == "" || attended == "") {
        alert("Please fill all fields");
        return;
    }

    let percentage = (attended / total) * 100;
    percentage = percentage.toFixed(2);

    if (percentage >= 75) {
        document.getElementById("result").innerHTML =
            "Attendance: " + percentage + "% ✅ Eligible";
    } else {
        document.getElementById("result").innerHTML =
            "Attendance: " + percentage + "% ❌ Not Eligible";
    }
}
