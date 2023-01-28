## Interoduction
gRPC (g Remote Procedure Call) can use protocol buffers as both its Interface Definition Language (IDL) and as its underlying message interchage format.
gRPC works at layers 5, 6 and 7. Protobuf works at layer 6. ( OSI Model )

## Overview
in gRPC, a client app can directly call a method on a server app on different machine as if it were a local project. making it easier for you to create distributed applications and services.
As in many RPC systems, gRPC is based around the idea of defining a service, specifying the methods that can be called remotely with their parameters and return types. 

> It provides code to serve up and call the method signatures over a network.
 
On the server side, the server implements this interface and runs a gRPC server to handle client calls. 
On the client side, the client has a stub (referred to as just a client in some languages) that provides the same methods as the server.

![grpc](./assets/landing-2.svg)

gRPC clients and servers can run and talk to each other in a variety of environments.

## Working with Protocol Buffers
By default, gRPC uses [Protocol Buffers](https://developers.google.com/protocol-buffers/docs/overview) 
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

