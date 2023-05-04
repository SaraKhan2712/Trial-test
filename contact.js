var fname= document.getElementById('fname').value;
sessionStorage.setItem("fname1", fname);

var lname= document.getElementById('lname').value;
sessionStorage.setItem("lname1", lname);
var email= document.getElementById('email').value;
sessionStorage.setItem("email1", email);
var phone= document.getElementById('phone').value;
sessionStorage.setItem("phone1", phone);
var comment= document.getElementById('comment').value;
sessionStorage.setItem("comment1", comment);

/*
function print1()
{
    var fname= document.getElementById('fname').value;
    var lname= document.getElementById('lname').value; 
    var robot = document.getElementById('robot').value;
    var email= document.getElementById('email').value;
    var comment = document.getElementById('comment').value;
    
    if (fname.trim() == "" || lname.trim() == "" || robot.trim == "" || comment.trim()=="" || email.trim() == "")
    {
        alert("Some or all the mandatory fields - First Name, Last Name, Email, Suggestion/query and robot check, are not provided. Please input them and submit the form again");
        return false;
       
    }
    else if(robot!="98")
    {
    alert("Please check the robot check calculation and try submitting the form again");
    return false;
    }
    else if(fname.length <2 || lname.length <2)
    {
        alert("First Name and Last Name cannot be less than 2 characters");
        return false;
    }
    else if(comment.length<30)
    {
        alert("Please provide a detailed suggestion with a minimum of 30 characters to help you serve better!")
        return false
    }
    else 
    {
        return true;
    }
}

/*
function print1()
{
    var fname= document.getElementById('fname').value;
    var lname= document.getElementById('lname').value; 
    var robot = document.getElementById('robot').value;
    var comment = document.getElementById('comment').value;
    if(fname.trim() == "")
    {
        alert("First name cannot be left blank")
        form.fname.focus();
        return false;
    }
    else if(fname.length <3)
    {
        alert("First name cannot be less than 3 characters");
        return false;
    }
    else if(lname.length <3)
    {
        alert("Las t name cannot be less than 3 characters");
        return false;
    }
    else{
        myFunction();
        return true;  
    }
}
*/
/*
function myFunction()
{
    var fname= document.getElementById('fname').value;
    var lname= document.getElementById('lname').value;
    var email= document.getElementById('email').value;
    var phone= document.getElementById('phone').value;
    var comment= document.getElementById('comment').value;
    localStorage.setItem("fname1", fname);
    localStorage.setItem("lname1", lname);
    localStorage.setItem("email1", email);
    localStorage.setItem("phone1", phone);
    localStorage.setItem("comment1", comment);
   
    
    /*const mywindow = window.open();
    mywindow.document.open();

    mywindow.document.title ="Thank You";
    mywindow.document.write("<b>Form Data Submitted</b><br>")
    mywindow.document.write("Thank you for you feedback/suggestion, <strong>"+fname + " " + lname+ "</strong>!<br> <br> Feedback received on "+ Date() +"<br><br> We value your inputs and our team will contact you shortly through email at <strong>"+ email+ "</strong>. <br><br> Have a great day!");
    mywindow.document.writeln("<br><br><p><b>Below is the summary of your feedback:</b></p>" );
    mywindow.document.writeln("<p><b>First Name:</b> "+ fname + "</p>");
    mywindow.document.writeln("<p><b>Last Name:</b> "+ lname + "</p>");
    mywindow.document.writeln("<p><b>Email:</b> "+ email + "</p>" );
    mywindow.document.writeln("<p><b>Telephone:</b> "+ phone + "</p>");
    mywindow.document.writeln("<p><b>Please provide your suggestion/query in the textbox below:</b> "+ comment + "</p>" );
       mywindow.document.write("<br><br><br><font-align:center><strong>You can now close this window.</strong>")
    //mywindow.document.write(<a href="index.html">Home Page</a>);
    mywindow.document.close()

}*/

