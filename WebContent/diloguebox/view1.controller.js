sap.ui.controller("diloguebox.view1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf diloguebox.view1
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf diloguebox.view1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf diloguebox.view1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf diloguebox.view1
*/
//	onExit: function() {
//
//	}
	openDialogue : function() {
		var oDialog1 = new sap.m.Dialog(
				{title  : "Title"});
		//oDialog1.setTitle("My first Dialog");
		var olist = new sap.m.List({
			
			mode : sap.m.ListMode.MultiSelect,
			items: [new sap.m.StandardListItem
		({
			title :"Regular", info :"@150"
			
			
		}),new sap.m.StandardListItem
		({
			title :"Regular", info :"@150"
			
			
		})]
		});
		oDialog1.addContent(olist);
		oDialog1.addButton(new sap.m.Button({text: "Add to cart", icon:"sap-icon://add-activity", press:function(){oDialog1.close();}}));
		oDialog1.open();
	}

});