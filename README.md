# UniversityDevoxx

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Demo 03

Demo on router integration 

## Step 01 Create a new component

To make a demonstration about how to make `Routes` we will add an empty new component called `schedule`.  
Go to `/src/app` in your terminal and generate a new component :  

```
ng g component schedule
```

## Step 02 Change the app.component.html page

to be able to use a router, we change the `/src/app/app.component.html` file.  This file will act as a **master** page. 

```html

<nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Devoxx</a>

  <div class="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Conferences</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Rooms</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>

```

**Note** We don't use any component in the `app.component.html` file. 
We will add the correct syntax later to use a router component.  

## Step 03 Create a router 

Go to the `/src/app/app.module.ts` and add the correct imports :

```javascript
import { Routes, RouterModule } from '@angular/router';
```

Now, add a routes array :  

```javascript
var routes: Routes = [
  { path: '', redirectTo: '/schedules', pathMatch: 'full' },
  { path: "schedules", component: ScheduleComponent },
  { path: "rooms", component: RoomComponent }
];
```

Then make the routes available in the RouterModule itself :

```javascript
imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  RouterModule.forRoot(routes)
],
```

We can now editing our `/src/app/app.component.html` to handle correctly the routings paths :

Add at the end the <router-outlet> component :
```html
    ...
    ...
    </nav>
  
    <div class="container">
      <router-outlet></router-outlet>
    </div>

</div>
```

And then editing the two links in the nav control : 
```html
<li class="nav-item active">
  <a class="nav-link" routerLinkActive="active" [routerLink]="['/']">Conferences</a>
</li>
<li class="nav-item">
  <a class="nav-link" routerLinkActive="active" [routerLink]="['/rooms']">Rooms</a>
</li>

```



## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
