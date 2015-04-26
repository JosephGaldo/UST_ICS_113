//Employee's Signup
$(document).ready(function () {
    $("#Sign_up_Employee").submit(function (event) {
        event.preventDefault();
        var pass1 = $( 'input[name=password1]' ).val();
		var pass2 = $( 'input[name=password2]' ).val();
        if (pass1 != pass2) 
		{
			toastr.error('Passwords should be match!', 'Password Error');
			return true;
		}
		else
		{
			toastr.success('Registration Success!');
			//Resets form
			$('#Sign_up_Employee').trigger("reset");
			//Hides Modal
			$('#employeesignupModal').modal('hide');
			
		}
    });
});
//Student's Signup
$(document).ready(function () { 
    $("#Sign_up_student").submit(function (event) {
        event.preventDefault();
		//Gets value
        var pass1 = $( 'input[name=password1student]' ).val();
		var pass2 = $( 'input[name=password2student]' ).val();
        if (pass1 != pass2) 
		{
			toastr.error('Passwords should be match!', 'Password Error');
			return true;
		}
		else
		{
			toastr.success('Registration Success!');
			//Resets form
			$('#Sign_up_student').trigger("reset");
			//Hides modal
			$('#studentsignupModal').modal('hide');
			
		}
    });
});


