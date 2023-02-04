import { Markup } from "telegraf";

export function actionButtons() {
    return Markup.keyboard(
        [
            Markup.button.callback('male', 'male'),
            Markup.button.callback('female', 'female')
        ]
    )
}