function mysubmission()
{
    const inpObj = document.getElementById("fname");
  if (!inpObj.checkValidity()) {
    document.getElementById("efname").innerHTML = inpObj.validationMessage;
    return false
  } else {
    document.getElementById("efname").innerHTML = "Input OK";
    return true
  } 
}




function myFunction1()
{
    let x = document.getElementById("submit")
    x.addEventListener("click", function()
    {
        alert("Thank you!");
    })
}


function mycolor()
{
    document.body.backgroundColor = "blue";
    
}

document.getElementById('time').innerHTML= "Last Modified: "+ document.lastModified;

/*to validate the phone number
function validatePhoneNumber(phone_num)
{
    var regex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return regex.test(phone_num);
}

function validateForm(event)
{
    var phone = document.getElementById('phone').value;
    if(!validatePhoneNumber(phone))
    {
        alert("Wrong phone number/format");
    }
    else
    {
        alert("success");
        }
        event.preventDefault();
}
*/


window.onload = initialise;

function initialise()
{
	var objForms = document.getElementsByTagName('form');
	var iCounter;

	// Attach an event handler for each form
	for (iCounter=0; iCounter<objForms.length; iCounter++)
	{
		objForms[iCounter].onsubmit = function(){return validateForm(this);};
	}
}


// Event handler for the form
function validateForm(objForm)
{
	var arClass = [];
	var iErrors = 0;
	var objField = objForm.getElementsByTagName('input');
    var objText = objForm.getElementsByTagName('textarea');
	var objLabel = objForm.getElementsByTagName('label');
	var objList = document.createElement('ol');
	var objError, objExisting, objNew, objTitle, objParagraph, objAnchor, objPosition;
	var strLinkID, iFieldCounter, iClassCounter, iCounter;

    var fname= document.getElementById('fname').value;
    var lname= document.getElementById('lname').value;
    var email= document.getElementById('email').value;
    var phone= document.getElementById('phone').value;
    var comment= document.getElementById('comment').value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
       
    if(fname.trim() == "")
    {
    
        document.getElementById('efname').innerHTML= "<br>" + "\n First name is mandatory and minimum 2 characters are required";
       // document.getElementById('efname').style.backgroundColor = "red";
       // document.getElementById('efname').style.color = "black";
        
    }
    else if (fname.trim() != "" && fname.length < 2)
    {
    
        document.getElementById('efname').innerHTML= "<br>" + "\n First name should be minimum 2 characters long";
       // document.getElementById('efname').style.backgroundColor = "red";
      //  document.getElementById('efname').style.color = "black";
        
    }

    if(lname.trim() == "")
    {
    
        document.getElementById('elname').innerHTML= "<br>" + "\n Last name is mandatory and minimum 2 characters are required";
       // document.getElementById('elname').style.backgroundColor = "rgb(243, 233, 232);";
       // document.getElementById('elname').style.color = "black";
       // document.getElementById('elname').style.borderLeft="4px  rgb(211, 8, 12) solid"
        
    }
    else if (lname.trim() != "" && lname.length < 2)
    {
    
        document.getElementById('elname').innerHTML= "<br>" + "\n Last name should be minimum 2 characters long";
       // document.getElementById('elname').style.backgroundColor = "red";
      //  document.getElementById('elname').style.color = "black";
        
    }

    if(phone.trim() == "")
    {
    
        document.getElementById('ephone').innerHTML= "<br>" + "\n Phone number is mandatory";
        //document.getElementById('ephone').style.backgroundColor = "red";
        //document.getElementById('ephone').style.color = "black";
        
    }
    else if (phone.trim() != "" && phone.length <=9)
    {
    
        document.getElementById('ephone').innerHTML= "<br>" + "\n Phone number should be 10 digits long, no letters accepted";
        //document.getElementById('ephone').style.backgroundColor = "red";
        //document.getElementById('ephone').style.color = "black";
        
    }

    if(email.trim() == "")
    {
    
        document.getElementById('eemail').innerHTML= "<br>" + "Email address is mandatory";

        
    }
    else if (!email.match(mailformat))
    {
    
        document.getElementById('eemail').innerHTML= "<br>" + "\n Invalid email yourname@domain.com";
       // document.getElementById('eemail').style.backgroundColor = "red";
       // document.getElementById('eemail').style.color = "black";
        
    }
	// Get the id or name of the form, to make a unique
	// fragment identifier
	if (objForm.id)
	{
		strLinkID = objForm.id + 'ErrorID';
	}
	else
	{
		strLinkID = objForm.name + 'ErrorID';
	}

	// Iterate through input form controls, looking for validation classes
	for (iFieldCounter=0; iFieldCounter<objField.length; iFieldCounter++)
	{
		// Get the class for the field, and look for the appropriate class
		arClass = objField[iFieldCounter].className.split(' ');
		for (iClassCounter=0; iClassCounter<arClass.length; iClassCounter++)
		{
			switch (arClass[iClassCounter])
			{
				case 'string':
					if (!isString(objField[iFieldCounter].value, arClass))
					{
						if (iErrors === 0)
						{
							logError(objField[iFieldCounter], objLabel, objList, strLinkID);
						}
						else
						{
							logError(objField[iFieldCounter], objLabel, objList, '');
						}
						iErrors++;
					}
					break;
				case 'number':
					if (!isNumber(objField[iFieldCounter].value, arClass))
					{
						if (iErrors === 0)
						{
							logError(objField[iFieldCounter], objLabel, objList, strLinkID);
						}
						else
						{
							logError(objField[iFieldCounter], objLabel, objList, '');
						}
						iErrors++;
					}
					break;

				case 'email' :
					if (!isEmail(objField[iFieldCounter].value, arClass))
					{
						if (iErrors === 0)
						{
							logError(objField[iFieldCounter], objLabel, objList, strLinkID);
						}
						else
						{
							logError(objField[iFieldCounter], objLabel, objList, '');
						}
						iErrors++;
					}
					break;
                    case 'text' :
                        if (!isText(objField[iFieldCounter].value, arClass))
                        {
                            if (iErrors === 0)
                            {
                                logError(objField[iFieldCounter], objLabel, objList, strLinkID);
                            }
                            else
                            {
                                logError(objField[iFieldCounter], objLabel, objList, '');
                            }
                            iErrors++;
                        }
                        break;
			}
		}
	}

	if (iErrors > 0)
	{
		// If not valid, display error messages
		objError = objForm.getElementsByTagName('div');
		
		// Look for existing errors
		for (iCounter=0; iCounter<objError.length; iCounter++)
		{
			if (objError[iCounter].className == 'validationerrors')
			{
				objExisting = objError[iCounter];
			}
		}

		objNew = document.createElement('div');
		objTitle = document.createElement('h2');
		objParagraph = document.createElement('p');
		objAnchor = document.createElement('a');

		if (iErrors == 1)
		{
			objAnchor.appendChild(document.createTextNode('1 Error in Submission'));
		}
		else
		{
			objAnchor.appendChild(document.createTextNode(iErrors + ' Errors in Submission'));
		}
		objAnchor.href = '#' + strLinkID ;
		objAnchor.className = 'submissionerror' ;

		objTitle.appendChild(objAnchor);
		objParagraph.appendChild(document.createTextNode('The form could not be submitted because of the errors in below fields:'));
		objNew.className = 'validationerrors';

		objNew.appendChild(objTitle);
		objNew.appendChild(objParagraph);
		objNew.appendChild(objList);
		
		// If there were existing error, replace them with the new lot,
		// otherwise add the new errors to the start of the form
		if (objExisting)
		{
			objExisting.parentNode.replaceChild(objNew, objExisting);
		}
		else
		{
			objPosition = objForm.firstChild;
			objForm.insertBefore(objNew, objPosition);
		}

		// Allow for latency
		setTimeout(function() { objAnchor.focus(); }, 50);
		
		// Don't submit the form
		objForm.submitAllowed = false;
		return false;
	}

	// Submit the form
	return true;
}

