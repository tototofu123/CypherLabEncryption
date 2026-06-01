# 🔐 CypherLab Encryption

An interactive educational platform for exploring the history and mechanics of cryptography. From the ancient Scytale of Sparta to modern-day encryption concepts, CypherLab provides a hands-on experience in the art of secret writing.

**Live Demo:** [https://tototofu123.github.io/CypherLabEncryption/](https://tototofu123.github.io/CypherLabEncryption/)

## 🏛️ Explore the Library

Discover the evolution of ciphers across eras:
- **Ancient & Classical:** Scytale, Atbash, Caesar, Polybius Square, and Vigenère.
- **20th Century:** Playfair Cipher and more.
- **Modern Concepts:** Learn about security scores, vulnerabilities, and algorithmic types (Substitution, Transposition, Fractionation, etc.).

## 🚀 Key Features

- **Cipher Simulator:** Interact with real-time implementations of historical ciphers. See how shifting keys and keywords transform your message.
- **Educational Content:** Deep dives into the historical context, mathematical logic, and vulnerabilities of each method.
- **Interactive Visuals:** Clean UI with iconography and color-coded categories for easy navigation.
- **Security Analysis:** Every cipher comes with a "Security Score" and detailed vulnerability reports to teach why certain methods were eventually broken.

## 🛠️ Technology Stack

- **Framework:** React 18 with TypeScript.
- **Routing:** React Router (HashRouter for GitHub Pages compatibility).
- **Styling:** Modern UI patterns (inferred use of Tailwind CSS based on `text-amber-600`, etc. in `constants.ts`).
- **Build Tool:** Vite.
- **Deployment:** GitHub Actions & Netlify.

## 📂 Repository Structure

- `App.tsx`: Main routing and application layout.
- `constants.ts`: The core database of cipher methods, descriptions, and historical data.
- `types.ts`: TypeScript interfaces for cipher definitions.
- `index.html`: Entry point for the Vite build.
- `.github/workflows/`: Automation for deployment and security scanning.

## 🚦 Getting Started

1. Clone the repo:
   ```bash
   git clone https://github.com/tototofu123/CypherLabEncryption.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run in development mode:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

---

Built with 🧡 by [tototofu123](https://github.com/tototofu123)
