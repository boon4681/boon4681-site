import { motion } from "framer-motion";
import React from "react";
import logo4x from '../assets/image/logo@4x.png'

export default class Logo4x extends React.Component<{}, { p1: number[] }> {
    private logo?: HTMLDivElement
    assign_logo = (logo: HTMLDivElement) => this.logo = logo

    constructor(props: any) {
        super(props)
        this.state = {
            p1: [0, 0]
        }
    }
    sqrt(i:number){
        return Math.sqrt(i**2+1)
        return Math.abs(i) + (1)/(2*Math.abs(i)+1)
    }
    update = (e: MouseEvent) => {
        if (this.logo) {
            const box = this.logo.getBoundingClientRect()
            let m = (box.y + box.height / 2 - (e.y)) / (box.x + box.width / 2 - (e.x))
            let x2 = 50 / (this.sqrt(m)) * ((e.x < box.x + box.width / 2) ? 1 : -1)
            let y2 = m * x2
            this.setState({ p1: [x2, y2] })
        }
    }
    componentDidMount() {
        document.addEventListener('mousemove', this.update)
    }
    componentWillUnmount() {
        document.addEventListener('mousemove', this.update)
    }
    render(): React.ReactNode {
        return (
            <motion.div
                initial={{ 'transform': 'translateY(-2000px)' }}
                animate={{ 'transform': 'translateY(0px)' }}
                transition={{ 'delay': 0.5, 'duration': 1, 'type': 'spring',bounce:0.2 }}
                ref={this.assign_logo}
                className='flex justify-center items-center relative z-10'>
                <div className='rounded-full absolute' style={{ 'boxShadow': '0px 0px 100px 50px #fdf6dc' }}></div>
                <div className='rounded-full absolute' style={{ 'boxShadow': `${this.state.p1[0]}px ${this.state.p1[1]}px 100px 50px #d76b4e` }}></div>
                <div className='rounded-full absolute' style={{ 'boxShadow': `${-this.state.p1[0]}px ${-this.state.p1[1]}px 100px 60px #8b8678` }}></div>
                {/* <div className='rounded-full absolute' style={{ 'boxShadow': `${this.state.p1[0]}px ${this.state.p1[1]}px 0px 100px #d76b4e` }}></div>
                <div className='rounded-full absolute' style={{ 'boxShadow': `${-this.state.p1[0]}px ${-this.state.p1[1]}px 0px 100px #8b8678` }}></div> */}
                {/* <div className='rounded-full absolute' style={{ 'boxShadow': '0px 50px 100px 60px #8b8678' }}></div> */}
                <img className='w-48 h-48 relative' src={logo4x} alt="logo4x" />
            </motion.div>
        )
    }
}