const BACKEND_HOST = process.env.FEEDBACK_BACKEND_HOST || "127.0.0.1";
const BACKEND_PORT = process.env.FEEDBACK_BACKEND_PORT || 57413;

export const BACKEND_URL = `http://${BACKEND_HOST}:${BACKEND_PORT}/feedback`;