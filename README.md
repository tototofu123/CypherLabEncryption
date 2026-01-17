# **CypherLab: Encryption Methods**

CypherLab is an interactive web application designed to demonstrate the evolution of cryptography. By bridging the gap between historical mechanical ciphers and modern mathematical hashes, this tool provides a hands-on environment to understand how sensitive data is protected across different eras.

## **Overview**

The project is structured as a three-tier educational journey:

1. The Library: A curated collection of encryption methods categorized by era (Ancient, 20th Century, and Modern).  
2. The Simulator: A live playground where users can input plaintext and see real-time transformations based on the selected algorithm's logic.  
3. The Deep Dive: Technical breakdowns of each method, including historical context, algorithmic logic, and security analysis.

## **Features**

### **Encryption and Hashing Simulations**

The lab includes functional implementations of various cryptographic standards:

* Ancient Era:  
  * Caesar Cipher: Simple substitution logic with adjustable shifts.  
  * Atbash Cipher: Fixed-mapping reversal of the alphabet.  
* 20th Century:  
  * Enigma Machine: Simulation of the WWII-era rotor-based encryption, including rotor settings.  
  * DES (Data Encryption Standard): Demonstration of block cipher logic and the vulnerabilities of 56-bit keys.  
* Modern Era:  
  * SHA-256: The gold standard for Bitcoin and blockchain security.  
  * AES (Advanced Encryption Standard): High-security symmetric encryption used globally for military and banking.  
  * BCrypt/Argon2: Modern password hashing with salting and cost factors.

### **Interactive UI**

* Real-time Processing: Encryption and hashing occur instantly as you type.  
* Visual Settings: Custom controls for specific methods (e.g., rotor selectors for Enigma, shift sliders for Caesar).  
* Security Indicators: Visual grading of each method’s strength against modern computing power.

## **Technical Stack**

* Frontend: React.js / HTML5  
* Styling: Tailwind CSS (Modern dark-mode aesthetic with glassmorphism)  
* Icons: Lucide-React / FontAwesome  
* Logic: Pure JavaScript implementation of cryptographic algorithms

## **Deployment and Troubleshooting**

If the application is not appearing correctly on Netlify, check the following:

1. Build Command: Ensure your build command is set to npm run build or yarn build if using React. If it is a simple HTML file, leave the build command empty.  
2. Publish Directory: The directory should be set to dist, build, or . (root) depending on your project structure.  
3. Entry Point: Netlify looks for an index.html file in the publish directory. Ensure your main file is named index.html.

## **How to Use**

1. Select a Method: Choose an encryption type from the Library screen.  
2. Experiment: Enter text in the Simulator. Adjust settings like "Rotor Positions" or "Shift Keys" to see how the output changes.  
3. Learn: Click "Learn More" to view the technical documentation and understand why a specific method is considered secure or obsolete.

## **Security Note**

This repository is for educational purposes only. The implementations provided here are intended for demonstration and visualization. For production-level security, always use audited cryptographic libraries (e.g., OpenSSL, Web Crypto API).

Maintained by: tototofu123  
Project Link: (https://cypherlab.netlify.app/)
