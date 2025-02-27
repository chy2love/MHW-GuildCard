import mongoose, { models, Schema } from 'mongoose';

export const GuildCardSchema = new Schema({
  isAgree: { type: Boolean, required: true },
  nickname: { type: String, required: true },
  platform: { type: String, required: true },
  mainWeapon: { type: String, required: true },
  subWeapon: { type: [String], required: true }
});

const GuildCard = models?.GuildCard || mongoose.model('GuildCard', GuildCardSchema);
export default GuildCard;