// Function to add a link in a list item that points to problematic field control
function addError(objList, strError, strID, strErrorID, objText)
{
	var objListItem = document.createElement('li');
	var objAnchor = document.createElement('a');
	
	// Fragment identifier to the form control
	objAnchor.href='#' + strID;

	// Make this the target for the error heading
	if (strErrorID.length > 0)
	{
		objAnchor.id = strErrorID;
	}

	// Use the label prompt for the error message
	objAnchor.appendChild(document.createTextNode(strError));
	// Add keyboard and mouse events to set focus to the form control
	objAnchor.onclick = function(event){return focusFormField(this, event);};
	objAnchor.onkeypress = function(event){return focusFormField(this, event);};
	objListItem.appendChild(objAnchor);
	objList.appendChild(objListItem);
}

function focusFormField(objAnchor, objEvent)
{
	var strFormField, objForm;

	// Allow keyboard navigation over links
	if (objEvent && objEvent.type == 'keypress')
	{
		if (objEvent.keyCode != 13 && objEvent.keyCode != 32)
		{
			return true;
		}
	}

	// set focus to the form control
	strFormField = objAnchor.href.match(/[^#]\w*$/);
	objForm = getForm(strFormField);
	objForm[strFormField].focus();
	return false;
}

// Function to return the form element from a given form field name
function getForm(strField)
{
	var objElement = document.getElementById(strField);

	// Find the appropriate form
	do
	{
		objElement = objElement.parentNode;
	} while (!objElement.tagName.match(/form/i) && objElement.parentNode);

	return objElement;
}

// Function to log the error in a list
function logError(objField, objLabel, objList, strErrorID, objText)
{
	var iCounter, strError;

	// Search the label for the error prompt
	for (iCounter=0; iCounter<objLabel.length; iCounter++)
	{
		if (objLabel[iCounter].htmlFor == objField.id)
		{
			strError = objLabel[iCounter].firstChild.nodeValue;
		}
	}

	addError(objList, strError, objField.id, strErrorID, objText);
}

// Validation routines - add as required

function isString(strValue, arClass)
{
	var bValid = (typeof strValue == 'string' && strValue.replace(/^\s*|\s*$/g, '') !== '' && isNaN(strValue) && strValue.length >1 );

	return checkOptional(bValid, strValue, arClass);
}

function isEmail(strValue, arClass)
{
	var objRE = /^[\w-\.\']{1,}\@([\da-zA-Z\-]{1,}\.){1,}[\da-zA-Z\-]{2,}$/;
	var bValid = objRE.test(strValue);

	return checkOptional(bValid, strValue, arClass);
}

function isNumber(strValue, arClass)
{
	var bValid = (!isNaN(strValue) && strValue.replace(/^\s*|\s*$/g, '') !== ''  && strValue.length ==10);

	return checkOptional(bValid, strValue, arClass);
}

function isText(strValue, arClass)
{
	var bValid = (typeof strValue == 'string' && strValue.replace(/^\s*|\s*$/g, '') !== '' && isNaN(strValue));

	return checkOptional(bValid, strValue, arClass);
}

function checkOptional(bValid, strValue, arClass)
{
	var bOptional = false;
	var iCounter;

	// Check if optional
	for (iCounter=0; iCounter<arClass.length; iCounter++)
	{
		if (arClass[iCounter] == 'optional')
		{
			bOptional = true;
		}
	}

	if (bOptional && strValue.replace(/^\s*|\s*$/g, '') === '')
	{
		return true;
	}

	return bValid;
}

