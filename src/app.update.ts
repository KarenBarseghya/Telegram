import { AppService } from './app.service';
import { InjectBot, Start, Update, On, Message, Hears, Ctx, Help, Use, Email } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import {idealBodyWeight} from './app.information'
import {userInterface, UserData} from './telegram.interface';



const arr = ['name', 'email', 'height', 'gender'];
let count = 0;

let userdata = new UserData();

@Update()
export class AppUpdate {
@Start()
async start(@Ctx() ctx: Context) {
  await ctx.reply('Hello');
  await ctx.reply('Please enter your name')
}


@On('text')
async on(@Message('text') message: string, @Ctx() ctx: Context) {
  userdata[arr[count++]] = message;
  if(arr[count] === undefined) {
    const user: UserData = {
      name: userdata.name,
      email: userdata.email,
      height: +userdata.height,
      gender: userdata.gender
    }
    if(Number.isNaN(user.height)) {
        count = 2;
    }

    if(!(user.gender === 'male' || user.gender === 'female')) {
      count = 2;
    }
    if(!arr[count]) {
      await ctx.reply(`Your ideal weight is ${Math.floor(idealBodyWeight(user.gender, user.height))}`);
      return
    }
  }
  await ctx.reply(`Please enter your ${arr[count]}`);
  }
}


