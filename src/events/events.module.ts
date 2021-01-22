import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ClickLinkEvent,
  ClickLinkEventSchema,
} from './click-link-event.schema';
import { Event, EventSchema } from './event.schema';
import { SignUpEvent, SignUpEventSchema } from './sign-up-event.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Event.name,
        schema: EventSchema,
        discriminators: [
          { name: ClickLinkEvent.name, schema: ClickLinkEventSchema },
          { name: SignUpEvent.name, schema: SignUpEventSchema },
        ],
      },
    ]),
  ],
})
export class EventsModule {}
