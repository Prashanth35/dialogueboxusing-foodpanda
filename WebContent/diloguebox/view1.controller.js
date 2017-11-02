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
	// onExpand: function(){
     	
     	//this.getView().byId("idpanel").fireExpand()
     	
    // },

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
		appref.to("idlogin")
		
		
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
	onAfterRendering: function() {
		
		 var oModel2=new sap.ui.model.json.JSONModel();
	        oModel2.loadData("model/model2.json");
	    	
	    var oDialog2 = new sap.m.Dialog({title  : "Delivery Location:"} );
	     oDialog2.setModel(oModel2);
	     
	     var labelcolony=new sap.m.Label({text : "Select Colony "})
    	 var labelstreet=new sap.m.Label({text : "Select Street "})
    	var labelResidential=new sap.m.Label({text : "Select Residential "}) 
	     
   	 		
   	 	 var oComboBoxColony=new sap.m.ComboBox();
   	 	 oComboBoxColony.bindAggregation("items", "/data2/colonies", new sap.ui.core.Item({ text : "{colony}"}));
   	 	 
   	      var oComboBoxstreet=new sap.m.ComboBox();
   	   oComboBoxstreet.bindAggregation("items", "/data2/streets", new sap.ui.core.Item({ text : "{street}"}));
 	 	
 	 var oComboBoxResidential=new sap.m.ComboBox();
 	oComboBoxResidential.bindAggregation("items", "/data2/Residentials", new sap.ui.core.Item({ text : "{Residential}"}));
   	
   	 	
 	 	$.sap.require("sap.ui.layout.form.SimpleForm")
   	 	
        var simplform = new sap.ui.layout.form.SimpleForm({
        	 
        	 content:[ labelcolony,oComboBoxColony,labelstreet, oComboBoxstreet,labelResidential,oComboBoxResidential]
        	
        	
        	
        }) 
 	 	
 	 	
 	 	
   	 	oDialog2.addContent(simplform)
		oDialog2.open();
 	 	
 	 	
 	 	
 	 	oDialog2.addButton(new sap.m.Button({text: "cancel",press:function(oEvent){
			
			 oDialog2.close()
		}.bind(this)
		}))

 	 	
 	 	
 	 	
		oDialog2.addButton(new sap.m.Button({text: "confirm",press:function(oEvent){
		
			 oDialog2.close()
		}.bind(this)
		}));
		
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf diloguebox.view1
*/
//	onExit: function() {
//
//	}
	
	
	openDialogue : function(oEvent){
		
		var path=oEvent.getSource().getBindingContext().getPath();
		//debugger;
		var oDialog1 = new sap.m.Dialog({title  : "select items:"},btn);
		this.getView().addDependent(oDialog1);
		 oDialog1.bindElement(path);
		
		 
		// var panel2=new sap.m.Panel({title : "panel2"})
		 //second panel 
		 
		 
		
		/* var oList2 = new sap.m.List({mode : sap.m.ListMode.MultiSelect,
		 items:[
   new sap.m.StandardListItem({
	title :"Extra cheese", info :"30₹"			
           }),
           new sap.m.StandardListItem({
				title :"Extra cheese", info :"30₹"			
		   }),
   new sap.m.StandardListItem({
		title :"Extra cheese", info :"30₹"			
  })
		        
	   
		        
		  ]
		 
		 })
		 
		 var panel2=new sap.m.Paanel({"content", oList2 })
		 
	 */
		 var btn=new sap.m.Button({text: "cancel",  
				press:function(oEvent){
					
					
					 oDialog1.close()
				}});
		 
		 
		 
		 oDialog1.addButton(new sap.m.Button({text: "cancel",  
				press:function(oEvent){
					
					
					 oDialog1.close()
				}}))
		 
		
		 
		 var otemp=new sap.m.StandardListItem({
				title :"{item}", info :"{cost}"			
		   })
		
		 var oList = new sap.m.List({mode : sap.m.ListMode.MultiSelect});
		 oList.bindAggregation("items", "types", otemp);
		 
		      
		 var stepinput=new sap.m.StepInput({min : 0,  width : "110px"})
		var label= new sap.m.Label({text:"Quantity:"})
		 
		
	
		oDialog1.addContent(oList );
	   // oDialog1.addContent(panel2 )
		 
		 oDialog1.addContent(label)
		oDialog1.addContent(stepinput )
	
		
		oDialog1.addButton(new sap.m.Button({text: "Add to cart", icon:"sap-icon://cart", 
			press:function(oEvent){
				
				 var rejectBtn = this.getView().byId("Idpage").setShowFooter(true);
				    /*if(rejectBtn.getShowFooter()) {
				       rejectBtn.setShowFooter(true);
				   }*/
				 oDialog1.close()
			}.bind(this)}));
		oDialog1.open();
	},
	
	getIcon :function(ic){
		
		if(ic== true){
			return "image/veg.JPG";
		}
		if(ic== false){
			return "image/non-veg.JPG";
		}
			
	},
	
/*	getClose1 :  function(oEvent){
//		debugger;
		var panels=this.getView().byId("Idpage").getContent()[2].getItems()			
		var i = 0; 	
		for(; i < panels.length; i++)	
		     {	
			this.getView().byId("Idpage").getContent()[2].getItems()[2].setExpanded(true)
		//	panels[i].detachExpand(getClose1);
			panels[i].setExpanded(false);
						//if 
			if(oEvent.getParameters().expand==true){
				panels[i].setExpanded(false);	
			}
			else{this.getView().byId("Idpage").getContent()[2].getItems()[2].setExpanded(true);}

		}
		this.getView().byId("Idpage").getContent()[2].getItems()[2].setExpanded(true)
		
		//this.getView().byId("Idpage").getContent()[2].getItems()[2].setExpanded(true).detachExpand(getClose1);
		
		//this.getView().byId("Idpage").getContent()[2].getItems()[2].detachExpand(getClose1);
			//this.getView().byId("Idpage").getContent()[2].getItems()[i--].setExpanded(true);

	}
	*/


});