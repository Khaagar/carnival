import { HelpersService } from '../services/helpers.service';
import { ICookieman } from './iCookieman';

export class Cookieman {

    private helpersService: HelpersService = new HelpersService();

    private _bodyColor: string;
    private _frostingColor: string;
    private _mouthColor: string;

    get bodyColor(): string {
        return this._bodyColor
    }

    get frostingColor(): string {
        return this._frostingColor
    }

    get mouthColor(): string {
        return this._mouthColor
    }

    constructor(cookie?: ICookieman) {
        if(cookie) {
            this._bodyColor = cookie.bodyColor;
            this._frostingColor = cookie.frostingColor;
            this._mouthColor = cookie.mouthColor;
        } else {
            this.randomizeColors();
        }
     }

    randomizeColors() {
        this._bodyColor = this.helpersService.getRandomColor();
        this._frostingColor = this.helpersService.getRandomColor();
        this._mouthColor = this.helpersService.getRandomColor();
    }

    burnSelf() {
        this._bodyColor = 'black';
        this._frostingColor = 'black';
        this._mouthColor = 'black';
    }
}


