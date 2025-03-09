# MH-Changa project by WWACHIRA
To push your local code onto remote(git).
- git init
- git remote add origin git@github.com:yourgithubusername/projectname.git
- git add .
- git commit -m 'init commit'
- git push -u origin main
# If you want to use icons or animations, install these libraries:
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons framer-motion

To generate tailwind.config.js and postcss.config.js files for your project, follow these steps:
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
npx tailwindcss init --full
touch postcss.config.js
npx tailwindcss init -p
npx tailwindcss init -p

to update npm if npx doesn't run: npm install -g npm

# if installing npx on ur terminal try your this commands:
on your terminal run this 3 commands, final result should show Checksums matched!: 
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

echo 'export NVM_DIR="$HOME/.nvm"' >> ~/.bash_profile
echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> ~/.bash_profile
echo '[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"' >> ~/.bash_profile
source ~/.bash_profile

nvm install --lts

# to download free logos
Go to: https://logowik.com/ 