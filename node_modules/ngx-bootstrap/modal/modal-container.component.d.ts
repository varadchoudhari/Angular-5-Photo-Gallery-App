import { ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { ModalOptions } from './modal-options.class';
import { BsModalService } from './bs-modal.service';
export declare class ModalContainerComponent implements OnInit, OnDestroy {
    protected _element: ElementRef;
    private bsModalService;
    private _renderer;
    config: ModalOptions;
    isShown: boolean;
    level: number;
    isAnimated: boolean;
    private isModalHiding;
    constructor(options: ModalOptions, _element: ElementRef, bsModalService: BsModalService, _renderer: Renderer2);
    ngOnInit(): void;
    onClick(event: any): void;
    onEsc(): void;
    ngOnDestroy(): void;
    hide(): void;
}
