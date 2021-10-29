sap.ui.define(["sap/ui/core/mvc/Controller", "sap/ui/model/json/JSONModel", "../model/formatter"], function (Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("pub.pubsample.controller.Layout", {
		formatter: formatter,
		/**
		 * @override
		 */
		onInit() {
			var oModel = new JSONModel(sap.ui.require.toUrl("pub/pubsample/localService/mockdata/cong.json"));
			// The default limit of the model is set to 100. We want to show all the entries.
			oModel.setSizeLimit(100000);
			this.getView().setModel(oModel);
		},
	});
});
