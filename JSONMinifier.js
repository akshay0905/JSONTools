
$(function()
{
	$('#reused_form').submit(function(e)
      {
        e.preventDefault();
        $('#error_message').hide();
        $('#empty_error_message').hide();

        var data = document.getElementById("message").value;
        if(data === "" || data === undefined){
            document.getElementById("response").value = "";
            $('#empty_error_message').show();
        }
        else if (IsJsonString(data)){
            var minifiedJSON = JSON.stringify(JSON.parse(data));
            document.getElementById("response").value = minifiedJSON;
        }
        else{
            document.getElementById("response").value = "";
            $('#error_message').show();
        }

      });	

  
      function IsJsonString(str) {
        try {
            JSON.parse(str);
        } catch (e) {
            return false;
        }
        return true;
    }
});

function copy() {
    var copyTextarea = document.getElementById("response");
    copyTextarea.select(); //select the text area
    document.execCommand("copy"); //copy to clipboard
 }
 
function clearData() {
    document.getElementById("response").value = "";
    document.getElementById("message").value = "";
 }

