# Routing

## Defining a basic route

- You can add routes to AppModule or create a seperate module.
- Create a Module (class) for Routing.
- Import RouterModule and Routes into your routing module.
    -   ``` Typescript
        @NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
        ```
- Define your routes in your Routes array.
    - ``` TypeScript
        const routes: Routes = [
            { path: 'first-component', component: FirstComponent },
            { path: 'second-component', component: SecondComponent },
        ];
        ```
- Add your routes to your application.
    - Replace href attribute of anchor tag with routerLink to prevent reloading of page.
    - Update your component template to include \<router-outlet>. This element informs Angular to update the application view with the component for the selected route.
    - ``` HTML
        <li><a routerLink="/second-component" routerLinkActive="active">Second Component</a></li>
        <!-- The routed views render in the <router-outlet>-->
        <router-outlet></router-outlet>
        ```
    -   routerLinkActive Highlights the active tab.
     >[routerLinkActiveOptions]="{exact: true}" to match exact URL to highlight.

## Route order

-   The order of routes is important because the Router uses a first-match wins strategy when matching routes, so more specific routes should be placed above less specific routes.
- The wildcard route comes last because it matches every URL and the Router selects it only if no other routes match first.

## Navigating Programatically

-   Import ActivatedRoute and Router from @angular/router.
-   Initialize them using contructor.
-   For absolute routing use '/' at the beginning of path.
    -   ``` Typescript
        this.router.navigate(['/users']);
        ```
-   For relative routing use "relativeTo".
    -   ``` Typescript
        this.router.navigate(['users'], { relativeTo: this.route });
        ```

## Passing Parameter to Routes

- In route add /:\<parameter-name> to specify a parameter
    -   ``` TS
        { path: 'servers/:id', component: ServerComponent}
        ```
- Pass the parameter in routerLink array in HTML
    -   ``` HTML
        <a
        [routerLink]="['/servers', server.id]">Servers</a>
        ```
- To fetch the parameter use ActivatedRoute Snapshot or use params to fetch reactively
    - ``` TS
        this.route.snapshot.params['<paramter-name>'];
        ```
    - Reactively
        ``` TS
        this.route.params.subscribe(
            (params: Params) => {
                this.user.id = params['id'];
            }
        );
        ```

## Passing Query Parameters and fragments

-   Pass the parameters in JSON in queryParams attribute in HTML.
    - ``` HTML
        <a [routerLink]="['/servers', server.id]" [queryParams]="{allowEdit: '1'}" fragment="loading">Servers</a>

-   To fetch use same technique as params.
    -   ``` TS
        this.route.queryParams.subscribe(
            (queryParams: Params) => {
                this.allowEdit = queryParams['allowEdit'];
            }
        );
        ```

## Setting up Child/Nested Routes

- Routes that are relative to a component other than your root component are called child routes.
- Add a second \<router-outlet> to your app/component.
- Add chlidren field in you path in Routing Module.
    ``` TS
        { path: 'servers', component: ServersComponent, children: [
        { path: ':id', component: ServerComponent},
        { path: ':id/edit', component: EditServerComponent}
        ]},
    ```

## Guards

### 1. CanActivate

- Interface that a class can implement to be a guard deciding if a route can be activated.
- If all guards return true, navigation continues. If any guard returns false, navigation is cancelled.
- To use this interface create a service which implements CanActivate and write override the canActivate function according to your need.
- To attach this guard to your path edit routes array as follows:
    -   ```TS
        { path: 'servers',
        canActivate: [AuthGuardService],
        component: ServersComponent }
        ```

### 2. CanActivateChild

- Interface that a class can implement to be a guard deciding if a child route can be activated.
- If all guards return true, navigation continues. If any guard returns false, navigation is cancelled.
- To use this implement this inteface in your guard service and override the canactivatechild function as follows:
    -   ``` TS
        canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.canActivate(route, state);
        }
        ```
- To attach this guard to your path edit routes array as follows:
    -   ```TS
        { path: 'servers',
        canActivateChild: [AuthGuardService],
        component: ServersComponent}
        ```

### 3. CanDeactivate

- Interface that a class can implement to be a guard deciding if a route can be deactivated.
- If all guards return true, navigation continues. If any guard returns false, navigation is cancelled.
- Works similarly as canactivate interface.


## Passing static data to a route

- Pass a json to path as follows:
    -  ``` TS
         { path: 'not-found', component: ErrorComponentComponent, data: { message: 'Page not found!' } }
        ```
- Retrive data:
    -   ``` TS
        //static way
        this.errorMessage = this.route.snapshot.data['message'];
        //reactive way
        this.route.data.subscribe(
        (data: Data) => {
            this.errorMessage = data['message']
        }
        );
        ```








