class Stack<Type> {
    private items: Array<Type> = [];

    push(x: Type): void{
        this.items.push(x);
    }

    pop(): Type | null{
        if(this.isEmpty()){
            return null;
        }

        const lastPopItem = this.items.pop(); 
        return lastPopItem === undefined ? null : lastPopItem;

        
    }

    peek(): Type | null {
        if(this.isEmpty()){
            return null;
        }
        
        const lastPeekItem = this.items[this.size()-1];
        return lastPeekItem === undefined ? null : lastPeekItem;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void{
        this.items = [];
    }


     isEmpty(): boolean { 
        if(this.size() === 0){
            return true
        }
        return false
    }
}


let myStack: Stack<string> = new Stack<string>();


myStack.push("Hello World!");
console.log(myStack.peek());
myStack.push("Erase");
console.log(myStack.pop());

