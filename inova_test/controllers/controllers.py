from odoo import http
from odoo.http import request

class ContactAPI(http.Controller):

    def _get_valid_fields(self, model, test_vals={}):
        _fields = list(request.env[model].sudo()._fields.keys())
        vals = {}
        for field, val in test_vals.items():
            if field in _fields:
                vals.update({field, val})
        return vals

    @http.route('/api/contact/<int:id>', type='json', auth='user')
    def read_contact(self, id):
        contact = request.env['res.partner'].browse(id)
        return contact.read()

    @http.route('/api/contact/update/<int:id>', type='json', auth='user', methods=['POST'])
    def update_contact(self, id, **kwargs):
        contact = request.env['res.partner'].browse(id)
        vals = self._get_valid_fields('res.partner', kwargs)
        contact.write(vals)
        return contact.read()

    @http.route('/api/contact/create', type='json', auth='user', methods=['POST'])
    def create_contact(self, **kwargs):
        vals = self._get_valid_fields('res.partner', kwargs)
        contact = request.env['res.partner'].create(vals)
        return contact.read()
