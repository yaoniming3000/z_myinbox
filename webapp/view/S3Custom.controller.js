sap.ui.controller("cross.fnd.fiori.inbox.CA_FIORI_INBOXExtension.view.S3Custom", {

	extHookChangeFooterButtons: function (oButtonList) {
		// Place your hook implementation code here 
		var zlength = oButtonList.aButtonList.length;
		var zbutlist = [];
		console.log("extHook Change Footer S3");
		for (var i=0; i<zlength;i++) {
			if (oButtonList.aButtonList[i].sI18nBtnTxt !== "XBUT_RESUBMIT") {
				zbutlist.push(oButtonList.aButtonList[i]);
			}
		}
		oButtonList.aButtonList = zbutlist;
		oButtonList.oJamOptions = null;
		oButtonList.oEmailSettings = null;
		return oButtonList;
	}

});