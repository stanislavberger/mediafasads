module.exports = {
  apps : [{
    script: 'npm start'
  }],

  deploy : {
    production : {
      key: 'key.pem',
      user: 'root',
      host: '82.146.54.132',
      ref: 'origin/master',
      repo: 'https://github.com/stanislavberger/mediafasads.git',
      path: '/sites/mediafasads',
      'pre-deploy-local': '',
      'post-deploy' : 'source  ~/.nvm/nvm.sh npm install && npm run build && reload ecosystem.config.js --env-production',
      'pre-setup': '',
      'ssh-options': 'ForwardAgent=yes'
    }
  }
}
