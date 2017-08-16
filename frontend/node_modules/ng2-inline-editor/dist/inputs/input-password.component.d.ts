import { ElementRef, Renderer } from "@angular/core";
import { InputBase } from "./input-base";
export declare class InputPasswordComponent extends InputBase {
    inputRef: ElementRef;
    constructor(renderer: Renderer);
    ngOnInit(): void;
    getPlaceholder(): string;
}
