import { Component, ReactNode } from "react";

export default class Shield extends Component<{repo:string,type:'license'|'npm'|'pypi',more?:string}>{
    type = () =>{
        switch(this.props.type){
            case 'license':
                return `https://img.shields.io/github/license/boon4681/${this.props.repo}?style=flat-square`
            case 'npm':
                return `https://img.shields.io/npm/v/${this.props.repo}?style=flat-square`
            case 'pypi':
                return `https://img.shields.io/pypi/v/${this.props.repo}?style=flat-square`
            default:
                return ``
        }
    }
    render(): ReactNode {
        return (
            <img src={`${this.type()}&${this.props.more}`} alt="" />
        )
    }
}