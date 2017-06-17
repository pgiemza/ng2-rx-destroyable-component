# ng2-rx-destroyable-component

Small package with decorators and helpers which helps in managing RxJS unsubscription in easy manner (not annoying) in Angular world :)

## Installation

```
npm i --save ng2-rx-destroyable-component
```

## Demo

<pre>
...
import { DestroyableComponent, componentDestroyed } from 'ng2-rx-destroyable-component';

<b>@DestroyableComponent</b>
@Component({
  selector: 'demo',
  templateUrl: './demo.component.html'
})
export class DemoComponent implements OnInit {

  ngOnInit() {
    Observable.interval(1000)
      .takeUntil(<b>componentDestroyed(this)</b>)
      .subscribe(val => console.log('Demo value: ', val));
  }
  
}
</pre>

As you can see we should only decorate our component by `@DestroyableComponent` and after then we are able to use combined `componentDestroyed` helper with `takeUntil` operator

> `takeUntil`
>> Returns the values from the source observable sequence until the other observable sequence or Promise produces a value.


## More information about problem and solution

[https://medium.com/pawel_giemza/the-seamless-way-to-unsubscribe-from-observables-in-angular-f59c39d9ed6c](https://medium.com/@pawel_giemza/the-seamless-way-to-unsubscribe-from-observables-in-angular-f59c39d9ed6c)