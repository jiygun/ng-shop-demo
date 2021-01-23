import { ComponentFactoryResolver, ApplicationRef, Injector, EmbeddedViewRef } from "@angular/core";
import { BlockComponent } from "./block.component";

export class BlockGenerator{
    private _createdBlock!:HTMLElement;

    constructor(private applicationRef: ApplicationRef,private injector: Injector,private componentFactoryResolver:ComponentFactoryResolver){
        this.createBlock();
    }
    private createBlock(){
        const componentRef = this.componentFactoryResolver.resolveComponentFactory(BlockComponent).create(this.injector);    
        this.applicationRef.attachView(componentRef.hostView);
        this._createdBlock = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;    
        document.body.appendChild(this._createdBlock);
    }
    deleteBlock(){
        document.body.removeChild(this._createdBlock);
    }
}