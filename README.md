# UniversityDevoxx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Demo 04

Publishing to Docker, enable production mode, build

## Step 01 Building production mode and debug mode

you can see how production mode works, by building your app.  
Launch your terminal and make a test :

```
ng serve -dev
```
the `vendor.bundle.js` file is **3.1Mb**

```
ng serve -prod
```
the `vendor.bundle.js` file is **230kb**

Now you can **Build** the final result :

```
ng build -dev
```
```
ng build -prod
```

Notice the `/dist` folder is present now and containing your final build folder.

## Step 02 taking care of the environment variables

Editing the environment variables in `/src/environments` folder to be able to switch variables from differents build:   

Editing the `/src/environments/environment.ts` file to handle the `dev` mode : 
```javascript
export const environment = {
  production: false,
  uriPath: "http://localhost:9292/conference-venue/api"
};
```

Editing the `/src/environments/environment.prod.ts` file to handle the `prod` mode : 
```javascript
export const environment = {
  production: true,
  uriPath: "http://devoxxconference.yourdomain.com/conference-venue/api"
};
```

Finally, editing your `/src/app/app.module.ts` file to get the right url in your `BASE_PATH` key :
Don't forget to import the `environment` class:

```javascript
import { environment } from '../environments/environment';
```
and then editing the paths :

```javascript
{ provide: BASE_PATH, useValue: environment.uriPath },
{ provide: "roomServiceUrl", useValue: environment.uriPath }
```

Now, building your solution in `dev` or `prod` mode will change your uri !


**Note** If you don't have a production environment and you want to test the `prod` bundle, you can test with this command :  
```
ng serve --prod --env=dev
```
It will generate the `prod` bundle, minified, but will use the `dev` environment variables.

## Step 03 Docker file

Create a new Docker file called `Dockerfile` in root folder `/` and copy paste this commands :

```
FROM nginx

MAINTAINER spertus

LABEL name="Conference Web"
LABEL description="Angular front-end for the conference application"
LABEL url="http://localhost:80"
LABEL vendor="@sebastienpertus"

EXPOSE 80

COPY ./dist /usr/share/nginx/html
```

Build the container image from your terminal in the root folder `/` :  

```
docker build -t universitydevoxx:latest .
```

Run it in your environment (I use local port 81 instead of 80)

```
docker run -d -p 81:80 universitydevoxx:latest
```


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
