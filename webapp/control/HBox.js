sap.ui.define(
	[
		"sap/m/HBox", //
		"sap/m/FlexRendertype",
	],
	function (HBox, FlexRendertype) {
		"use strict";

		return HBox.extend("sap.ui.pub.control.HBox", {
			metadata: {
				properties: {
					renderType: {
						type: "sap.m.FlexRendertype",
						defaultValue: FlexRendertype.Bare,
					},
				},
			},
			renderer: {},
		});
	}
);
