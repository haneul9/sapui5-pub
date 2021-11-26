sap.ui.define([
	"sap/ui/core/mvc/Controller",
	'sap/ui/core/Fragment',
	'sap/ui/model/json/JSONModel',
], function (Controller,
	Fragment,
	JSONModel) {
	"use strict";

	return Controller.extend("pub.pubsample.controller.Template1Detail", {

		onDialog() {
			const oViewModel = new JSONModel({
				List: [],
			});

			this.getView().setModel(oViewModel);
			var aList = [
				{
				Type: '딸',
				Name: '채정안',
				Num: '123465-2*******',
				},
				{
				Type: '엄마',
				Name: '채정이',
				Num: '123465-2*******',
				},
				{
				Type: '아들',
				Name: '채정',
				Num: '123465-2*******',
				},
				{
				Type: '어머니',
				Name: '채정안',
				Num: '123465-2*******',
				}
				,{
				Type: '딸',
				Name: '채안안안',
				Num: '1234465-2*******',
				}
				,{
				Type: '딸',
				Name: '채정안',
				Num: '123465-2*******',
				}
			]
			this.getView().getModel().setProperty('/List', aList);
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
