# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'OWL Todo',
    'version': '1.0.0',
    'category': 'Hidden',
    'summary': 'Hands-on OWL 3 training: build a Todo application step by step',
    'depends': ['web'],
    'data': [
        'views/owl_todo_menus.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'owl_todo/static/src/**/*',
        ],
    },
    'installable': True,
    'application': True,
    'author': 'Odoo S.A.',
    'license': 'LGPL-3',
}
