import { InputConfig } from "../input-config";
import { Renderer } from "@angular/core";
export declare class InputBase {
    protected renderer: Renderer;
    context: InputConfig;
    inputElement: HTMLInputElement;
    isNumeric: boolean;
    isRegexTestable: boolean;
    constructor(renderer: Renderer);
    setContext(_context: InputConfig): void;
    getPlaceholder(): any;
    focus(): void;
}
