sap.ui.define([], function () {
	"use strict";

	return {
		/**
		 * Rounds the number unit value to 2 digits
		 * @public
		 * @param {string} sValue the number string to be rounded
		 * @returns {string} sValue with 2 digits rounded
		 */
		numberUnit: function (sValue) {
			if (!sValue) {
				return "";
			}
			return parseFloat(sValue).toFixed(2);
		},

		rowHighlight: function (sValue) {
			switch (sValue) {
				case "10":
					return sap.ui.core.IndicationColor.Indication01;
				case "20":
					return sap.ui.core.IndicationColor.Indication03;
				case "40":
					return sap.ui.core.IndicationColor.Indication04;
				case "45":
					return sap.ui.core.IndicationColor.Indication02;
				case "60":
					return sap.ui.core.IndicationColor.Indication05;
				default:
					return null;
			}
		},

		weightState: function (fMeasure, sUnit) {
			// Boarder values for different status of weight
			var fMaxWeightSuccess = 1;
			var fMaxWeightWarning = 5;
			var fAdjustedMeasure = parseFloat(fMeasure);

			// if the value of fMeasure is not a number, no status will be set
			if (isNaN(fAdjustedMeasure)) {
				return "None";
			} else {
				if (sUnit === "G") {
					fAdjustedMeasure = fMeasure / 1000;
				}

				if (fAdjustedMeasure < 0) {
					return "None";
				} else if (fAdjustedMeasure < fMaxWeightSuccess) {
					return "Success";
				} else if (fAdjustedMeasure < fMaxWeightWarning) {
					return "Warning";
				} else {
					return "Error";
				}
			}
		},
	};
});
