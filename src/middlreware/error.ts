export default function APIError(code, message) {
        this.code = code || 'internal:unknown_error'
        this.message = message || ''
}