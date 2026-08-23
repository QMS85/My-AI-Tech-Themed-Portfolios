# 🚀 Complete Deployment Guide

## Quick Start (Choose One)

### Option 1: GitHub Pages (Fastest & Free)
```bash
# 1. Go to Settings > Pages
# 2. Select "Deploy from a branch"
# 3. Choose: main / /public
# 4. Save and wait 1-2 minutes

# Your site: https://QMS85.github.io/My-AI-Tech-Themed-Portfolios/
```

### Option 2: Vercel (Recommended)
```bash
npm i -g vercel
vercel login
vercel

# Follow prompts - site goes live instantly!
```

### Option 3: Netlify
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod --dir=public
```

### Option 4: Docker + Heroku
```bash
# Build Docker image
docker build -t jonathan-portfolio .

# Push to Heroku
heroku login
heroku create jonathan-portfolio-app
heroku container:push web
heroku container:release web

# Live at: https://jonathan-portfolio-app.herokuapp.com
```

### Option 5: Docker Compose
```bash
# Start all services
docker-compose up -d

# Access at: http://localhost
# Stop: docker-compose down
```

## Environment Setup

```bash
# 1. Copy .env.example to .env
cp .env.example .env

# 2. Fill in your secrets
nano .env

# 3. Install dependencies
npm install

# 4. Test locally
npm run dev

# 5. Build for production
npm run build
```

## Deployment Checklist

- [ ] All files pushed to GitHub
- [ ] Environment variables configured (.env file)
- [ ] Package.json updated with latest deps
- [ ] Tests passing (npm test)
- [ ] Security checks passed (npm run security)
- [ ] Linting passed (npm run lint)
- [ ] Build successful (npm run build)
- [ ] Docker image built (docker build -t app .)
- [ ] Deployment service connected
- [ ] Custom domain configured (optional)
- [ ] SSL certificate enabled
- [ ] Monitoring set up (Sentry, New Relic)

## Post-Deployment

1. **Monitor Performance**
   - Set up Sentry for error tracking
   - Use Google Analytics for traffic
   - Monitor uptime with Pingdom

2. **Security**
   - Run Snyk security scan
   - Enable branch protection
   - Set up secret management

3. **Maintenance**
   - Keep dependencies updated (Dependabot)
   - Regular backups
   - Monitor logs and alerts

## URLs

```
GitHub Pages:  https://QMS85.github.io/My-AI-Tech-Themed-Portfolios/
Vercel:        https://jonathan-portfolio.vercel.app/
Netlify:       https://jonathan-portfolio.netlify.app/
Heroku:        https://jonathan-portfolio-app.herokuapp.com/
Custom:        https://jonathan-portfolio.dev/
```

## Troubleshooting

### Port Already in Use
```bash
lsof -ti:3000 | xargs kill -9
npm start
```

### Permission Denied (Docker)
```bash
sudo usermod -aG docker $USER
newgrp docker
```

### CORS Issues
- Check server.js middleware
- Ensure origin is allowed in CORS config

### Build Fails
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Support

- **GitHub Issues**: Report bugs
- **Discussions**: Ask questions
- **Documentation**: Check README.md
- **Community**: Stack Overflow with tags
