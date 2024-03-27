    function SetName() {
        let PlantName1 = document.getElementById('p1');
        let NewPlantName1 = window.prompt("Name your plant :)");
        if (NewPlantName1 == null || NewPlantName1 == "") {
            PlantName1.textContent = "Plant";
        } else {
            PlantName1.textContent = NewPlantName1;
        }
    }

    function RequiredMoisture() {
        let RequiredMoisture = document.getElementById('p2');
        let NewRequiredMoisture = window.prompt("What is the required moisture of soil?");
        NewRequiredMoisture = Number(NewRequiredMoisture);
        if (NewRequiredMoisture > 100 || NewRequiredMoisture < 0) {
            window.alert("Number must be between 0 and 100");
        } else {
            RequiredMoisture.textContent = NewRequiredMoisture + "%";
        }
    }

    function WateringPeriod() {
        let WateringPeriod = document.getElementById('p3');
        let NewWateringPeriod = window.prompt("How often do you want your plant to be watered (DD/HH/MM)?");
        WateringPeriod.textContent = NewWateringPeriod.slice(0, 2) + " Days " + NewWateringPeriod.slice(3, 5) + " Hours " + NewWateringPeriod.slice(6, 8) + " Minutes";
    }

    function OnOff() {
        let OnBox = document.getElementById("OnBox");
        let OffBox = document.getElementById("OffBox");
        let p4 = document.getElementById("p4");

        if (OnBox.checked) {
            p4.textContent = "E-mail notifications are turned on";
            localStorage.setItem("EmailNotifications", "ON");
        } else if (OffBox.checked) {
            p4.textContent = "E-mail notifications are turned off";
            localStorage.setItem("EmailNotifications", "OFF");
        } else {
            p4.textContent = null;
            localStorage.removeItem("EmailNotifications");
        }
    }

    function OnOff2() {
        let On2Box = document.getElementById("On2Box");
        let Off2Box = document.getElementById("Off2Box");

        if (On2Box.checked) {
            localStorage.setItem("WaterLowNotification", "ON");
        } else if (Off2Box.checked) {
            localStorage.setItem("WaterLowNotification", "OFF");
        } else {
            localStorage.removeItem("WaterLowNotification");
        }
    }

    function SaveOnClick() {
        let NewPlantName = document.getElementById('p1').textContent;
        localStorage.setItem("NewPlantName1", NewPlantName); // Zmieniono klucz na "NewPlantName1"
        let NewRequiredMoisture = document.getElementById('p2').textContent;
        localStorage.setItem("NewRequiredMoisture1", NewRequiredMoisture); // Zmieniono klucz na "NewRequiredMoisture1"
        let NewWateringPeriod = document.getElementById('p3').textContent;
        localStorage.setItem("NewWateringPeriod1", NewWateringPeriod); // Zmieniono klucz na "NewWateringPeriod1"
    }


    window.onload = function() {
        var NewPlantName1 = localStorage.getItem("NewPlantName1");
        if (NewPlantName1)
            document.getElementById("p1").textContent = NewPlantName1;
        var NewRequiredMoisture1 = localStorage.getItem("NewRequiredMoisture1");
        if (NewRequiredMoisture1)
            document.getElementById("p2").textContent = NewRequiredMoisture1;
        var NewWateringPeriod1 = localStorage.getItem("NewWateringPeriod1");
        if (NewWateringPeriod1)
            document.getElementById("p3").textContent = NewWateringPeriod1;

        var EmailNotifications = localStorage.getItem("EmailNotifications");
        if (EmailNotifications) {
            if (EmailNotifications === "ON") {
                document.getElementById("OnBox").checked = true;
                document.getElementById("p4").textContent = "E-mail notifications are turned on";
            } else if (EmailNotifications === "OFF") {
                document.getElementById("OffBox").checked = true;
                document.getElementById("p4").textContent = "E-mail notifications are turned off";
            }
        }

        var WaterLowNotification = localStorage.getItem("WaterLowNotification");
        if (WaterLowNotification) {
            if (WaterLowNotification === "ON") {
                document.getElementById("On2Box").checked = true;
            } else if (WaterLowNotification === "OFF") {
                document.getElementById("Off2Box").checked = true;
            }
        }
    }
