export class AjaxError extends Error {
    constructor(payload, message = 'Ajax operation failed', status) {
        super(message);
        this.payload = payload;
        this.status = status;
    }
}
export class InvalidError extends AjaxError {
    constructor(payload) {
        super(payload, 'Request was rejected because it was invalid', 422);
    }
}
export class UnauthorizedError extends AjaxError {
    constructor(payload) {
        super(payload, 'Ajax authorization failed', 401);
    }
}
export class ForbiddenError extends AjaxError {
    constructor(payload) {
        super(payload, 'Request was rejected because user is not permitted to perform this operation.', 403);
    }
}
export class BadRequestError extends AjaxError {
    constructor(payload) {
        super(payload, 'Request was formatted incorrectly.', 400);
    }
}
export class NotFoundError extends AjaxError {
    constructor(payload) {
        super(payload, 'Resource was not found.', 404);
    }
}
export class GoneError extends AjaxError {
    constructor(payload) {
        super(payload, 'Resource is no longer available.', 410);
    }
}
export class TimeoutError extends AjaxError {
    constructor() {
        super(null, 'The ajax operation timed out', -1);
    }
}
export class AbortError extends AjaxError {
    constructor() {
        super(null, 'The ajax operation was aborted', 0);
    }
}
export class ConflictError extends AjaxError {
    constructor(payload) {
        super(payload, 'The ajax operation failed due to a conflict', 409);
    }
}
export class ServerError extends AjaxError {
    constructor(payload, status) {
        super(payload, 'Request was rejected due to server error', status);
    }
}
/**
 * Checks if the given error is or inherits from AjaxError
 */
export function isAjaxError(error) {
    return error instanceof AjaxError;
}
/**
 * Checks if the given status code or AjaxError object represents an
 * unauthorized request error
 */
export function isUnauthorizedError(error) {
    if (isAjaxError(error)) {
        return error instanceof UnauthorizedError;
    }
    else {
        return error === 401;
    }
}
/**
 * Checks if the given status code or AjaxError object represents a forbidden
 * request error
 */
export function isForbiddenError(error) {
    if (isAjaxError(error)) {
        return error instanceof ForbiddenError;
    }
    else {
        return error === 403;
    }
}
/**
 * Checks if the given status code or AjaxError object represents an invalid
 * request error
 */
export function isInvalidError(error) {
    if (isAjaxError(error)) {
        return error instanceof InvalidError;
    }
    else {
        return error === 422;
    }
}
/**
 * Checks if the given status code or AjaxError object represents a bad request
 * error
 */
export function isBadRequestError(error) {
    if (isAjaxError(error)) {
        return error instanceof BadRequestError;
    }
    else {
        return error === 400;
    }
}
/**
 * Checks if the given status code or AjaxError object represents a "not found"
 * error
 */
export function isNotFoundError(error) {
    if (isAjaxError(error)) {
        return error instanceof NotFoundError;
    }
    else {
        return error === 404;
    }
}
/**
 * Checks if the given status code or AjaxError object represents a "gone"
 * error
 */
export function isGoneError(error) {
    if (isAjaxError(error)) {
        return error instanceof GoneError;
    }
    else {
        return error === 410;
    }
}
/**
 * Checks if the given object represents a "timeout" error
 */
export function isTimeoutError(error) {
    return error instanceof TimeoutError;
}
/**
 * Checks if the given status code or AjaxError object represents an
 * "abort" error
 */
export function isAbortError(error) {
    if (isAjaxError(error)) {
        return error instanceof AbortError;
    }
    else {
        return error === 0;
    }
}
/**
 * Checks if the given status code or AjaxError object represents a
 * conflict error
 */
export function isConflictError(error) {
    if (isAjaxError(error)) {
        return error instanceof ConflictError;
    }
    else {
        return error === 409;
    }
}
/**
 * Checks if the given status code or AjaxError object represents a server error
 */
export function isServerError(error) {
    if (isAjaxError(error)) {
        return error instanceof ServerError;
    }
    else {
        return error >= 500 && error < 600;
    }
}
/**
 * Checks if the given status code represents a successful request
 */
export function isSuccess(status) {
    let s = status;
    if (typeof status === 'string') {
        s = parseInt(status, 10);
    }
    return (s >= 200 && s < 300) || s === 304;
}
