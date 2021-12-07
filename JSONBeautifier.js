
$(function()
{
    
    function output(inp) {
        document.getElementById("response").textContent = inp;
    }
    
	$('#reused_form').submit(function(e)
      {
        e.preventDefault();
        $('#error_message').hide();

        var data = document.getElementById("message").value;
        if (IsJsonString(data)){
            var obj = JSON.parse(data);
            var str = JSON.stringify(obj, undefined, 4);

            output(str);
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

 