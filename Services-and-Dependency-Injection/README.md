# Services and Dependency Injection

## Creating a service

- ``` ng g s <service-name> ```

-   ``` Typescript
        @Injectable({
        providedIn: 'root',
        })
        export class HeroService {
        constructor() { }
        }
    ```
- The @Injectable() decorator specifies that Angular can use this class in the DI system i.e Other servies can now be injected in this service. The metadata, providedIn: 'root', means that the Service is visible throughout the application.

## Understanding the Hierarchical Injector
<br>

- ![hierarchy](./Capture.png)

- To create a new instance of the service append the service to providers in @Components().

## Injecting services

- Never create instances of service directly.

- Inject a service in a component's constructor(), supply a constructor argument with the dependency type.

-   ``` Typescript
        constructor(heroService: HeroService)
    ```

## Using services in other services

-  @Injectable() decorator facilates this by supplying metadata.
-   ``` typescript
        @Injectable({
        providedIn: 'root',
        })
        export class HeroService {
        constructor(private logger: Logger) {  }
        }
    ```
