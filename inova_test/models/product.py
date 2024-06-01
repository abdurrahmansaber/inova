from odoo import models, fields

class ProductTemplate(models.Model):
    _name = 'product.template'
    _inherit = ['product.template', 'soft.delete.mixin']

    manufacturer = fields.Char(string='Manufacturer')
    internal_serial_number = fields.Char(string='Internal Serial Number')

class ProductCategory(models.Model):
    _name = 'product.category'
    _inherit = ['product.category', 'soft.delete.mixin']
