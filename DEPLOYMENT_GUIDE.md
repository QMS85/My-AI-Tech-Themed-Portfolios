# 🚀 Deployment Guide

## Overview

This guide covers deploying your AI-Tech Themed Portfolios to various platforms.

## Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git
- Docker (optional, for containerized deployment)

## Local Development

```bash
# Install dependencies for all portfolios
npm run install:all

# Run all portfolios in development mode
npm run dev:all

# Run individual portfolios
npm run dev:glass    # Port 3001
npm run dev:neon     # Port 3002
npm run dev:terminal # Port 3003
```

## Production Build

```bash
# Start all portfolios in production mode
npm run start:all

# Start individual portfolios
npm run start:glass
npm run start:neon
npm run start:terminal
```

## Docker Deployment

### Using Docker Compose (Recommended)

```bash
# Build and start all containers
npm run docker:up

# View logs
npm run docker:logs

# Stop containers
npm run docker:down
```

### Using Docker CLI

```bash
# Build images
npm run docker:build

# Run individual containers
docker run -p 3001:3000 -e NODE_ENV=production ai-portfolio:glassmorphism
docker run -p 3002:3000 -e NODE_ENV=production ai-portfolio:neon
docker run -p 3003:3000 -e NODE_ENV=production ai-portfolio:terminal
```

## PM2 Process Management

### Installation

```bash
npm install -g pm2
```

### Start Applications

```bash
# Start all applications
npm run pm2:start

# View status
pm2 status

# View logs
npm run pm2:logs

# Restart applications
npm run pm2:restart

# Stop applications
npm run pm2:stop

# Delete applications
npm run pm2:delete
```

## Heroku Deployment

### Prerequisites
- Heroku CLI installed
- Heroku account

### Setup

```bash
# Login to Heroku
heroku login

# Create app
heroku create your-app-name

# Set environment variables
heroku config:set NODE_ENV=production

# Deploy
git push heroku main

# View logs
heroku logs --tail
```

## Railway Deployment

### Setup

```bash
# Login to Railway
railway login

# Link project
railway link

# Deploy
railway up
```

## Render Deployment

1. Connect GitHub repository
2. Create new Web Service
3. Set build command: `npm install:all`
4. Set start command: `npm run start:all`
5. Add environment variables
6. Deploy

## AWS EC2 Deployment

### Setup

```bash
# SSH into instance
ssh -i your-key.pem ec2-user@your-instance-ip

# Install Node.js
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Clone repository
git clone https://github.com/QMS85/My-AI-Tech-Themed-Portfolios.git
cd My-AI-Tech-Themed-Portfolios

# Install dependencies
npm run install:all

# Start with PM2
sudo npm install -g pm2
npm run pm2:start

# Setup PM2 to start on boot
pm2 startup
pm2 save
```

## Google Cloud Platform

### Using App Engine

```bash
# Initialize App Engine
gcloud app create

# Deploy
gcloud app deploy
```

## Microsoft Azure

### Using App Service

```bash
# Create resource group
az group create --name myResourceGroup --location eastus

# Create App Service plan
az appservice plan create --name myAppServicePlan --resource-group myResourceGroup

# Create web app
az webapp create --resource-group myResourceGroup --plan myAppServicePlan --name myapp

# Deploy from GitHub
az webapp deployment source config-zip --resource-group myResourceGroup --name myapp --src deploy.zip
```

## Nginx Reverse Proxy

### Configuration

See `nginx.conf` for complete configuration.

```bash
# Install Nginx
sudo apt-get install nginx

# Copy configuration
sudo cp nginx.conf /etc/nginx/sites-available/default

# Test configuration
sudo nginx -t

# Start Nginx
sudo systemctl start nginx
sudo systemctl enable nginx
```

## SSL/TLS Certificate (Let's Encrypt)

```bash
# Install Certbot
sudo apt-get install certbot python3-certbot-nginx

# Generate certificate
sudo certbot certonly --nginx -d yourdomain.com

# Auto-renew
sudo systemctl enable certbot.timer
```

## Health Checks

### Endpoint

```
GET /health
```

### Response

```json
{
  "status": "healthy",
  "timestamp": "2026-08-26T12:00:00.000Z",
  "uptime": 3600,
  "environment": "production",
  "memory": {
    "rss": "150 MB",
    "heapUsed": "75 MB",
    "heapTotal": "200 MB"
  }
}
```

## Monitoring

### PM2 Plus

```bash
# Install PM2 Plus
pm2 install pm2-auto-pull
pm2 link your-secret-key your-public-key
```

### New Relic

```bash
# Install agent
npm install newrelic

# Add to server.js (first line)
require('newrelic');
```

## Scaling

### Horizontal Scaling

```bash
# Scale with PM2 cluster mode
pm2 start ecosystem.config.js -i max

# Scale with Docker
docker-compose up --scale service=3
```

### Load Balancing

Use Nginx or cloud provider's load balancer.

## Backup Strategy

```bash
# Create backup
npm run backup

# Automated backups (cron)
0 2 * * * cd /path/to/project && npm run backup
```

## Troubleshooting

### Port Already in Use

```bash
lsof -i :3001
kill -9 <PID>
```

### Memory Issues

```bash
# Increase Node memory
NODE_OPTIONS=--max-old-space-size=4096 npm start
```

### Permission Errors

```bash
# Fix permissions
chmod -R 755 ./
chown -R nodejs:nodejs ./
```

## Performance Optimization

1. Enable Gzip compression
2. Use CDN for static assets
3. Enable caching headers
4. Minify CSS/JS
5. Optimize images
6. Use HTTP/2

---

For more information, see [SECURITY_GUIDE.md](./SECURITY_GUIDE.md)
