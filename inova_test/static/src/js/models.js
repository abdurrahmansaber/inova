odoo.define("inova_test.models", function (require) {
    "use strict";
    let models = require("point_of_sale.models");

    models.load_fields("product.product", ["internal_serial_number", "manufacturer"]);
});
