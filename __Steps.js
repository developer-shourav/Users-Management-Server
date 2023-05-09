/**
 * 1. Create A POST API in Server Side
 * 2. Send Data via POST From Client Side
 * 3. Set Fetch method inside the fetch options ( second parameter)
 * 4. Option will have three things : 1. method 2. headers 3. body
 *    ```
 *     method:'POST',
 *    headers: {
 *      'content-type': 'application/json'
 *    },
 *    body: JSON.stringify(data/value)
 *    ```
 * 5. Don't forget to send data by JSON.stringify in the body.
 * 6. Don't Forget using express.json() middleware in server-side 
 *    ``` 
 *     // Middleware 
 *      app.use(cors())
 *      app.use(express.json())
 *    ```
 * 
*/