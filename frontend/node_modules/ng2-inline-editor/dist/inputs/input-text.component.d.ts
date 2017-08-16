import { ElementRef, OnInit, Renderer } from "@angular/core";
import { InputBase } from "./input-base";
export declare class InputTextComponent extends InputBase implements OnInit {
    inputRef: ElementRef;
    constructor(renderer: Renderer);
    ngOnInit(): void;
}
