import React, { useRef } from "react"
import Typed from 'typed.js';

export class Censor extends React.Component<{ text: string, onWeee?: () => any, show: boolean }, { box: any, space: any }>{
    private ref?: HTMLDivElement
    assign_ref = (ref: HTMLDivElement) => this.ref = ref
    constructor(props: any) {
        super(props)
        this.state = {
            'box': {},
            'space': {}
        }
    }
    componentDidMount() {
        if (!this.ref) return;
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        ctx.font = window.getComputedStyle(this.ref || this.ref, null).getPropertyValue('font')
        const box = ctx.measureText(this.props.text)
        const space = ctx.measureText(' ')
        this.setState({ box, space }, () => {
            if (this.props.onWeee) this.props.onWeee()
        })
    }
    render(): React.ReactNode {
        if(!this.props.show)
        return (
            <div
                ref={this.assign_ref}
                className={`censored inline-block relative whitespace-pre`}
                style={{
                    'width': this.state.box?.width,
                    'height': this.state.box?.fontBoundingBoxAscent + this.state.box?.fontBoundingBoxDescent || 1,
                    'transform': `translateY(${(this.state.box?.fontBoundingBoxAscent + this.state.box?.fontBoundingBoxDescent) / 4}px)`
                }}>
                {new Array(Math.floor(this.state.box?.width / this.state.space?.width + 1 || 0)).fill(' ')}
            </div>
        )
        return (
            <div ref={this.assign_ref} className={`inline-block relative`}>
                {this.props.text}
            </div>
        )
    }
}

export class PrintCensor extends React.Component<{ text: string, show: boolean }>{
    private ref?: HTMLDivElement
    private printer: any
    private text: string = ''
    assign_ref = (ref: HTMLDivElement) => this.ref = ref
    print = () => {
        if (!this.ref) return;
        this.text = ((' ' + this.ref.innerText).slice(1) || '').replaceAll(' ', '&nbsp;')
        this.ref.innerText = ''
        console.log(this.text.length)
        //@ts-ignore
        this.printer = new Typed(this.ref, {
            strings: [this.text],
            typeSpeed: 20,
            backSpeed: 0,
            backDelay: 500,
            startDelay: 1000,
            cursorChar: '<div style="position:absolute">_</div>',
            loop: false
        })
        document.oncopy = this.copy
    }
    copy(e: ClipboardEvent) {
        const ele = window.getSelection()?.getRangeAt(0).cloneContents()
        const a = ele?.querySelectorAll('div.censored')
        if (a)
            a.forEach(e => {
                e.textContent = '<censored>'
            });
        console.log(ele?.textContent)
        e.clipboardData?.setData('text/plain', ele?.textContent || '')
        e.preventDefault()
    }
    componentWillUnmount() {
        this.printer.destroy()
        document.oncopy = null
    }
    render(): React.ReactNode {
        return (
            <div
                ref={this.assign_ref} className={`${this.props.show?'':'censored inline-block relative whitespace-pre'}`}>
                <Censor text={this.props.text} onWeee={this.print} show={this.props.show} />
            </div>
        )
    }
}