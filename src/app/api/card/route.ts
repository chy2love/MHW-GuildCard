import dbConnect from '@/lib/db/dbConnect';
import GuildCard from '@/lib/schema/guild-card.model';
import { NextRequest, NextResponse } from 'next/server';

export const POST = async (req: NextRequest) => {
  try {
    dbConnect();
    const guildCards = GuildCard;
    const { isAgree, nickname, platform, mainWeapon, subWeapon } = await req.json();
    const guildCard = new guildCards({
      isAgree,
      nickname,
      platform,
      mainWeapon,
      subWeapon
    });
    await guildCard.save();
    return NextResponse.json({ message: 'success' });
  } catch (e) {
    console.error(e);
    throw new Error('error');
  }
};
