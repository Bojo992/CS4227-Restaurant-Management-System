Push-Location analytics; mvn clean install; Pop-Location

Push-Location inventory; mvn clean install; Pop-Location

Push-Location payment; mvn clean install; Pop-Location

docker-compose -f ./docker-compose.yaml up -d --build
