import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class ClickLinkEvent extends Document {
  kind: string;
  time: Date;

  @Prop({ type: String, required: true })
  url: string;
}

export const ClickLinkEventSchema = SchemaFactory.createForClass(
  ClickLinkEvent,
);
