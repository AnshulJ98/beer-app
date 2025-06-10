import { InputType, Field, Int, Float, PartialType } from '@nestjs/graphql';
import { CreateBeerInput } from './create-beer.input';

@InputType()
export class UpdateBeerInput extends PartialType(CreateBeerInput) {
    @Field(() => Int)
    id?: number;
} 