import { Component, Input } from '@angular/core';
import { ProgressbarConfig } from './progressbar.config';
import { isBs3 } from '../utils';
var ProgressbarComponent = (function () {
    function ProgressbarComponent(config) {
        this.isStacked = false;
        Object.assign(this, config);
    }
    Object.defineProperty(ProgressbarComponent.prototype, "value", {
        /** current value of progress bar. Could be a number or array of objects
         * like {"value":15,"type":"info","label":"15 %"}
         */
        set: function (value) {
            this.isStacked = Array.isArray(value);
            this._value = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressbarComponent.prototype, "isBs3", {
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    ProgressbarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'progressbar',
                    template: "<div progress [animate]=\"animate\" [max]=\"max\" [style.width]=\"!isBs3 ? '100%' : 'auto'\"> <bar [type]=\"type\" [value]=\"_value\" *ngIf=\"!isStacked\"> <ng-content></ng-content> </bar> <ng-template [ngIf]=\"isStacked\"> <bar *ngFor=\"let item of _value\" [type]=\"item.type\" [value]=\"item.value\">{{ item.label }} </bar> </ng-template> </div> ",
                    styles: [
                        "\n    :host {\n      width: 100%;\n    }\n  "
                    ]
                },] },
    ];
    /** @nocollapse */
    ProgressbarComponent.ctorParameters = function () { return [
        { type: ProgressbarConfig, },
    ]; };
    ProgressbarComponent.propDecorators = {
        'animate': [{ type: Input },],
        'max': [{ type: Input },],
        'type': [{ type: Input },],
        'value': [{ type: Input },],
    };
    return ProgressbarComponent;
}());
export { ProgressbarComponent };
//# sourceMappingURL=progressbar.component.js.map