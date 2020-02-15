function initMap() {
    var map;
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: loc.lati,
            lng: loc.long
        },
        zoom: 14
    });
    var marker = new google.maps.Marker({
        position: map.center,
        map: map,
        title: 'You are here!'
    });
}

function validatePhone(inputtxt) {
    var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
    if (inputtxt.value.match(phoneno)) {
        return true;
    } else {
        alert("Invalid Phone number \nKeep in mind- \n 1. No + is required \n 2. phone number must have structure XXX-XXX-XXXX OR XXX.XXX.XXXX OR XXX XXX XXXX");
        document.form.phone_number.focus();
        event.preventDefault();
        return false;
    }
}