# Part of Odoo. See LICENSE file for full copyright and licensing details.


{
    "name": "HabitFlow",
    "summary": "Build consistent habits with a simple OWL tracker",
    "description": "A simple habit tracker built with OWL.",
    "category": "Productivity",
    "version": "20.0.1.0.0",
    "depends": ["web"],
    "data": [
        "views/habit_flow_views.xml",
    ],
    "assets": {
        "web.assets_backend": [
            "habit_flow/static/src/**/*.js",
            "habit_flow/static/src/**/*.xml",
            "habit_flow/static/src/**/*.scss",
        ],
    },
    "application": True,
    "license": "LGPL-3",
}
