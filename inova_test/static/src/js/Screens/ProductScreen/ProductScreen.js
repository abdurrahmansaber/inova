odoo.define("inova_test.ProductScreen", function (require) {
    "use strict";
    const ProductScreen = require("point_of_sale.ProductScreen");
    const Registries = require("point_of_sale.Registries");

    const ProductScreenDiscountRestriction = (ProductScreen) =>
        class extends ProductScreen {
            async _setValue(val) {
                if (this.currentOrder.get_selected_orderline()) {
                    if (this.state.numpadMode === "discount") {
                        let { confirmed, payload } = await this.showPopup("NumberPopup", {
                            isPassword: true,
                            title: "Password",
                        });
                        if (confirmed) {
                            if (payload === this.env.pos.config.discount_passphrase) this.currentOrder.get_selected_orderline().set_discount(val);
                            else {
                                this.showPopup("ErrorPopup", { title: "Wrong Password", body: "Try Again" });
                            }
                        }
                    } else super._setValue(val);

                    if (this.env.pos.config.iface_customer_facing_display) this.env.pos.send_current_order_to_customer_facing_display();
                }
            }
        };
    Registries.Component.extend(ProductScreen, ProductScreenDiscountRestriction);
    return ProductScreenDiscountRestriction;
});
