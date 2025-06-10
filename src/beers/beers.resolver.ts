import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { BeersService } from './beers.service';
import { Beer } from './entities/beer.entity';
import { CreateBeerInput } from './dto/create-beer.input';

@Resolver(() => Beer)
export class BeersResolver {
    constructor(private readonly beersService: BeersService) { }

    @Mutation(() => Beer)
    createBeer(@Args('createBeerInput') createBeerInput: CreateBeerInput) {
        return this.beersService.create(createBeerInput);
    }

    @Query(() => [Beer], { name: 'beers' })
    findAll() {
        return this.beersService.findAll();
    }

    @Query(() => Beer, { name: 'beer' })
    findOne(@Args('id', { type: () => Int }) id: number) {
        return this.beersService.findOne(id);
    }
} 