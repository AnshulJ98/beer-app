import { Injectable } from '@nestjs/common';
import { CreateBeerInput } from './dto/create-beer.input';
import { Beer } from './entities/beer.entity';

@Injectable()
export class BeersService {
    private beers: Beer[] = [];

    create(createBeerInput: CreateBeerInput): Beer {
        const newBeer = { id: Date.now(), ...createBeerInput };
        this.beers.push(newBeer);
        return newBeer;
    }

    findAll(): Beer[] {
        return this.beers;
    }

    findOne(id: number): Beer | undefined {
        return this.beers.find(beer => beer.id === id);
    }
} 