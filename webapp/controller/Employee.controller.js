sap.ui.define(
	[
		"./BaseController", //
		"sap/ui/model/json/JSONModel",
		"../model/formatter",
		"sap/ui/core/Fragment",
		"sap/m/MessageToast",
		"sap/m/MessageBox",
	],
	function (BaseController, JSONModel, formatter, Fragment, MessageToast, MessageBox) {
		"use strict";

		return BaseController.extend("pub.pubsample.controller.Employee", {
			formatter: formatter,

			/* =========================================================== */
			/* lifecycle methods                                           */
			/* =========================================================== */

			/**
			 * Called when the Template1 controller is instantiated.
			 * @public
			 */
			onInit: function () {
				var oModel = new JSONModel({
					navigation: {
						isShow: true,
						width: "22%",
						search: {
							results: [
								{ Ename: "김지현", Manager: true, Todo1: "부장", Todo2: "팀장", Todo3: "예스코 기술연구소 정보기술팀", Todo4: "6년 11개월 (2015.01.01 입사) 재직", Todo5: "인사(5년 6개월)" },
								{ Ename: "김지현", Manager: false, Todo1: "부장", Todo2: "팀장", Todo3: "예스코 기술연구소 정보기술팀", Todo4: "6년 11개월 (2015.01.01 입사) 재직", Todo5: "인사(5년 6개월)" },
								{ Ename: "김지현", Manager: false, Todo1: "부장", Todo2: "팀장", Todo3: "예스코 기술연구소 정보기술팀", Todo4: "6년 11개월 (2015.01.01 입사) 재직", Todo5: "인사(5년 6개월)" },
								{ Ename: "김지현", Manager: false, Todo1: "부장", Todo2: "팀장", Todo3: "예스코 기술연구소 정보기술팀", Todo4: "6년 11개월 (2015.01.01 입사) 재직", Todo5: "인사(5년 6개월)" },
								{ Ename: "김지현", Manager: false, Todo1: "부장", Todo2: "팀장", Todo3: "예스코 기술연구소 정보기술팀", Todo4: "6년 11개월 (2015.01.01 입사) 재직", Todo5: "인사(5년 6개월)" },
								{ Ename: "김지현", Manager: false, Todo1: "부장", Todo2: "팀장", Todo3: "예스코 기술연구소 정보기술팀", Todo4: "6년 11개월 (2015.01.01 입사) 재직", Todo5: "인사(5년 6개월)" },
								{ Ename: "김지현", Manager: false, Todo1: "부장", Todo2: "팀장", Todo3: "예스코 기술연구소 정보기술팀", Todo4: "6년 11개월 (2015.01.01 입사) 재직", Todo5: "인사(5년 6개월)" },
								{ Ename: "김지현", Manager: false, Todo1: "부장", Todo2: "팀장", Todo3: "예스코 기술연구소 정보기술팀", Todo4: "6년 11개월 (2015.01.01 입사) 재직", Todo5: "인사(5년 6개월)" },
								{ Ename: "김지현", Manager: false, Todo1: "부장", Todo2: "팀장", Todo3: "예스코 기술연구소 정보기술팀", Todo4: "6년 11개월 (2015.01.01 입사) 재직", Todo5: "인사(5년 6개월)" },
								{ Ename: "김지현", Manager: false, Todo1: "부장", Todo2: "팀장", Todo3: "예스코 기술연구소 정보기술팀", Todo4: "6년 11개월 (2015.01.01 입사) 재직", Todo5: "인사(5년 6개월)" },
								{ Ename: "김지현", Manager: false, Todo1: "부장", Todo2: "팀장", Todo3: "예스코 기술연구소 정보기술팀", Todo4: "6년 11개월 (2015.01.01 입사) 재직", Todo5: "인사(5년 6개월)" },
								{ Ename: "김지현", Manager: false, Todo1: "부장", Todo2: "팀장", Todo3: "예스코 기술연구소 정보기술팀", Todo4: "6년 11개월 (2015.01.01 입사) 재직", Todo5: "인사(5년 6개월)" },
								{ Ename: "김지현", Manager: false, Todo1: "부장", Todo2: "팀장", Todo3: "예스코 기술연구소 정보기술팀", Todo4: "6년 11개월 (2015.01.01 입사) 재직", Todo5: "인사(5년 6개월)" },
								{ Ename: "김지현", Manager: false, Todo1: "부장", Todo2: "팀장", Todo3: "예스코 기술연구소 정보기술팀", Todo4: "6년 11개월 (2015.01.01 입사) 재직", Todo5: "인사(5년 6개월)" },
								{ Ename: "김지현", Manager: false, Todo1: "부장", Todo2: "팀장", Todo3: "예스코 기술연구소 정보기술팀", Todo4: "6년 11개월 (2015.01.01 입사) 재직", Todo5: "인사(5년 6개월)" },
								{ Ename: "김지현", Manager: false, Todo1: "부장", Todo2: "팀장", Todo3: "예스코 기술연구소 정보기술팀", Todo4: "6년 11개월 (2015.01.01 입사) 재직", Todo5: "인사(5년 6개월)" },
							],
						},
						treeData: [
							{
								ref: "sap-icon://org-chart",
								title: "예스코홀딩스",
								Otype: "O",
								Chief: "",
								Objid: "00000001",
								PupObjid: "00000000",
								nodes: [
									{
										ref: "sap-icon://org-chart",
										title: "인사팀",
										Otype: "O",
										Chief: "",
										Objid: "00000011",
										PupObjid: "00000001",
										nodes: [
											{
												ref: "sap-icon://org-chart",
												title: "HRTF",
												Otype: "O",
												Chief: "",
												Objid: "00000013",
												PupObjid: "00000011",
												nodes: [
													{ ref: "sap-icon://manager", title: "홍길동", Otype: "P", Chief: "X", Objid: "00000211", PupObjid: "00000013" },
													{ ref: "sap-icon://employee", title: "홍길동", Otype: "P", Chief: "", Objid: "00000212", PupObjid: "00000013" },
													{ ref: "sap-icon://employee", title: "홍길동", Otype: "P", Chief: "", Objid: "00000213", PupObjid: "00000013" },
													{ ref: "sap-icon://employee", title: "홍길동", Otype: "P", Chief: "", Objid: "00000214", PupObjid: "00000013" },
													{ ref: "sap-icon://employee", title: "홍길동", Otype: "P", Chief: "", Objid: "00000215", PupObjid: "00000013" },
													{ ref: "sap-icon://employee", title: "홍길동", Otype: "P", Chief: "", Objid: "00000216", PupObjid: "00000013" },
													{ ref: "sap-icon://employee", title: "홍길동", Otype: "P", Chief: "", Objid: "00000217", PupObjid: "00000013" },
													{ ref: "sap-icon://employee", title: "홍길동", Otype: "P", Chief: "", Objid: "00000218", PupObjid: "00000013" },
													{ ref: "sap-icon://employee", title: "홍길동", Otype: "P", Chief: "", Objid: "00000219", PupObjid: "00000013" },
													{ ref: "sap-icon://employee", title: "홍길동", Otype: "P", Chief: "", Objid: "00000220", PupObjid: "00000013" },
													{ ref: "sap-icon://employee", title: "홍길동", Otype: "P", Chief: "", Objid: "00000221", PupObjid: "00000013" },
												],
											},
											{ ref: "sap-icon://manager", title: "홍길동", Otype: "P", Chief: "X", Objid: "00000111", PupObjid: "00000011" },
											{ ref: "sap-icon://employee", title: "홍길동", Otype: "P", Chief: "", Objid: "00000112", PupObjid: "00000011" },
											{ ref: "sap-icon://employee", title: "홍길동", Otype: "P", Chief: "", Objid: "00000113", PupObjid: "00000011" },
											{ ref: "sap-icon://employee", title: "홍길동", Otype: "P", Chief: "", Objid: "00000114", PupObjid: "00000011" },
											{ ref: "sap-icon://employee", title: "홍길동", Otype: "P", Chief: "", Objid: "00000115", PupObjid: "00000011" },
											{ ref: "sap-icon://employee", title: "홍길동", Otype: "P", Chief: "", Objid: "00000116", PupObjid: "00000011" },
										],
									},
									{ ref: "sap-icon://org-chart", title: "기획팀", Otype: "O", Chief: "", Objid: "00000012", PupObjid: "00000001", nodes: [{ ref: "sap-icon://manager", title: "홍길동", Otype: "P", Chief: "X", Objid: "00000222", PupObjid: "00000012" }] },
								],
							}, //
							{ ref: "sap-icon://org-chart", title: "예스코", Otype: "O", Chief: "", Objid: "00000002", PupObjid: "00000000", nodes: [{ ref: "sap-icon://manager", title: "홍길동", Otype: "P", Chief: "X", Objid: "00000223", PupObjid: "00000002" }] },
						],
					},
					employee: {
						width: "78%",
						header: {
							baseinfo: [
								{ data: "홍길순 부장/팀장" },
								{ data: "회사" },
								{ data: "예스코홀딩스" },
								{ data: "그룹입사일" },
								{ data: "2020.01.01(1년 11개월)" },
								{ data: "010-1234-1234" },
								{ data: "부서" },
								{ data: "인사전략팀" },
								{ data: "회사입사일" },
								{ data: "2020.01.01(1년 11개월)" },
								{ data: "abc@yescoholdings.com" },
								{ data: "사업장" },
								{ data: "서울본사" },
								{ data: "부서배치일" },
								{ data: "2020.01.01(1년 11개월)" },
								{ data: "1990.01.01 여(30세)" },
								{ data: "직군" },
								{ data: "일반직(연봉)" },
								{ data: "직급승진일" },
								{ data: "2020.01.01(1년 11개월)" },
								{ data: "재직자 / 12345" },
								{ data: "직무" },
								{ data: "인사(1년 11개월)" },
								{ data: "직책임용일" },
								{ data: "2020.01.01(1년 11개월)" },
							],
							timeline: [
								{ label: "회사입사일", data: "2010.01.01" },
								{ label: "부서배치일", data: "2015.01.01" },
								{ label: "직급승진일", data: "2016.01.01" },
								{ label: "직책임용일", data: "2010.01.01" },
								{ label: "10년장기근속일", data: "2019.12.31" },
							],
						},
						base: {
							isShow: true,
						},
						action: {
							isShow: false,
							rowcount: 3,
							list: [
								{ idx: "1", Todo1: "2020.01.01", Todo2: "조직개편", Todo3: "조직명칭변경", Todo4: "서울본사", Todo5: "인사팀", Todo6: "사원", Todo7: "팀원", Todo8: "일반직(연봉)" }, //
								{ idx: "2", Todo1: "2020.01.01", Todo2: "조직개편", Todo3: "조직명칭변경", Todo4: "서울본사", Todo5: "인사팀", Todo6: "사원", Todo7: "팀원", Todo8: "일반직(연봉)" },
								{ idx: "3", Todo1: "2020.01.01", Todo2: "조직개편", Todo3: "조직명칭변경", Todo4: "서울본사", Todo5: "인사팀", Todo6: "사원", Todo7: "팀원", Todo8: "일반직(연봉)" },
							],
						},
						private: {
							isShow: false,
							rowcount: 2,
							list: [
								{ Todo1: "영문주소", Todo2: "대한민국", Todo3: "서울특별시", Todo4: "04807", Todo5: "서울시 성동구 자동차시장길23(용답동,예스코)", Todo6: "3333층" }, //
								{ Todo1: "등록기준지(본적)", Todo2: "대한민국", Todo3: "서울특별시", Todo4: "04807", Todo5: "서울시 성동구 자동차시장길23(용답동,예스코)", Todo6: "4444층" }, //
							],
							address: {
								typelist: [
									{ key: "01", data: "본적지" }, //
									{ key: "02", data: "주민등록지" },
								],
								sidolist: [
									{ key: "01", data: "서울특별시" }, //
									{ key: "02", data: "부산광역시" },
									{ key: "03", data: "경기도" },
									{ key: "04", data: "강원도" },
								],
								form: {},
							},
						},
					},
				});
				this.getView().setModel(oModel);
			},

			/* =========================================================== */
			/* event handlers                                              */
			/* =========================================================== */
			onToggleNavigation: function (oEvent) {
				const bState = oEvent.getParameter("state");

				this.getView().getModel().setProperty("/navigation/isShow", bState);
				this.getView()
					.getModel()
					.setProperty("/navigation/width", bState ? "22%" : "4%");
				this.getView()
					.getModel()
					.setProperty("/employee/width", bState ? "78%" : "96%");
			},

			onClickEmployeeCard: function (oEvent) {
				const sPath = oEvent.getSource().getBindingContext();
				MessageToast.show(`${sPath} Card click!!`);
			},

			onToggleProfile: function (oEvent) {
				const oClickedButton = oEvent.getSource();
				const sId = oClickedButton.getId();
				const bPressed = oClickedButton.getPressed();
				const oViewModel = this.getView().getModel();
				const aLayoutId = ["base", "action", "private"];

				if (!bPressed) return;

				oClickedButton
					.getParent()
					.getItems()
					.forEach((control) => {
						control.setPressed(false);
					});
				oClickedButton.setPressed(true);

				aLayoutId.forEach((key) => {
					oViewModel.setProperty(`/employee/${key}/isShow`, sId.includes(key) ? true : false);
				});
			},

			openAddressDialog: function () {
				var oView = this.getView();

				if (!this._pAddressDialog) {
					this._pAddressDialog = Fragment.load({
						id: oView.getId(),
						name: "pub.pubsample.view.AddressDialog",
						controller: this,
					}).then(function (oDialog) {
						oView.addDependent(oDialog);
						return oDialog;
					});
				}
				this._pAddressDialog.then(function (oDialog) {
					oDialog.open();
				});
			},

			openModifyAddressDialog: function () {
				MessageBox.warning("준비중입니다.", { title: "경고" });
			},

			onDeleteAddress: function () {
				MessageBox.warning("준비중입니다.", { title: "경고" });
			},

			openSearchZipcodePopup: function () {
				window.open("postcodeFroBrowser.html?CBF=fn_SetAddr", "pop", "width=550,height=550, scrollbars=yes, resizable=yes");
			},

			onAddressDialogClose: function () {
				this.byId("addressDialog").close();
			},
		});
	}
);

function fn_SetAddr(Zip, fullAddr) {
	const oView = sap.ui.getCore().byId("container-pubsample---employee");
	const oViewModel = oView.getModel();

	oViewModel.setProperty("/employee/private/address/form/zip", Zip);
	oViewModel.setProperty("/employee/private/address/form/address1", fullAddr);
}
