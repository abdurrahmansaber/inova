odoo.define("inova_test.DB", function (require) {
    "use strict";
    let PosDB = require("point_of_sale.DB");

    PosDB.include({
        _product_search_string: function (product) {
            let str = product.display_name;
            if (product.barcode) {
                str += "|" + product.barcode;
            }
            if (product.default_code) {
                str += "|" + product.default_code;
            }
            if (product.description) {
                str += "|" + product.description;
            }
            if (product.description_sale) {
                str += "|" + product.description_sale;
            }
            if (product.manufacturer) {
                str += "|" + product.manufacturer;
            }
            if (product.internal_serial_number) {
                str += "|" + product.internal_serial_number;
            }
            str = product.id + ":" + str.replace(/[\n:]/g, "") + "\n";
            return str;
        },
    });
});
