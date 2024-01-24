function solve() { 
	let password = 
		document.getElementById('password').value; 
	let repassword = 
		document.getElementById('confirmpassword').value; 
	let mobile = 
		document.getElementById('mobile').value; 
	let mail = 
		document.getElementById('email').value; 
	let flag = 1; 
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

	if (!emailRegex.test(mail)) { 
		flag = 0; 
		pass.innerText = 
			'Please enter a valid email address.'; 
		setTimeout(() => { 
			pass.innerText = ""; 
		}, 3000); 
	} 

	if (password !== confirmpassword) { 
		flag = 0; 
		pass.innerText = 
			"Passwords do not match. Please re-enter."; 
		setTimeout(() => { 
			pass.innerText = ""; 
		}, 3000); 
	} 

	let passwordRegex = 
		/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9])\S{8,}$/; 

	if (!passwordRegex.test(password)) { 
		flag = 0; 
		pass.innerText = 'Please enter a valid mobile number.';
		setTimeout(() => { 
			pass.innerText = ""; 
		}, 3000); 
	} 
	if (flag) 
		alert("Form submitted"); 
}