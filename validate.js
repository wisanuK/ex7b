function checkSID() {
  let sid = (document.getElementById("sid").value).trim();
  if (!/^\d{10}$/.test(sid)) {
    return false;
  } 
    return true;
  }

function checkCandiNo() {
  let candi = (document.getElementById("candi").value).trim();
  if (isNaN(candi) || candi < 1 || candi > 10) {
    return false;
  }
    return true;
  }

function validateForm(){
	if(!checkSID()){
	  alert("Invalid Student ID! กรุณากรอกตัวเลข 10 หลัก (0-9 เท่านั้น)");
	  document.getElementById("sid").focus();
	  return false;
	}else{
		if(!checkCandiNo()){
		  alert("Invalid value for Candidate No!! กรุณากรอกตัวเลข 10 หลัก (0-9 เท่านั้น)");
		  document.getElementById("candi").focus();
		  return false;
		}else{
			alert("Your input data passes validation!!");
			return true;
		}
	}
}