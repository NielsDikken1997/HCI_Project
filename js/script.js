jQuery(document).ready(function () {
    // executes when HTML-Document is loaded and DOM is ready
    console.log("document is ready");

    $('#selectTime').timepicker({ 'timeFormat': 'H:i', 'step': 15, 'scrollDefault': 'now' });
    $('#selectTimeNotification').timepicker({ 'timeFormat': 'H:i', 'step': 30,'minTime': '0:00','maxTime': '10:00'});
    $('#selectDuration').timepicker({ 'timeFormat': 'H:i', 'step': 15, 'scrollDefault': 'now' });

    $('#selectTime').on('changeTime', function () {
        $('#onselectTarget').text($(this).val());
    });

    $('.durationExample').timepicker({
        'timeFormat': 'H:i',
        'step': 15,
        'minTime': '17:00',
        'maxTime': '00:00',
        'showDuration': true
    });

    $(function () {

        // Get the form fields and hidden div
        var checkbox = $("#trigger");
        var hidden = $("#hidden_fields");

        // Hide the fields.
        // Use JS to do this in case the user doesn't have JS 
        // enabled.
        hidden.hide();

        // Setup an event listener for when the state of the 
        // checkbox changes.
        checkbox.change(function () {
            // Check to see if the checkbox is checked.
            // If it is, show the fields and populate the input.
            // If not, hide the fields.
            if (checkbox.is(':checked')) {
                // Show the hidden fields.
                hidden.show();
            } else {
                // Make sure that the hidden fields are indeed
                // hidden.
                hidden.hide();
            }
        });
    });

    // jQuery('.btn[href^=#]').click(function (e) {
    //     e.preventDefault();
    //     var href = jQuery(this).attr('href');
    //     jQuery(href).modal('toggle');
    // });
});

window.onload = function () {
    var picker = new Pikaday({
        field: document.getElementById('datepicker'),
        format: 'D/M/YYYY',
        toString(date, format) {
            // you should do formatting based on the passed format,
            // but we will just return 'D/M/YYYY' for simplicity
            const day = date.getDate();
            const month = date.getMonth() + 1;
            const year = date.getFullYear();
            return `${day}/${month}/${year}`;
        },
        parse(dateString, format) {
            // dateString is the result of `toString` method
            const parts = dateString.split('/');
            const day = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10) - 1;
            const year = parseInt(parts[2], 10);
            return new Date(year, month, day);
        }
    });
}

function myFunction() {
    var checkBox = document.getElementById("myCheck");
    var text = document.getElementById("text");
    if (checkBox.checked == true) {
        text.style.display = "block";
    } else {
        text.style.display = "none";
    }
}

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
