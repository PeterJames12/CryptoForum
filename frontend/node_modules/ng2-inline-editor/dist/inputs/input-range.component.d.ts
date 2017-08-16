import { ElementRef, Renderer } from "@angular/core";
import { InputBase } from "./input-base";
export declare class InputRangeComponent extends InputBase {
    inputRef: ElementRef;
    constructor(renderer: Renderer);
    ngOnInit(): void;
}
