"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeersService = void 0;
const common_1 = require("@nestjs/common");
let BeersService = class BeersService {
    constructor() {
        this.beers = [];
    }
    create(createBeerInput) {
        const newBeer = Object.assign({ id: Date.now() }, createBeerInput);
        this.beers.push(newBeer);
        return newBeer;
    }
    findAll() {
        return this.beers;
    }
    findOne(id) {
        return this.beers.find(beer => beer.id === id);
    }
};
exports.BeersService = BeersService;
exports.BeersService = BeersService = __decorate([
    (0, common_1.Injectable)()
], BeersService);
//# sourceMappingURL=beers.service.js.map