import { ElementRef, Renderer } from "@angular/core";
import { InputBase } from "./input-base";
export declare class InputTextareaComponent extends InputBase {
    inputRef: ElementRef;
    constructor(renderer: Renderer);
    ngOnInit(): void;
}
