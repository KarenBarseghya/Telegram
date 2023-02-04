"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actionButtons = void 0;
const telegraf_1 = require("telegraf");
function actionButtons() {
    return telegraf_1.Markup.keyboard([
        telegraf_1.Markup.button.callback('male', 'male'),
        telegraf_1.Markup.button.callback('female', 'female')
    ]);
}
exports.actionButtons = actionButtons;
//# sourceMappingURL=app.buttons.js.map