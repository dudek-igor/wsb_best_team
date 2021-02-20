$(function () {
    let data;
    let day;
    let hour;
    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api.apify.com/v2/key-value-stores/3Po6TV7wTht4vIEid/records/LATEST?disableRedirect=true/runs?token=Re5MdToMojdDhxuhkBSNrjCWw', true);
    xhr.onload = function () {
        data = JSON.parse(xhr.response);
        document.getElementById("infections-counter").innerHTML = data.infected;
        document.getElementById("recovered-counter").innerHTML = data.recovered;
        document.getElementById("deceased-counter").innerHTML = data.deceased;
        lastUpdateTime = data.lastUpdatedAtSource.split('T');
        day = lastUpdateTime[0];
        hour = lastUpdateTime[1].slice(0,5);
        document.getElementById("last-update").innerHTML = "Ostatnia aktualizacja danych nastąpiła w dniu " + day + " o godzinie " + hour;
    }    
    xhr.send();
});

