# 🔒 Security Guide

## Overview

This project implements industry-standard security practices to protect user data and prevent common web vulnerabilities.

## Security Headers

All servers include the following security headers:

### Content Security Policy (CSP)
```
default-src 'self'
script-src 'self'
style-src 'self' https://fonts.googleapis.com
font-src 'self' https://fonts.gstatic.com
img-src 'self' data: https:
```

### Additional Headers
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Strict-Transport-Security: max-age=31536000`
- `Referrer-Policy: strict-origin-when-cross-origin`

## Rate Limiting

- **Limit**: 100 requests per 15 minutes
- **Per IP**: Enforced per client IP
- **Exceptions**: Health check endpoint

## Input Sanitization

All user inputs are sanitized to prevent:
- NoSQL injection
- XSS (Cross-Site Scripting)
- Command injection

## CORS Protection

Only whitelisted origins can access:
- Configure in `.env` file
- Default: `http://localhost:3000` (development)

## Best Practices

1. **Keep Dependencies Updated**
   ```bash
   npm audit
   npm update
   ```

2. **Use Environment Variables**
   - Never commit `.env` file
   - Use `.env.example` as template

3. **Enforce HTTPS**
   - Use in production
   - Enable HSTS

4. **Monitor Logs**
   - Review error logs regularly
   - Watch for suspicious activity

5. **Regular Backups**
   ```bash
   npm run backup
   ```

## Reporting Security Issues

If you discover a security vulnerability, please email security@example.com instead of using the issue tracker.

---

For more information, see: [OWASP Top 10](https://owasp.org/www-project-top-ten/)
