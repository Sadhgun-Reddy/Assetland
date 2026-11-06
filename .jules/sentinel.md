## 2026-11-05 - [Hardcoded Firebase API Key]
**Vulnerability:** Found a hardcoded Firebase API key in `src/utils/firebase.js` (`firebaseConfig.apiKey`).
**Learning:** Hardcoded credentials can easily leak into version control and client bundles, making it simple for malicious actors to scrape and abuse resources, potentially leading to unauthorized data access or billing issues.
**Prevention:** Use environment variables (e.g., `process.env.REACT_APP_FIREBASE_API_KEY`) for all configuration secrets and API keys. Store actual values in `.env` (ensure it is gitignored) and provide a `.env.example` file to document required variables without exposing their actual values.
