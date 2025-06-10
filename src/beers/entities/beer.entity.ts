import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Beer {
    @Field(() => Int)
    id?: number;

    @Field()
    name?: string;

    @Field()
    type?: string;

    @Field(() => Float)
    abv?: number;

    @Field()
    available?: boolean;
} 