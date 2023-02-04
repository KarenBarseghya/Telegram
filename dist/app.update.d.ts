import { Context } from 'telegraf';
export declare class AppUpdate {
    start(ctx: Context): Promise<void>;
    on(message: string, ctx: Context): Promise<void>;
}
