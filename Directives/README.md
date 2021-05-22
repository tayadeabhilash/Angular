# Directives

## Building a custom attribute directive

- ``` ng generate directive highlight ```
- highlight.directive.ts
    ``` typescript
    @Directive({
    selector: '[appHighlight]'
    })
    export class HighlightDirective {
        constructor(el: ElementRef) {
        // perform operations on element to which you applied the directive
        }
    } 
    ```
- app.component.html
    ``` HTML
    <p appHighlight>Highlight me!</p>
    ```

## Handling user events

With the @HostListener() decorator, you can subscribe to events of the DOM element that hosts an attribute directive.

-   ``` typescript
    @Directive({
    selector: '[appHighlight]'
    })
    export class HighlightDirective {

        constructor(private el: ElementRef) { }

        @HostListener('mouseenter') onMouseEnter() {
            this.el.nativeElement.style.backgroundColor = color;
        }
    }
    ```

## Passing values into an attribute directive

The @Input() decorator adds metadata to the class that makes the directive's property available for binding.

-   TypeScript
    ``` typescript
        @Directive({
        selector: '[appBetterHighlight]'
        })
        export class BetterHighlightDirective {
        
        @Input() highlightColor = 'blue';

        @HostListener('mouseenter') mouseover(eventData: Event){
            this.backgroundColor = this.highlightColor;
        }
        }
    ```
-   HTML
    ``` HTML
    <p appHighlight highlightColor="violet">
        Highlight me too!
    </p>

## @HostBinding

Decorator that marks a DOM property as a host-binding property and supplies configuration metadata.

-   TypeScript
    ``` typescript
    @Directive({
    selector: '[appBetterHighlight]'
    })
    export class BetterHighlightDirective {

    @HostBinding('style.backgroundColor') backgroundColor:string;

    }

## Building a custom structural directive
Creating an UnlessDirective and setting condition values. The UnlessDirective does the opposite of NgIf
-   ``` ng generate directive unless ```
-   TypeScript
    ``` Typescript
        @Directive({
        selector: '[appUnless]'
        })
        export class UnlessDirective {
        @Input() set appUnless(condition: boolean) {
            if (!condition) {
            this.vcRef.createEmbeddedView(this.templateRef);
            } else {
            this.vcRef.clear();
            }
        }
        constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }

        }
    ```
-   HTML
    ``` HTML
    <p *appUnless="onlyOdd">Rendered with structural directive</p>
    ```
