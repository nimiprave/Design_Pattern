 var p1 = new Promise(function(resolve, reject) {
 	var oData = provider.getAttendanceDataSet(orgViewId);
 	if (oData) {
 		resolve(oData);
 	}
 });

 p1.then(function(oData) {
 		var objectHeader = sap.ui.getCore().byId("__xmlview0--idoh");
 		var objStatus = sap.ui.getCore().byId("ohstatus");
 		objectHeader.setNumber(oData.number).setNumberUnit(oData.numberUnit);
 		objStatus.setText(oData.info);
 		var oState = findState(oData.infoState);
 		objStatus.setState(oState);
 		objectHeader.setNumberState(oState);

 		//that.createContent(oEvent.getParameter('selectedItem'), oData);
 		that.createContent(selectedItem, oData);
 		// track the currentIconTab.
 		oTracker.push(new _lTracker(orgViewId, oData));
 		page.setBusy(false);
 	}

 );



	fillList: function(oMasterModel) {
		this.byId("list").bindItems({
			path: "/MasterModelDataCollection",
			template: new sap.m.ObjectListItem({
				type: "{device>/listItemType}",
				title: "{parts:[{path:'EMPNAME'}], formatter:'hcm.approve.timesheet.util.Formatter.removeText'}",
				number: "{parts:[{path:'CATSHOURS'}], formatter:'hcm.approve.timesheet.util.Formatter.timeConverter'}", //Note 2206414 make duration display consistent with My Timesheet app
				numberUnit: "{i18n>TSA_HOURS}",
				attributes: [
							              new sap.m.ObjectAttribute({
						text: "{POSNAME}"
					})],
				firstStatus: new sap.m.ObjectStatus({
					text: "{i18n>TSA_STAT_FOR_APPR}",
					state: "None"
				}),
				secondStatus: new sap.m.ObjectStatus({
					text: "{parts:[{path:'NUM_WEEKS'}], formatter:'hcm.approve.timesheet.util.Formatter.weekAppender'}",
					state: "None"
				}),
				customData: new sap.ui.core.CustomData({
					key: "AtsPernr",
					value: "{PERNR}"
				})
			})
		});
	},
        
        
        	<items>
					<ObjectListItem
						type="{= ${device>/system/phone} ? 'Active' : 'Inactive'}"
						press="onSelectionChange"
						title="{EMPNAME}"
						number="{
							path: 'CATSHOURS',
							formatter: '.formatter.currencyValue'
						}"
						numberUnit="Hours"
					>
						<attributes>
							<ObjectAttribute  text="{POSNAME}"/>
						</attributes>
						<firstStatus>
							<ObjectStatus text/>
						</firstStatus>
					</ObjectListItem>
				</items>
        
        