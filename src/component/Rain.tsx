import React, { createContext } from "react";
/*  Base on
 *  Query UI plugin for raindrops on water effect.
 *  https://github.com/d-harel/raindrops.git
 */

type options = {
    count: number,
    color: string,
    waveLength: number,
    waveHeight: number
}

class spring {
    p: number = 0
    v: number = 0
    update() {
        this.v += (-0.1 * this.p - 0.02 * this.v);
        this.p += this.v;
    }
}

export class RainDrop extends React.Component<{ options: options }, { width: number, height: number }>{
    private canvas?: HTMLCanvasElement;
    private springs: spring[] = []
    private rained = false
    private ctx?: CanvasRenderingContext2D

    constructor(props: any) {
        super(props)
        this.state = {
            width: 0,
            height: 0
        }
    }
    assign_canvas = (canvas: HTMLCanvasElement) => {
        this.canvas = canvas
    }
    update = (spread: number) => {
        let leftDeltas: any[] = []
        let rightDeltas: any[] = []
        for (let i = 0; i < this.props.options.waveLength; i++) {
            this.springs[i].update();
        }
        for (let t = 0; t < 8; t++) {
            for (let i = 0; i < this.props.options.waveLength; i++) {
                if (i > 0) {
                    leftDeltas[i] = spread * (this.springs[i].p - this.springs[i - 1].p);
                    this.springs[i - 1].v += leftDeltas[i];
                }
                if (i < this.props.options.waveLength - 1) {
                    rightDeltas[i] = spread * (this.springs[i].p - this.springs[i + 1].p);
                    this.springs[i + 1].v += rightDeltas[i];
                }
            }
            for (let i = 0; i < this.props.options.waveLength; i++) {
                if (i > 0)
                    this.springs[i - 1].p += leftDeltas[i];
                if (i < this.props.options.waveLength - 1)
                    this.springs[i + 1].p += rightDeltas[i];
            }
        }
    }
    renderWaves = () => {
        if (!this.canvas) return;
        const ctx = this.ctx as CanvasRenderingContext2D
        ctx.beginPath();
        ctx.moveTo(0, this.state.height);
        for (let i = 0; i < this.props.options.waveLength; i++) {
            ctx.lineTo(i * (this.state.width / this.props.options.waveLength), (this.state.height / 3) + this.springs[i].p);
        }
        ctx.lineTo(this.state.width, this.state.height);
        ctx.fill();
    }
    windowUpdate = () => {
        if (!this.canvas) return
        const box = this.canvas.parentElement?.getBoundingClientRect()
        this.setState({ width: (box?.width || 0)+3, height: box?.height || 0 })
    }
    raining = () => {
        if (!this.canvas) return;
        const ctx = this.ctx as CanvasRenderingContext2D
        ctx.fillStyle = this.props.options.color
        if ((Math.random() * 100) < this.props.options.count)
            this.springs[Math.floor(Math.random() * this.props.options.waveLength)].p = this.props.options.waveHeight;
            this.springs[0].p = this.props.options.waveHeight
            this.springs[this.springs.length-1].p = this.props.options.waveHeight
        ctx.clearRect(0, 0, this.state.width, this.state.height);
        this.update(0.1);
        this.renderWaves();
        if (this.rained) requestAnimationFrame(this.raining)
    }
    componentDidMount() {
        if (!this.canvas) return
        this.ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D
        this.windowUpdate()
        this.rained = true
        this.springs = [];
        for (var i = 0; i < this.props.options.waveLength; i++) {
            this.springs[i] = new spring();
        }
        this.raining()
        window.addEventListener('resize', this.windowUpdate)
    }
    componentWillUnmount() {
        this.rained = false
        window.removeEventListener('resize', this.windowUpdate)
    }
    render(): React.ReactNode {
        return (
            <div className="w-full h-full overflow-x-hidden pointer-events-none">
                <canvas width={this.state.width} height={this.state.height} ref={this.assign_canvas}></canvas>
            </div>
        )
    }
}


export class Rain extends React.Component<{color?:string},{rainID:number}> {
    private style = document.createElement('style')
    //@ts-ignore
    private rainID = rainID
    constructor(props: any) {
        super(props)
        this.state = {
            rainID: this.rainID
        }
    }
    componentDidMount() {
        let sty = ''
        //@ts-ignore
        this.rainID = rainID
        this.setState({rainID:this.rainID})
        for (let u = this.rainID; u < this.rainID + 30; u++) {
            sty += `.rain${u}{left:${Math.round(Math.random() * 100)}%;animation-delay:${Math.random()}s;animation-duration: ${Math.random() + 0.3}s;}`
        }
        this.style.textContent = sty + `.e${Math.floor(this.rainID/30)}rain{position:absolute;background-color:${this.props.color||'black'}}`
        this.style.type = "text/css"
        document.head.appendChild(this.style)
        //@ts-ignore
        rainID += 30
    }
    componentWillUnmount() {
        this.style.remove()
        //@ts-ignore
        rainID -= 30
    }
    render(): React.ReactNode {
        return (
            <div className="overflow-hidden w-full h-full absolute -top-4">
                {
                    new Array(20).fill(1).map((a, i) => {
                        return <div key={a+i+'rain'} className={`rain e${Math.floor(this.rainID/30)}rain rain${i+this.state.rainID} drop`}></div>
                    })
                }
            </div>
        )
    }
}