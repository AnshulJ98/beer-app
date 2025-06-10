import { CreateBeerInput } from './dto/create-beer.input';
import { Beer } from './entities/beer.entity';
export declare class BeersService {
    private beers;
    create(createBeerInput: CreateBeerInput): Beer;
    findAll(): Beer[];
    findOne(id: number): Beer | undefined;
}
