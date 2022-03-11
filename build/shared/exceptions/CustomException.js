"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomException = /** @class */ (function () {
    function CustomException(message, statusCode) {
        if (statusCode === void 0) { statusCode = 400; }
        this.message = message;
        this.statusCode = statusCode;
    }
    return CustomException;
}());
exports.default = CustomException;
