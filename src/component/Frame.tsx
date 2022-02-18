import { Component, ReactNode } from "react";


export class F4x extends Component{
    render(): ReactNode {
        return (
            <div className="Frame rounded-md bg-slate-50 w-full max-w-md h-80 inline-block overflow-hidden">
                {this.props.children}
            </div>
        )
    }
}
export class F2x extends Component{
    render(): ReactNode {
        return (
            <div className="Frame rounded-md bg-slate-50 w-full max-w-xs h-60 inline-block overflow-hidden">
                {this.props.children}
            </div>
        )
    }
}

export class F1x extends Component{
    render(): ReactNode {
        return (
            <div className="Frame rounded-md bg-slate-50 w-60 h-48 inline-block overflow-hidden">
                {this.props.children}
            </div>
        )
    }
}