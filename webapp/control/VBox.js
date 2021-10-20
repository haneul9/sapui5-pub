sap.ui.define(
	[
		"sap/m/VBox", //
		"sap/m/FlexRendertype",
	],
	function (VBox, FlexRendertype) {
		"use strict";

		return VBox.extend("sap.ui.pub.control.VBox", {
			metadata: {
				properties: {
					renderType: {
						type: "sap.m.FlexRendertype",
						group: "Misc",
						defaultValue: FlexRendertype.Bare,
					},
				},
			},
			renderer: {},
		});
	}
);
