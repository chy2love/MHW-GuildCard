import dbConnect from '@/lib/db/dbConnect';
import GuildCard from '@/lib/schema/guild-card.model';
import { NextRequest, NextResponse } from 'next/server';

export const GET = async (req: NextRequest) => {
  try {
    dbConnect();
    const guildCards = GuildCard;
    const url = new URL(req.url);
    const nickname = url.pathname.split('/')[url.pathname.split('/').length - 1];
    const guildCard = await guildCards.findOne({ nickname });
    if (guildCard) {
      return NextResponse.json({
        data: {
          isAgree: guildCard.isAgree,
          nickname: guildCard.nickname,
          platform: guildCard.platform,
          mainWeapon: guildCard.mainWeapon,
          subWeapon: guildCard.subWeapon,
          id: guildCard._id
        }
      });
    } else {
      return NextResponse.json({
        data: null
      });
    }
  } catch (e) {
    console.error(e);
    throw new Error('error');
  }
};
