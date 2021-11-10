# Angular Notes

## Components

Components are the main building block for Angular applications. Each component consists of:

- An HTML template that declares what renders on the page
- A Typescript class that defines behavior
- A CSS selector that defines how the component is used in a template
- Optionally, CSS styles applied to the template

Every component is a class with a @Component decorator.
The base syntax should look like this:

```@Component({
  selector: 'app-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.css']
})

export class ComponentOverviewComponent {

}
```

To create a component you can use the CLI command ng generate component path/name-of-component.

## Data Binding
### Property Binding
Property binding in Angular helps you set values for properties of HTML elements or directives. 

Use property binding to do things such as toggle button functionality, set paths programmatically, and share values between components.

Property binding moves a value in one direction, from a component's property into a target element property.

To bind to an element's property, enclose it in square brackets, [], which identifies the property as a target property. 

A target property is the DOM property to which you want to assign a value. 

For example, the target property in the following code is the image element's src property.

```
<img [src]="itemImageUrl">
```

In most cases, the target name is the name of a property, even when it appears to be the name of an attribute. 

In this example, src is the name of the <img> element property.

The brackets, [], cause Angular to evaluate the right-hand side of the assignment as a dynamic expression. 

Without the brackets, Angular treats the right-hand side as a string literal and sets the property to that static value.

```
<app-item-detail childItem="parentItem"></app-item-detail>
```

To use the target and the property, you must declare them in their respective classes.

Declare the target of childItem in its component class, in this case ItemDetailComponent.

For example, the following code declares the target of childItem in its component class, in this case ItemDetailComponent.

Then, the code contains an @Input() decorator with the childItem property so data can flow into it.

```
@Input() childItem = '';
```

### Event Binding
Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.

To bind to an event you use the Angular event binding syntax. 
This syntax consists of a target event name within parentheses to the left of an equal sign, and a quoted template statement to the right. 
In the following example, the target event name is click and the template statement is onSave().

```
<button (click)="onSave()">Save</button>
```

You can also create your own events in a child component with EventEmitter, which you can listen to from the parent component.

You declare such an EventEmitter with the @Output decorator.

#### Child Component
```
@Output() deleteRequest = new EventEmitter<Item>();

delete() {
  this.deleteRequest.emit(this.item);
}
```
#### Child Template
```
<img src="{{itemImageUrl}}" [style.display]="displayNone">
<span [style.text-decoration]="lineThrough">{{ item.name }}
</span>
<button (click)="delete()">Delete</button>
```

#### Parent Component

```
deleteItem(item) {
  // do stuff with item
}
```

#### Parent Template
```
<app-item-detail (deleteRequest)="deleteItem($event)" [item]="currentItem"></app-item-detail>
```

### Two Way Data Binding

Two-way binding gives components in your application a way to share data. 

Use two-way binding to listen for events and update values simultaneously between parent and child components.

Two-way binding combines property binding with event binding:

* Property binding sets a specific element property.
* Event binding listens for an element change event.

Angular's two-way binding syntax is a combination of square brackets and parentheses, [()]. 

The [()] syntax combines the brackets of property binding, [], with the parentheses of event binding, (), as follows.

There’s one directive in Angular >= 2.x that implements two-way data binding: ngModel.

```
<input [(ngModel)]="username">
<p>Hello {{username}}!</p>
```

If we take a look at the source code, we’ll notice that ngModel actually comes with a property and event binding as well. 

The property binding part of [ngModel] takes care of updating the underlying input DOM element.

The event binding part of (ngModel) takes care of catching the (ngModelChange) event and notifies the outside world when there was a change in the DOM. 

To further understand this, we can divide ngModel into two parts.

```
<input [ngModel]="username" (ngModelChange)="username = $event">

<p>Hello {{username}}!</p>
```

$event is the payload of the emitted event. 
In other words, ngModelChange takes care of extracting target.value from the inner $event payload, and simply emits that

Last but not least, since writing username and ngModel twice is still too much, Angular allows the shorthand syntax using [()].

## Lifecycle Hooks

## Directives

## Pipes

## Services & Dependency Injection

## Routing

## Forms
### Template Driven Forms
### Reactive Forms

## HTTP Module

## Feature Modules & Lazy Loading
````
