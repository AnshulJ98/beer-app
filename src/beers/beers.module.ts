import { Module } from '@nestjs/common';
import { BeersService } from './beers.service';
import { BeersResolver } from './beers.resolver';

@Module({
    providers: [BeersService, BeersResolver],
})
export class BeersModule { } 