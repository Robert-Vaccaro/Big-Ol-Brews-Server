# Big Ol' Brews Server



The back-end is built with **Node.js** using a **Postgres** database.

Here is the [live demo](https://lit-fjord-25639.herokuapp.com/)!

Here is the Client [README.md file](https://github.com/Robert-Vaccaro/Big-Ol-Brews-Client/blob/master/README.md)


## Local Installation

Follow the instructions below if you prefer to install the application on your local machine:

1. Install the latest version of [Node.js](https://nodejs.org). This application requires Node.js 4+.

1. Install [Postgres](http://www.postgresql.org/) locally 

1. Start Postgres and create a database called **beers**.

1. Clone this repository.

1. install the project dependencies:

    ```
    npm install
    ```

1. Open **server/config.js** and make sure the **databaseURL** matches your configuration (use your user name)

1. Type the following command to build the client application:

    ```
    npm run webpack
    ```
    

1. Type the following command to start the server:
    
    ```
    npm start
    ```
    
    The database is automatically populated
    
1. Open a browser and access [http://localhost:5000](http://localhost:5000)

**API Documentation**
----
**Displaying Beers**

  Returns information about each beer in this [SQL database](https://github.com/Robert-Vaccaro/Big-Ol-Brews-Server/blob/master/beers.sql).

* **URL**

  `/products` <br />
  `/products/:id`

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[integer]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Abbaye d'Aulne Brune des Pères 6" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "Beer doesn't exist" }`

* **Sample Call:**

  ```React.js
    export default opts => {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open(opts.method || "GET", opts.url);
            xhr.onload = () => {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = () => {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            };
            if (opts.headers) {
                Object.keys(opts.headers).forEach(key => {
                    xhr.setRequestHeader(key, opts.headers[key]);
                });
            }

            xhr.send(opts.data);
        });
    }
  ```
