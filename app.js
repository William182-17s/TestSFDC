(
	import {OAuth} from 'forcejs';
	
	function getCookie(cname) {
  		let name = cname + "=";
  		let decodedCookie = decodeURIComponent(document.cookie);
  		let ca = decodedCookie.split(';');
  		for(let i = 0; i <ca.length; i++) {
    			let c = ca[i];
    			while (c.charAt(0) == ' ') {
      				c = c.substring(1);
    			}
    			if (c.indexOf(name) == 0) {
      				return c.substring(name.length, c.length);
    			}
  		}
  		return "";
	};
	
	var clientId = getCookie('clientId')
	var accessToken = getCookie('accToken');
	var instanceUrl = getCookie('instanceUrl')
	console.log("accessToken: " + accessToken);
	console.log("instanceUrl: " + instanceUrl);
	
	
	let oauth = OAuth.createInstance(clientId
                                ,"https://test.salesforce.com",
                                "https://infinite-brushlands-64356.herokuapp.com/oauthcallback.html"
                                );
	oauth.login()
    	.then(oauthResult => {
        	console.log(oauthResult);
    	});
	
$Lightning.use("c:AppointmentTakingApp", function() {
        $Lightning.createComponent("c:appointmentHandler",
            { recordId : 'a1Z1x00000413RKEAY' },
            "AppointmentHandler",
            function() {
                console.log('LWC Componenet added in VF page'); 
            }
        );
    }, 
	instanceUrl,
	 accessToken
);
)
