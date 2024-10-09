
# Index type

## Sparse Indexes
The index skips over any document that is missing the indexed field Sparse indexes are like regular indexes in mongodb. The differece is that sparse indexes only include documents that have the indexed field, whereas regular indexdes include all documents no matter if the indexded field exist or not.

For example, when you create an index on a age field of customers collection that not every customer has a age info on file, sparse index will exclude customers don’t have a age field whereas the regular index will include all customers even if the customer don’t have a value for age. Imagine there is a billion of documents in the customer collection and half of them don’t have age on file, a sparse index on the age will save a lot of memory spaces.

[MORE - official documents](https://www.mongodb.com/docs/manual/core/index-sparse/)




#index #mongodb #sparse