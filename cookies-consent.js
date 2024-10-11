document.cookie = `consentAccepted=true; expires=${(date => (
	date.setDate(date.getDate() + 90), date.toUTCString()
))(new Date())}; path=/`;
