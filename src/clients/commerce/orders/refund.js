

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var constants = require('../../../constants');


module.exports = function(Client){
	return Client.sub({
		createRefund :Client.method({
			method: constants.verbs.POST,
			url: '{+tenantPod}api/commerce/orders/{orderId}/refunds?responseFields={responseFields}'
		}),
		resendRefundEmail :Client.method({
			method: constants.verbs.PUT,
			url: '{+tenantPod}api/commerce/orders/{orderId}/refunds/{refundId}'
		})	
	});
};