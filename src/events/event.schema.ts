import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ClickLinkEvent } from './click-link-event.schema';
import { SignUpEvent } from './sign-up-event.schema';

@Schema()
export class Event extends Document {
  @Prop({
    type: String,
    required: true,
    enum: [ClickLinkEvent.name, SignUpEvent.name],
  })
  kind: string;

  @Prop({ type: Date, required: true })
  time: Date;
}

export const EventSchema = SchemaFactory.createForClass(Event);
