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