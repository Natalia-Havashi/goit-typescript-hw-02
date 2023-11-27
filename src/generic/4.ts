/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface ComponentP {
    title: string;
}
class Component<T> {
    constructor(public props: T) {}
}

interface PageP extends ComponentP {
    title: string;
}

class Page extends Component<ComponentP> {
    pageInfo() {
        console.log(this.props.title);
    }
}

export {};
