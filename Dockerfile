FROM mongo:8.0.0
RUN openssl rand -base64 756 > /etc/mongo-keyfile \
		&& chmod 400 /etc/mongo-keyfile \
		&& chown mongodb:mongodb /etc/mongo-keyfile

# Copy the MongoDB configuration files
# COPY ./config /etc/mongo


# # Set up the replica set configuration
# ENV MONGO_INITDB_DATABASE mongodb
# ENV MONGO_INITDB_REPLICA_SET replicaset

# # Run the MongoDB server
# CMD ["mongod", "--replSet", "replicaset"]
