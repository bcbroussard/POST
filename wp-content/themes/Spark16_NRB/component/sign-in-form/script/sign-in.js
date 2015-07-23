(function($){

	function clearPlaceholder(field, value){
		if (field.value == value){
			field.value = "";
		}
	}

	function setPlaceholder(field, value){
		if(field.value == ""){
			field.value = value;
		}
	}	

	function CheckBoxCheck(type){
		if(type == 0){
			if(document.Q2OnlineLogin.forgot_password[0].checked){
				document.Q2OnlineLogin.forgot_password[1].checked = false;
				document.getElementById('pwdtext').disabled = true;
				document.getElementById('pwdtext').style.backgroundColor = "#E5E5E5";
			} else {
				document.getElementById('pwdtext').disabled = false;
				document.getElementById('pwdtext').style.backgroundColor = "#FFFFFF";
			}
		} else if(type == 1){
			if(document.Q2OnlineLogin.forgot_password[1].checked){
				document.Q2OnlineLogin.forgot_password[0].checked = false;
				document.getElementById('pwdtext').disabled = true;
				document.getElementById('pwdtext').style.backgroundColor = "#E5E5E5";
			} else {
				document.getElementById('pwdtext').disabled = false;
				document.getElementById('pwdtext').style.backgroundColor = "#FFFFFF";
			}
		}
	}	

})(jQuery)