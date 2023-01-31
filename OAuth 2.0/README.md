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



## AccessToken

### # AcessTokenResponse
--- Successful Response


### # Authorization Code Request

```HTTP
POST /oauth/token HTTP/1.1
Host: authorization-server.com
 
grant_type=authorization_code
&code=xxxxxxxxxxx
&redirect_uri=https://example-app.com/redirect
&code_verifier=Th7UHJdLswIYQxwSg29DbK1a_d9o41uNMTRmuH0PM8zyoMAQ
&client_id=xxxxxxxxxx
&client_secret=xxxxxxxxxx
```

The authorization code grant is used when an application exchanges an authorization code for an access token. 
After the user returns to the application via the redirect URL, the application will get the authorization code from the URL and use it to request an access token. 
This request will be made to the token endpoint.




## Authorization

### # The Authorization Request
Clients will direct a user’s browser to the authorization server to begin the OAuth process.

```http
GET /authorize HTTP/1.1
HOST: authorization-server.com

&response_type=code
&client_id=29352735982374239857
&redirect_uri=https://example-app.com/callback
&scope=create+delete
&state=xcoivjuywkdkhvusuye3kch
```
