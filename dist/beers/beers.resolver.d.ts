import { BeersService } from './beers.service';
import { Beer } from './entities/beer.entity';
import { CreateBeerInput } from './dto/create-beer.input';
export declare class BeersResolver {
    private readonly beersService;
    constructor(beersService: BeersService);
    createBeer(createBeerInput: CreateBeerInput): Beer;
    findAll(): Beer[];
    findOne(id: number): Beer | undefined;
}
