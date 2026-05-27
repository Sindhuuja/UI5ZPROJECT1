sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("com.project1.project1.controller.View1", {

        onInit: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.getRoute("RouteView1").attachPatternMatched(this._onRouteMatched, this);
        },

        // Get data from Main view
        _onRouteMatched: function (oEvent) {

            var sValue = oEvent.getParameter("arguments").value;

            this.byId("resultText").setText("Hello: " + sValue);
        },

        // Dropdown logic
        onGoPress: function () {

            var sKey = this.byId("categorySelect").getSelectedKey();
            var sText = "";

            switch (sKey) {

                case "responsive":
                    sText = "Responsive Controls adapt UI to all devices.";
                    break;

                case "layout":
                    sText = "Layout Controls help structure UI.";
                    break;

                case "core":
                    sText = "Core controls are basic UI elements.";
                    break;

                case "flexible":
                    sText = "Flexible Layout allows dynamic UI design.";
                    break;

                case "charts":
                    sText = "Charts visualize data graphically.";
                    break;

                default:
                    sText = "Please select a category.";
            }

            this.byId("resultText").setText(sText);
        }

    });
});