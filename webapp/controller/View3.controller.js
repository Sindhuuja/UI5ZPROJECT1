sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
    "use strict";
 
    return Controller.extend("com.project1.project1.controller.View3", {
 
        onInit: function () {
 
            var oData = {
                categories: [
                    {
                        key: "display",
                        name: "Display Controls",
                        items: ["Text", "Label", "ObjectStatus", "ObjectNumber", "Image"]
                    },
                    {
                        key: "input",
                        name: "Input Controls",
                        items: ["Input", "TextArea", "Select", "ComboBox", "CheckBox", "RadioButton", "DatePicker"]
                    },
                    {
                        key: "action",
                        name: "Action Controls",
                        items: ["Button", "ToggleButton", "Link", "MenuButton"]
                    },
                    {
                        key: "layout",
                        name: "Layout Controls",
                        items: ["VBox", "HBox", "FlexBox", "Grid", "SimpleForm", "Panel"]
                    },
                    {
                        key: "container",
                        name: "Container Controls",
                        items: ["Page", "App", "Dialog", "Popover", "Panel"]
                    },
                    {
                        key: "list",
                        name: "List & Table Controls",
                        items: ["List", "StandardListItem", "Table", "ColumnListItem"]
                    },
                    {
                        key: "nav",
                        name: "Navigation Controls",
                        items: ["NavContainer", "SplitApp", "Shell", "Breadcrumbs"]
                    }
                ],
                selectedItems: []
            };
 
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);
        },
 
        onCategoryChange: function (oEvent) {
 
            var sKey = oEvent.getSource().getSelectedKey();
            var oModel = this.getView().getModel();
            var aCategories = oModel.getProperty("/categories");
 
            var oSelected = aCategories.find(function (item) {
                return item.key === sKey;
            });
 
            if (oSelected) {
 
                // IMPORTANT FIX → convert to object array
                var aItems = oSelected.items.map(function (item) {
                    return { name: item };
                });
 
                oModel.setProperty("/selectedItems", aItems);
            }
        },
onGoToView6:function () {
    this.getOwnerComponent().getRouter().navTo("RouteView6");
}
    });
});