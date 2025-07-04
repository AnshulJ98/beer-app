"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const beers_service_1 = require("./beers.service");
const beer_entity_1 = require("./entities/beer.entity");
const create_beer_input_1 = require("./dto/create-beer.input");
let BeersResolver = class BeersResolver {
    constructor(beersService) {
        this.beersService = beersService;
    }
    createBeer(createBeerInput) {
        return this.beersService.create(createBeerInput);
    }
    findAll() {
        return this.beersService.findAll();
    }
    findOne(id) {
        return this.beersService.findOne(id);
    }
};
exports.BeersResolver = BeersResolver;
__decorate([
    (0, graphql_1.Mutation)(() => beer_entity_1.Beer),
    __param(0, (0, graphql_1.Args)('createBeerInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_beer_input_1.CreateBeerInput]),
    __metadata("design:returntype", void 0)
], BeersResolver.prototype, "createBeer", null);
__decorate([
    (0, graphql_1.Query)(() => [beer_entity_1.Beer], { name: 'beers' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BeersResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => beer_entity_1.Beer, { name: 'beer' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BeersResolver.prototype, "findOne", null);
exports.BeersResolver = BeersResolver = __decorate([
    (0, graphql_1.Resolver)(() => beer_entity_1.Beer),
    __metadata("design:paramtypes", [beers_service_1.BeersService])
], BeersResolver);
//# sourceMappingURL=beers.resolver.js.map