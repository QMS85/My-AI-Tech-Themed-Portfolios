/**
 * PM2 Ecosystem Configuration
 * Manages all three portfolio applications
 */

module.exports = {
  apps: [
    {
      name: 'glassmorphism',
      script: './GLASSMORPHISM-NEURAL-NETWORKS/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3001
      },
      error_file: './logs/glassmorphism-error.log',
      out_file: './logs/glassmorphism-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      ignore_watch: ['node_modules', 'public', 'logs']
    },
    {
      name: 'neon',
      script: './NEON-CYBER-GRID/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3002
      },
      error_file: './logs/neon-error.log',
      out_file: './logs/neon-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      ignore_watch: ['node_modules', 'public', 'logs']
    },
    {
      name: 'terminal',
      script: './TERMINAL-CLI/server.js',
      instances: 'max',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 3003
      },
      error_file: './logs/terminal-error.log',
      out_file: './logs/terminal-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      autorestart: true,
      watch: false,
      max_memory_restart: '500M',
      ignore_watch: ['node_modules', 'public', 'logs']
    }
  ]
};
