import { ElementRef, Renderer, OnInit } from "@angular/core";
import { InputBase } from "./input-base";
export declare class InputSelectComponent extends InputBase implements OnInit {
    inputRef: ElementRef;
    constructor(renderer: Renderer);
    getPlaceholder(): any;
    private optionSelected();
    private getElementText(options);
    ngOnInit(): void;
}
