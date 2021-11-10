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
### Two Way Data Binding

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
