sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/core/Fragment',
], function (Controller, Fragment) {
	"use strict";

	return Controller.extend("pub.pubsample.controller.Template1Detail", {

		onDialog() {
			if (!this.byId('targetSettingsDialog')) {
				Fragment.load({
					id: this.getView().getId(),
					name: 'pub.pubsample.view.TargetDialog',
					controller: this,
				}).then((oDialog) => {
					// connect dialog to the root view of this component (models, lifecycle)
					this.getView().addDependent(oDialog);
					oDialog.addStyleClass(this.getOwnerComponent().getContentDensityClass());
					oDialog.open();
				});
			}else {
				this.byId('targetSettingsDialog').open();
			}
		},

		onClick() {
			this.byId('targetSettingsDialog').close();
		}
	});
});
