Stands for 4 roles:
- Resource owner ( the user )
- Client ( the third-party application )
- Authorization Server ( can be same server as the API )
- Resource Server ( the API )


## The User ( Resource Owner )
The resource owner is the person who is giving access to some portion of their account. ( data could be like photo, documents, contacts and, etc). any system that wants to act on behalf of the user must first get permission from them.


## The API ( Resource Server )
The resource server is the server that containts the user's info that is being accessed by the third-party application. the resource server must be able to accept and validate access tokens and grant the request if the user has allowed it.
the resource server does not necessarily need to know about applications.


## The Authorization server
The authorization server is what the user interacts with when an application is requesting access to their account.
This is the server that displays the OAuth prompt, and where the user approves or denies the access request. the authorization server is also responsible for granting access token after the user authorizes the application.


## The Client
The client is the app that is attempting to act on the user's behalf or access the user's resources.