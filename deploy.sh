#!/bin/bash
source name.sh
checkCode(){
  if [[ $? -gt 0 ]]
  then
    echo "Ocurrio un error"
    exit 1
  fi
}

checkEnv(){
  entorno=$(find . -name .env)
  echo $entorno 
  echo "es el entorno"
}

nameApp


checkEnv
echo "Build React APP"
npm run build --nomaps
checkCode
echo "Copy build in server"
scp -r build MU-NGINX:react-app/
checkCode
ssh MU-NGINX "cd react-app;ls;sudo systemctl restart nginx.service;systemctl status nginx.service"
checkCode
echo "This is the end, my only friend"