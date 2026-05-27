sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    return Controller.extend("com.project1.project1.controller.Main", {

        onTask3: function () {

            var sValue = this.byId("Name").getValue();

            this.getOwnerComponent().getRouter().navTo("RouteView1");
        },
        onTask2: function () {

            var sValue = this.byId("Name").getValue();

            this.getOwnerComponent().getRouter().navTo("RouteView2");
        },
        onTask1: function () {

            var sValue = this.byId("Name").getValue();

            this.getOwnerComponent().getRouter().navTo("RouteView3");
        },
        onTask4: function () {

            var sValue = this.byId("Name").getValue();

            this.getOwnerComponent().getRouter().navTo("RouteView4");
        }

    });
});