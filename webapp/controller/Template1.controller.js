sap.ui.define(
	[
		"./BaseController", //
		"sap/ui/model/json/JSONModel",
		"../model/formatter",
		"sap/ui/core/Fragment",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator",
		"sap/m/MessageToast",
	],
	function (BaseController, JSONModel, formatter, Fragment, Filter, FilterOperator, MessageToast) {
		"use strict";

		return BaseController.extend("pub.pubsample.controller.Template1", {
			formatter: formatter,

			/* =========================================================== */
			/* lifecycle methods                                           */
			/* =========================================================== */

			/**
			 * Called when the Template1 controller is instantiated.
			 * @public
			 */
			onInit: function () {
				var oModel = new JSONModel(sap.ui.require.toUrl("pub/pubsample/localService/mockdata/cong.json"));
				// The default limit of the model is set to 100. We want to show all the entries.
				oModel.setSizeLimit(100000);
				this.getView().setModel(oModel);
			},

			/* =========================================================== */
			/* event handlers                                              */
			/* =========================================================== */

			/**
			 * Triggered by the table's 'updateFinished' event: after new table
			 * data is available, this handler method updates the table counter.
			 * This should only happen if the update was successful, which is
			 * why this handler is attached to 'updateFinished' and not to the
			 * table's list binding's 'dataReceived' method.
			 * @param {sap.ui.base.Event} oEvent the update finished event
			 * @public
			 */
			onUpdateFinished: function (oEvent) {
				// update the Template1's object counter after the table update
				var sTitle,
					oTable = oEvent.getSource(),
					iTotalItems = oEvent.getParameter("total");
				// only update the counter if the length is final and
				// the table is not empty
				if (iTotalItems && oTable.getBinding("items").isLengthFinal()) {
					sTitle = this.getResourceBundle().getText("Template1TableTitleCount", [iTotalItems]);
				} else {
					sTitle = this.getResourceBundle().getText("Template1TableTitle");
				}
				this.getModel("Template1View").setProperty("/Template1TableTitle", sTitle);
			},

			/**
			 * Internal helper method to apply both filter and search state together on the list binding
			 * @param {sap.ui.model.Filter[]} aTableSearchState An array of filters for the search
			 * @private
			 */
			_applySearch: function (aTableSearchState) {
				var oTable = this.byId("table"),
					oViewModel = this.getModel("Template1View");
				oTable.getBinding("items").filter(aTableSearchState, "Application");
				// changes the noDataText of the list in case there are no filter results
				if (aTableSearchState.length !== 0) {
					oViewModel.setProperty("/tableNoDataText", this.getResourceBundle().getText("Template1NoDataWithSearchText"));
				}
			},

			onValueHelpRequest(oEvent) {
				var sInputValue = oEvent.getSource().getValue(),
					oView = this.getView();

				if (!this._pValueHelpDialog) {
					this._pValueHelpDialog = Fragment.load({
						id: oView.getId(),
						name: "pub.pubsample.view.ValueHelpDialog",
						controller: this,
					}).then(function (oDialog) {
						oView.addDependent(oDialog);
						return oDialog;
					});
				}
				this._pValueHelpDialog.then(function (oDialog) {
					// Create a filter for the binding
					oDialog.getBinding("items").filter([new Filter("Name", FilterOperator.Contains, sInputValue)]);
					// Open ValueHelpDialog filtered by the input's value
					oDialog.open(sInputValue);
				});
			},

			onValueHelpSearch: function (oEvent) {
				var sValue = oEvent.getParameter("value");
				var oFilter = new Filter("Name", FilterOperator.Contains, sValue);

				oEvent.getSource().getBinding("items").filter([oFilter]);
			},

			onValueHelpClose: function (oEvent) {
				var oSelectedItem = oEvent.getParameter("selectedItem");
				oEvent.getSource().getBinding("items").filter([]);

				if (!oSelectedItem) {
					return;
				}

				this.byId("productInput").setValue(oSelectedItem.getTitle());
			},

			handleSelectionChange: function (oEvent) {
				var changedItems = oEvent.getParameter("changedItems") || [oEvent.getParameter("changedItem")];
				var isSelected = oEvent.getParameter("selected");
				var isSelectAllTriggered = oEvent.getParameter("selectAll");
				var state = isSelected ? "Selected" : "Deselected";

				var fnLogChangedItems = function () {
					var changesLog = "Event 'selectionChange':\n Select all: " + isSelectAllTriggered + ":\n ";

					changedItems.forEach(function (oItem) {
						changesLog += state + " '" + oItem.getText() + "'" + "\n";
					});

					return changesLog;
				};

				MessageToast.show(fnLogChangedItems());
			},

			handleSelectionFinish: function (oEvent) {
				var selectedItems = oEvent.getParameter("selectedItems");
				var messageText = "Event 'selectionFinished': [";

				for (var i = 0; i < selectedItems.length; i++) {
					messageText += "'" + selectedItems[i].getText() + "'";
					if (i != selectedItems.length - 1) {
						messageText += ",";
					}
				}

				messageText += "]";

				MessageToast.show(messageText, {
					width: "auto",
				});
			},
		});
	}
);
