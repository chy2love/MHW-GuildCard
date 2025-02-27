import dbConnect from "@/lib/db/dbConnect"
import GuildCard from "@/lib/schema/guild-card.model";
import { NextRequest, NextResponse } from "next/server";

export const GET = async(req: NextRequest, res: NextResponse) => {
  try{
    dbConnect();
    const guildCards = GuildCard;
    const allGuildCards = await guildCards.find();
    console.log('guildCardList => ',allGuildCards);
    return NextResponse.json({
      data: allGuildCards.map((i)=>({
        isAgree: i.isAgree,
        nickname: i.nickname,
        platform: i.platform,
        mainWeapon: i.mainWeapon,
        subWeapon: i.subWeapon,
        id:i._id
      }))
    })
  }catch(e){
    console.error(e);
    throw new Error('error');
  }
}