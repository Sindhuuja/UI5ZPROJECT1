sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";
 
    return Controller.extend("com.project1.project1.controller.View5", {
 
        onInit: function () {
 
            var oData = {
                currentDate: new Date().toLocaleString(),
 
                orders: [
                    {
                        Office: "DFAM",
                        Order: "8000000007-00001",
                        Amount: "25.00 USD",
                        Quantity: "12 EA",
                        Status: "Processed",
                        DFR: "9000029280-002",
                        Grant: "GF180002",
                        Days: "1343",
                        Funds: "409458-001"
                    },
                    {
                        Office: "DFAM",
                        Order: "8000000008-00001",
                        Amount: "2.08 USD",
                        Quantity: "1 EA",
                        Status: "Processed",
                        DFR: "9000029280-002",
                        Grant: "GF180002",
                        Days: "1343",
                        Funds: "409459-001"
                    },
                    {
                        Office: "Vientiane",
                        Order: "8000000010-00001",
                        Amount: "150.00 USD",
                        Quantity: "1 EA",
                        Status: "Processed",
                        DFR: "9000039589-001",
                        Grant: "SC229906",
                        Days: "612",
                        Funds: "409461-001"
                    }
                ]
            };
 
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
 
        }
 
    });
});