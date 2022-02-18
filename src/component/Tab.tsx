import React, { ReactElement, ReactNode } from "react";
import ReactDOM from "react-dom";


export class Tab extends React.Component<{bg?:string,color?:string}, { children: ReactElement[]|null }>{
    constructor(props: any) {
        super(props)
        this.state = {
            'children': null,
        }
    }
    componentDidMount() {
        if (!this.props.children) return;
        const Inner = React.Children.toArray(this.props.children).map(a => a as ReactElement).filter(a => a.type == TabInner)
        this.setState({ children: Inner })
    }
    render(): React.ReactNode {
        return (
            <div className="Tabs" style={{color:this.props.color}}>
                <div className="Tabs-group">
                    {this.state.children?.map((a,i)=>(
                        <div key={i+a.type.toString()} className="Tab" style={{background:this.props.bg}}>
                            {a.props.name}
                        </div>
                    ))}
                </div>
                <div className="Tabs-Inner-group" style={{background:this.props.bg}}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export class TabInner extends React.Component<{ name: string }, {}>{
    render(): React.ReactNode {
        return (
            <div className="Tab-Inner">
                {this.props.children}
            </div>
        )
    }
}
