sap.ui.define(
	[
		// prettier 방지용 주석
		"sap/m/MessageBox",
	],
	function (
		// prettier 방지용 주석
		SapMMessageBox
	) {
		"use strict";

		return {
			...SapMMessageBox,
			alert(vMessage, mOptions = {}) {
				SapMMessageBox.alert(vMessage, { ...mOptions, title: "알림" });
			},
			confirm(vMessage, mOptions = {}) {
				SapMMessageBox.confirm(vMessage, { ...mOptions, title: "확인" });
			},
			error(vMessage, mOptions = {}) {
				SapMMessageBox.error(vMessage, { ...mOptions, title: "오류" });
			},
			information(vMessage, mOptions = {}) {
				SapMMessageBox.information(vMessage, { ...mOptions, title: "정보" });
			},
			show(vMessage, mOptions = {}) {
				SapMMessageBox.show(vMessage, { ...mOptions, title: "보기" });
			},
			success(vMessage, mOptions = {}) {
				SapMMessageBox.success(vMessage, { ...mOptions, title: "성공" });
			},
			warning(vMessage, mOptions = {}) {
				SapMMessageBox.warning(vMessage, { ...mOptions, title: "경고" });
			},
		};
	}
);
