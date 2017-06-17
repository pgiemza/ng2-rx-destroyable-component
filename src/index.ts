import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

const DESTROYED_NOTIFIER_NAME = '_componentDestroyedNotifier$';

export function DestroyableComponent(target: any) {

    const targetPrototype = target.prototype;
    const originOnDestroy = targetPrototype.ngOnDestroy;

    targetPrototype[DESTROYED_NOTIFIER_NAME] = new Subject<boolean>();

    targetPrototype.ngOnDestroy = function () {
        originOnDestroy && originOnDestroy();

        targetPrototype[DESTROYED_NOTIFIER_NAME].next(true);
        targetPrototype[DESTROYED_NOTIFIER_NAME].complete();
    }

}

export function componentDestroyed(target: any): Observable<any> {
    return target[DESTROYED_NOTIFIER_NAME];
}
