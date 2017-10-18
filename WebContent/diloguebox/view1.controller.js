sap.ui.controller("diloguebox.view1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf diloguebox.view1
*/

	onInit: function() {

	     var oModel = new sap.ui.model.json.JSONModel();

	        oModel.loadData("model/model.json");

	        this.getView().setModel(oModel);

	},

	       // var list = this.getView().byId("idlist");

	        

	       /* var slist = this.getView().byId("idslist");*/

	        

	        //  var  oTemplate1 = new sap.m.StandardListItem({title : "{itemtype}"});

	        

	          

	        

	         /* var oTemplate = new sap.m.Panel({

	              headerText :"{item}",

	              expandable : "{expandable}",

	              	  content : new sap.m.List({

	              items : {path:"types of items",

	              	    template:oTemplate1}

	            }),

	        

	        });

	        

	       list.bindAggregation("items","/dataCollection",oTemplate);

	        

	},
*/

	Login : function(){
		
		var appref= this.getView().getParent();
		appref.to("idreg")
		
		
	},

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
		var panel = new sap.m.Panel({expandable:false, headerText:"rolls",
		content : new sap.m.List({
			
			mode : sap.m.ListMode.MultiSelect,
			items: [new sap.m.StandardListItem
		({
			title :"with cheese", info :"@150"
			
			
		}),new sap.m.StandardListItem
		({
			title :"without cheese", info :"@150"
			
			
		})]
		})
		})
		      
		
		       var sbutton=new sap.m.FlexBox({alignItems:"Start",justifyContent:"Start",items:[
                           new sap.m.Label({text:"quantity :"}),
                                     new sap.m.Button (
                                    		       {
                                    		    	   text:"-",
                                    		    	   id:"decrement", press: function(){sap.ui.getCore().byId("incdicin").
                                    		    		   setValue(parseInt(sap.ui.getCore().byId("incdicin").getValue())-1)},type:"Emphasized" 
                                    		            } ),
                                    		            new sap.m.Input (
                                                 		       {
                                                 		    	  id:"incdicin",
                                                 		    	 width:"40px",
                                                 		    	 value : "0"
                                                 		    	
                                                 		            } ),
                                    		            new sap.m.Button (
                                                 		       {
                                                 		    	   text:"+",
                                                 		    	   id:"increment", press:function(){sap.ui.getCore().byId("incdicin").
                                    		    		   setValue(parseInt(sap.ui.getCore().byId("incdicin").getValue())+1)},
                                    		            type:"Accept"
                                                 		            } )
                                                               ]});
		       
				/*var that=this;
				function onpress(){
					that.getView().byId("incdicin").setValue(parseInt(that.getView().byId("incdicin").getValue())-1);
					
				}*/
		      
	
		oDialog1.addContent(panel);
	oDialog1.addContent(sbutton)
		
		oDialog1.addButton(new sap.m.Button({text: "Add to cart", icon:"sap-icon://add-activity", 
			press:function(){oDialog1.close();}}));
		oDialog1.open();
	},
onPress:function(oEvent) {
    var rejectBtn = this.getView().byId("btn2");
    if(rejectBtn.getVisible()) {
       rejectBtn.setVisible(false);
   }
}

});