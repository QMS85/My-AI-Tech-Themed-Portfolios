# 🎨 AI-Tech Themed Portfolios

Production-ready, secure, and scalable portfolio websites with three unique designs.

## 🌟 Features

- ✅ **Three Unique Designs**
  - 🎨 Glassmorphism Neural Networks
  - 🎆 Neon Cyber Grid
  - 💻 Terminal CLI

- 🔒 **Security First**
  - Helmet security headers
  - Content Security Policy (CSP)
  - CORS protection
  - Rate limiting
  - Input sanitization

- ⚡ **Performance**
  - Gzip compression
  - Caching strategies
  - Optimized assets
  - Fast page load times

- 📱 **Responsive Design**
  - Mobile-first approach
  - Tablet & desktop optimized
  - Touch-friendly interfaces

- 🚀 **Deployment Ready**
  - Docker support
  - PM2 process management
  - GitHub Actions CI/CD
  - Multi-platform compatible

## 🛠️ Installation

### Prerequisites
- Node.js >= 18.0.0
- npm >= 9.0.0

### Setup

```bash
# Clone repository
git clone https://github.com/QMS85/My-AI-Tech-Themed-Portfolios.git
cd My-AI-Tech-Themed-Portfolios

# Install root dependencies
npm install

# Copy environment file
cp .env.example .env

# Install portfolio dependencies
cd GLASSMORPHISM-NEURAL-NETWORKS
npm install
cd ../NEON-CYBER-GRID
npm install
cd ../TERMINAL-CLI
npm install
```

## 🚀 Usage

### Development Mode

```bash
# Run all portfolios
cd GLASSMORPHISM-NEURAL-NETWORKS && npm run dev  # Port 3001
cd ../NEON-CYBER-GRID && npm run dev             # Port 3002
cd ../TERMINAL-CLI && npm run dev                # Port 3003
```

### Production Mode

```bash
# Run all portfolios
cd GLASSMORPHISM-NEURAL-NETWORKS && npm start    # Port 3001
cd ../NEON-CYBER-GRID && npm start               # Port 3002
cd ../TERMINAL-CLI && npm start                  # Port 3003
```

### Docker

```bash
# Build images
npm run docker:build

# Run with Docker Compose
npm run docker:compose

# Access portfolios
# http://localhost:3001 - Glassmorphism
# http://localhost:3002 - Neon Cyber Grid
# http://localhost:3003 - Terminal CLI
```

### PM2 Process Manager

```bash
# Start with PM2
npm run pm2:start

# View logs
npm run pm2:logs

# Restart
npm run pm2:restart

# Stop
npm run pm2:stop
```

## 📊 Project Structure

```
My-AI-Tech-Themed-Portfolios/
├── GLASSMORPHISM-NEURAL-NETWORKS/    # Portfolio 1
├── NEON-CYBER-GRID/                  # Portfolio 2
├── TERMINAL-CLI/                     # Portfolio 3
├── config/                           # Shared configuration
├── middleware/                       # Shared middleware
├── scripts/                          # Utility scripts
└── logs/                             # Application logs
```

## 🔒 Security

All portfolios include:
- Helmet.js for HTTP headers
- Content Security Policy (CSP)
- CORS whitelist configuration
- Rate limiting (100 requests/15 min)
- Input sanitization
- Secure cookie settings
- HSTS enforcement
- XSS protection

See [SECURITY_GUIDE.md](./SECURITY_GUIDE.md) for detailed security practices.

## 📈 Performance

- **Compression**: Gzip enabled (60-70% reduction)
- **Caching**: Strategic cache headers
- **Images**: WebP format with fallbacks
- **Fonts**: Self-hosted with optimal loading
- **Bundle**: Minimized and optimized
- **Time to Interactive**: < 2s
- **Page Speed Score**: 90+

## 🚀 Deployment

Supports deployment to:
- Heroku
- Railway
- Render
- DigitalOcean App Platform
- AWS (EC2, ECS, Lambda)
- Google Cloud Platform
- Microsoft Azure
- Docker/Kubernetes
- Vercel (Serverless)
- Netlify (Serverless)

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed instructions.

## 📄 License

MIT License - See [LICENSE](./LICENSE) file for details

## 🤝 Contributing

Contributions are welcome! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📞 Contact

- GitHub: [@QMS85](https://github.com/QMS85)
- Portfolio: [Visit Portfolio](https://qms85.github.io/My-AI-Tech-Themed-Portfolios/)

---

**Last Updated**: 2026-08-26
**Version**: 2.0.0
