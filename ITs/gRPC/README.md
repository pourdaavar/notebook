## Interoduction
gRPC (g Remote Procedure Call) can use protocol buffers as both its Interface Definition Language (IDL) and as its underlying message interchage format.
gRPC works at layers 5, 6 and 7. Protobuf works at layer 6. ( OSI Model )

### Overview
in gRPC, a client app can directly call a method on a server app on different machine as if it were a local project. making it easier for you to create distributed applications and services.
As in many RPC systems, gRPC is based around the idea of defining a service, specifying the methods that can be called remotely with their parameters and return types. 

> It provides code to serve up and call the method signatures over a network.
 
On the server side, the server implements this interface and runs a gRPC server to handle client calls. 
On the client side, the client has a stub (referred to as just a client in some languages) that provides the same methods as the server.

![grpc](landing-2.svg)

gRPC clients and servers can run and talk to each other in a variety of environments.

### Working with Protocol Buffers
By default, gRPC uses [Protocol Buffers](https://protobuf.dev/)
The first step when working with protocol buffers is to define the structure for the data you want to serialize in a *proto file*.
this is an ordinary text file with a `.proto` extenstion. Protocol buffer data is structrued as messages, where each message is small logical record of information containing a series of name-value pairs called *fields*.

```protobuf
message Person {
  string name = 1;
  int32 age = 2;
  bool isMarried = 3;
}
```

you can use protocol buffer compiler `protoc` to generate data access classes in your preferred language(s).

Also you define gRPC services in simple proto files, with RPC method parameters and return types specified as protocol buffer messages:

```protobuf
// hero.proto
syntax = "proto3";

package hero;

service HeroesService {
  rpc FindOne (HeroById) returns (Hero) {}
}

message HeroById {
  int32 id = 1;
}

message Hero {
  int32 id = 1;
  string name = 2;
}
```


## Type of RPC

### 1.  Unray RPC
 the simplest type of RPC where the client sends a single request and gets back a single respons.
 
 
### 2. Server streaming RPC
A server-streaming RPC is similar to a unray RPC, except that the server returns a stream of messages in response to a client's request. after sending all its messages, the server's status details (status code and optional status message) and optional trailing metadata are sent to the client. this completes processing on the server side. the client completes once it has all the server's messags. 

### 3. Client streaming RPC
A client-streaming RPC is similar to a unray RPC, except that the client send a stream of messages to the server instead of a single message. the server responds with a single message (along with its status details and optional trialing metadata), typically but not necessarily after it has received all the client's messagges.

### 4. Bidirectional streaming RPC
in bidirectional streaming RPC, the call is initiated by the client invoking the method and the server receiving the client metadata, method name and deadline. the server can choose to send back its initial metadata or wait for the client to start streaming messages.



#### Deadline/Timeouts
gRPC allows clients to specify how long they are willing to wait for an RPC to complete before the RPC is terminated with a `DEADLINE_EXCEEDED` error. On the server side, the server can query to see if a particular RPC has timed out, or how much time is left to complete the RPC.


### RPC Termination
In gRPC, both the client and server make independent and local determinations of the success of the call, and their conclusions may not match. This means that, for example, you could have an RPC that finishes successfully on the server side ("I have sent all my responses") but the client side ("The responses arrived after my deadline!"). It's allso possible for a server to decide to complete before a client has sent all its requests.


### Metadata
Metadata is information about a particular RPC call (such as authentication details) in the form of a list of key-value pairs, where the keys are strings and the values are typically strings, but can be binary data.

Keys are case insensitive and consist of ASCII letters, digits, and special characters -, _, . and must not start with grpc- (which is reserved for gRPC itself). Binary-valued keys end in -bin while ASCII-valued keys do not.

User-defined metadata is not used by gRPC, which allows the client to provide information associated with the call to the server and vice versa.
Access to metadata is language dependent.

