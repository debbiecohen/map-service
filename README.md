# Pre-requisites
* Node.js LTS installed on your machine
* MongoDB Atlas cluster set up

# How to run
## 1. Clone this repository in a folder:
```
git clone git@github.com: https://github.com/debbiecohen/map-service.git
```

## 2. Make sure you `cd` int othe project folder
```
cd map-service
```

## 3. Install NPM dependencies
```
npm install
```

(NPM will know what to install based on the package.json file)

## 4. Modify the MongoDB connection string in `src/index.js` (copy from MongoDB Atlas)

## 5. Make sure you have Nodemon installed for a better development experience
```
npm install -g nodemon
```

## 6. Run the project
```
nodemon src/index.js
```

## Enjoy!
