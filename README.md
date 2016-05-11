# markdown-processor

### Objective:

Write REST API server which can process markdown-style (GitHub style) text and produce
HTML (markdown module have to written from scratch, no ready solutions)

### Requirements:

1. Endpoint with url **/markdown/save** - receive in params markdown text, process it ( transform to
html), save to MongoDB and return ID of created record in MongoDB and created HTML.
2. Endpoint with url **/markdown/get** - receive one param ID and returns from MongoDB record
with markdown and generated HTML associated with this record.
3. Module to parse markdown should be valid Hapi.js module.
4. Markdown module should be covered with Jasmine/Mocha tests.
5. Server structure should be ready for extension.

##### Nice to have requirements:

1. Simple Front-end application to test it (Angular.js/React)
2. Preview in Front-end applications when editing textarea (class to parse markdown must be isomorphic and can be used on both front-end and back-end)
3. CSRF protection of URL’s


### Folder Structure:

```
markdown-processor
│   README.md
│   package.json    
│   npm-shrinkwrap.json    
│   .jshintrc    
│   .gitignore    
│       
│───client
│    │   package.json
│    │   gruntfile.js
│    │   configLoader.js
│    │   bower.json
│    │   .jshintrc
│    │   .jscsrc
│    │   .gitignore
│    │   .editorconfig
│    │   .bowerrc
│    ├───app
│    │   │   index.html
│    │   ├───src
│    │   │   ...
│    ├───tasks
│    │   │   ...
│    │   │   ...
│    │   │   ...
│    ├───tasks
│    │   │   ...
│    │   │   ...
│    │   │   ...
│    
└───server
    │   server.js
    │   routes.js
    │   index.js
    │   bower.json
    │   .gitignore
    ├───config
    │   │   ...
    │   │   ...
    ├───facade
    │   │   ...
    │   │   ...
    ├───helpers
    │   │   ...
    │   │   ...
    ├───models
    │   │   ...
    │   │   ...
    ├───modules
    │   ├───markdown
    │   │   ...
    ├───repositories
    │   │   ...
    │   │   ...
       
```

### Test Coverage

Markdown module's unit test and Markdown processor's unit tests are fully covered. Markdown module's test covers overall functionality of the module which includes service layer by using the stubbing mechanism.

### How to use

##### Server startup

Node modules installation. 
```
    $ npm install
```

Bower package installation for Frontend
```
    $ cd client && bower install
```

Server bootstrap
```
    $ npm start
```

Run Tests
```
    $ npm test
```

Access the [Markdown Application](http://localhost:5000).

Api Endpoints:
---

#### Markdown

**GET** */api/v1/markdown/get* - Get All markdowns created

**GET** */api/v1/markdown/get/{id}* - Get markdown by id

**POST** */api/v1/markdown/save* - Create Markdown

#### Api usage

###### Request

**POST** */api/v1/markdown/save*

```js
    {
        "title": "Sample Markdown",
        "markdown": "[I am google](https://www.google.com.pk, 'I am google')"
    }
```

###### Response

```js
    {
      "__v": 0,
      "updatedAt": "2016-05-11T07:25:51.104Z",
      "createdAt": "2016-05-11T07:25:51.104Z",
      "rawMarkDown": "[I am google](https://www.google.com.pk, 'I am google')",
      "processedHtml": "<a href=\"https://www.google.com.pk,\" title='I am google'>I am google</a>",
      "title": "Some",
      "_id": "5732de7f078fd1f61b397bdc"
    }
```


