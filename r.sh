#!/bin/bash

case $1 in
	"r") sudo docker-compose up --force-recreate --no-deps web ;;
	"b") ID=$(sudo docker ps | awk '{if ($2 == "projectzeta_web") print $1}')
    sudo docker exec -it $ID bash
     ;;
    "a") sudo docker-compose down --rmi all;;
	"c") docker run -d -p 27017:27017 -v ./data:/data/db mongo ;;
	*) echo "INVALID NUMBER!" ;;
esac


