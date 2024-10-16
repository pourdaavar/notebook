## TOPICS
- A particular stream of data
- Like a table in a db
- y can have as many topics as you want!
- A topic is identified by its name
	- logs
	- purchases
	- twitter_tweets
	- trucks_gps
- any kind of message format -> JSON,CSV, ...
- sequence of messages is called a data stream
- u can't query topics, instead, use Kafka producers to send data and Kafka consumers to read the data

> Kafka **topics** are immutable: once data is written to a partition, it cannot be changed
#### [Topic Name conventions](https://www.kadeck.com/blog/kafka-topic-naming-conventions-5-recommendations-with-examples)
## Partitions and offsets
Topics are split in partitions
	1. Messages within each partition are ordered
	2. Each message within a partition gets an incremental id, called **offset**
	3. Once the data is written to a partition, it cannot be changed (immutability)
	4. data is kept only for a limited time ( default is 1-week - can be configured )
	5. offset only have a meaning for a specific partition
	6. order is guaranteed only within a partition ( not across partitions )


## Producers
producers write data to topics ( which are made of partitions)

 #### - **Message keys**
 producers can choose to send a key with the message (string, number, binary and ...)
	 - if key=null, data is sent round robin ( p0 then p1 and ...)
	 - if key != null, then all msgs for that key will always go to the same partition ( hashing )
	 - A key are typically sent if u send message ordering for specific field ( ex: truck_id )

##### Messages anatomy
 ![[message_anatomy.png]]


# Kafka Message Serializer

==Kafka accepts only byte sequences from producers and sends byte sequences to consumers.==

However, our messages aren’t initially in bytes. So, we perform message serialization, converting your data or objects into bytes. It’s a straightforward process, and I’ll demonstrate it now.

Serializers are used for both the message’s key and value. For instance, consider a key object, like a car ID — let’s say 123. The value might simply be a text like “Hello world”. These aren’t bytes yet but objects in our programming language. We’ll designate an integer Serializer for the key. The Kafka producer is then able to convert this key object, 123, into a byte sequence, creating a binary representation of the key.

For the value, we’ll specify a string Serializer. The Serializers for the key and value differ, meaning it can smartly convert the text “Hello world” into a byte sequence for the value.

## Consumers
1. consumers read data from a topic ( identified by name ) - pull model
2. consumers automatically know which broker to read from
3. in case of broker failures, consumers know how to recover.
4. data is read in order from low to high offset ==within each partitions==

### Consumer Deserializer
Within each partition, there’s a specific order. As consumers read messages, they must convert the bytes received from Kafka into usable data or objects. The message in Kafka has a key and a value, both in binary format. To use these in our programming language, they need to be converted into objects. The consumer must know the message format in advance. For instance, if the key is an integer, the consumer uses an integer Deserializer to change the key from bytes to an integer. The key then becomes an integer like 123. Similarly, if the value is expected to be a string, a string Deserializer converts bytes into a string, retrieving the original message like “Hello world.” Apache Kafka includes Deserializers for various data types, such as strings (including JSON), integers, floats, Avro, Protobuf, and others, which consumers can use.

![[deserializer_message.png]]




### Create a new topic
`kafka-topics.sh --create --bootstrap-server localhost:9094 --topic domain.topic.fancy.name --partitions 3 --replication-factor 3`

