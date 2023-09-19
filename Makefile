docker-compose-dev = docker-compose -f ./docker/dev/docker-compose.yaml
start:
	$(docker-compose-dev) up -d
logs:
	$(docker-compose-dev) logs -f
stop:
	$(docker-compose-dev) down
