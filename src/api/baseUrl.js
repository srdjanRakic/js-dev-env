export default function getBaseUrl() {
    const inDevelopment = window.location.hostname === 'localhost';
    return inDevelopment ? 'htto://localhost:3001/' : '/';
}