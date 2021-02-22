#!/bin/bash

echo "Build React APP"
npm run build
echo "copy build in server"
scp -r build MU-NGINX:react-app/ 
ssh MU-NGINX "cd react-app;ls;sudo systemctl restart nginx.service;systemctl status nginx.service"
echo "This is the end, my only friend"