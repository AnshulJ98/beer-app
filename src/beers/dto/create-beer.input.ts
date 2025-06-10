import { InputType, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateBeerInput {
    @Field()
    name?: string;

    @Field()
    type?: string;

    @Field(() => Float)
    abv?: number;

    @Field()
    available?: boolean;
} 