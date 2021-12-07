
$(function()
{
    
    function output(inp) {
       $("#response").val(vkbeautify.xml(inp));
    }
    
	$('#reused_form').submit(function(e)
      {
        e.preventDefault();
        $('#error_message').hide();

        var data = document.getElementById("message").value;
        if (IsJsonString(data)){
            var obj = JSON.parse(data);
            var str = OBJtoXML(obj);
            output(str);
        }
        else{
            document.getElementById("response").value = "";
            $('#error_message').show();
        }
      });	

      function OBJtoXML(obj) {
        var xml = '';
        for (var prop in obj) {
          xml += obj[prop] instanceof Array ? '' : "<" + prop + ">";
          if (obj[prop] instanceof Array) {
            for (var array in obj[prop]) {
              xml += "<" + prop + ">";
              xml += OBJtoXML(new Object(obj[prop][array]));
              xml += "</" + prop + ">";
            }
          } else if (typeof obj[prop] == "object") {
            xml += OBJtoXML(new Object(obj[prop]));
          } else {
            xml += obj[prop];
          }
          xml += obj[prop] instanceof Array ? '' : "</" + prop + ">";
        }
        var xml = xml.replace(/<\/?[0-9]{1,}>/g, '');
        return xml
      }

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

 