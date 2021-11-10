# Angular Notes

## Components
Components are the main building block for Angular applications. Each component consists of:

* An HTML template that declares what renders on the page
* A Typescript class that defines behavior
* A CSS selector that defines how the component is used in a template
* Optionally, CSS styles applied to the template

Every component is a class with a @Component decorator.
The base syntax should look like this:

@Component({
  selector: 'app-component-overview',
  templateUrl: './component-overview.component.html',
  styleUrls: ['./component-overview.component.css']
})

export class ComponentOverviewComponent {

}

To create a component you can use the CLI command ng generate component path/name-of-component.

## Data Binding
### Property Binding
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
