module.exports = {
  apps: [
    {
      name: 'your-app-name', // Your project name
      cwd: '/home/ubuntu/my-project', // Path to your project
      script: 'npm', // For this example we're using npm, could also be yarn
      args: 'start', // Script to start the Strapi server, `start` by default
      env: {
        APP_KEYS: rXWbre7+nqiN5Xftdl3WFA==,RZxvSnskpfYITIIG3L94mA==,9BZHf4WuobwPeNyQNYjDaA==,3ff3iDAQ9xkpb8o+uiT5kw==,
        API_TOKEN_SALT: GCJqrlZwZypVKEsexJDHTg==,
        ADMIN_JWT_SECRET: YhxotDCb+TNBTNSQ5A7A8Q==,
        JWT_SECRET: X+wIUTXxfVKAMq0lU7wiKw==,
        NODE_ENV: 'production',
        AWS_ACCESS_KEY_ID: 'aws-access-key-id',
        AWS_ACCESS_SECRET: 'aws-access-secret', // Find it in Amazon S3 Dashboard
        AWS_REGION: 'aws-region',
        AWS_BUCKET_NAME: 'my-project-bucket-name',
      },
    },
  ],
};

  deploy : {
    production : {
      user : 'SSH_USERNAME',
      host : 'SSH_HOSTMACHINE',
      ref  : 'origin/master',
      repo : 'GIT_REPOSITORY',
      path : 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};
