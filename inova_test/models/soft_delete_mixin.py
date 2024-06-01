from odoo import models

class SoftDeleteMixin(models.AbstractModel):
    _name = 'soft.delete.mixin'
    _description = 'Soft Delete Mixin'

    def unlink(self):
        for record in self:
            if not record.active:
                super(SoftDeleteMixin, record).unlink()
            else:
                record.active = False