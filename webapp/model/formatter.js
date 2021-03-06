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
					return sap.ui.core.IndicationColor.None;
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

		/**
		 * @param {Object} o = {
		 * 		table: sap.ui.table.Table instance
		 * 		colIndices: rowspan을 적용할 column index array
		 * 		theadOrTbody: "header" or "table"
		 * 	}
		 */
		adjustRowSpan: function (o) {
			$.each(o.colIndices || [], function (j, colIndex) {
				var selector = `#${o.table.getId()}-${o.theadOrTbody} tbody>tr td:nth-child(${colIndex + 1}):visible`;
				var tds = $(selector).get(),
					prevTD = tds.shift();

				$.each(tds, function (i, td) {
					var p = $(prevTD),
						c = $(td);
					if (c.text() === p.text()) {
						p.attr("rowspan", Number(p.attr("rowspan") || 1) + 1);
						c.hide();
					} else {
						prevTD = td;
					}
				});
			});
		},

		summaryColspan: function () {
			const $firstTD = $("#container-pubsample---worklist--groupTable-rows-row3-col0");
			const $firstCheckbox = $("#container-pubsample---worklist--groupTable-rowsel3");
			const aHideTDs = [1, 2, 3, 4, 5];

			$firstTD.attr("colspan", 6);
			$firstCheckbox.hide();

			aHideTDs.forEach((idx) => {
				const $selectTD = $(`#container-pubsample---worklist--groupTable-rows-row3-col${idx}`);
				$selectTD.hide();
			});
		},
	};
});
