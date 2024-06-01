from odoo import models, fields


class PosConfig(models.Model):
    _inherit = 'pos.config'

    discount_passphrase = fields.Char()
    show_discount_passphrase = fields.Boolean()