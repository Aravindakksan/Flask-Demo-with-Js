$(document).ready(function() { 
    $("#search").on("keyup", function() { 
        var value = $(this).val().toLowerCase(); 
        $("#clubs tr").filter(function() { 
            $(this).toggle($(this).text() 
            .toLowerCase().indexOf(value) > -1) 
        }); 
    }); 
}); 