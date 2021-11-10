sap.ui.define(
	[
		"./BaseController", //
		"sap/ui/model/json/JSONModel",
	],
	function (BaseController, JSONModel) {
		"use strict";

		return BaseController.extend("pub.pubsample.controller.Navigation", {
			/* =========================================================== */
			/* lifecycle methods                                           */
			/* =========================================================== */
			onInit: function () {
				var oModel = new JSONModel(sap.ui.require.toUrl("pub/pubsample/localService/mockdata/products.json"));
				// The default limit of the model is set to 100. We want to show all the entries.
				oModel.setSizeLimit(100000);
				this.getView().setModel(oModel);
			},

			onPressItem: function (oEvent) {
				const oSource = oEvent.getSource();
				const sKey = oSource.getKey();

				console.log("sKey", sKey);
				this.getRouter().navTo(sKey);
			},
		});
	}
);
