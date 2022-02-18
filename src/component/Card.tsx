import { Component, ReactNode } from "react";
import { F4x } from "./Frame";
import { boonmotion } from "./Motion";
import Shield from "./Shields";

export class ProjectF4x extends Component<{ repo: string, description: string, sheilds: ReactNode, readme: ReactNode,readme_url:string }> {
    render(): ReactNode {
        return (
            <F4x>
                <div className='flex w-full h-full'>
                    <div className='w-3/4 h-full bg-indigo-700/90 border-r-4 border-slate-900'>
                        <div className='flex m-5'>
                            <div className='text-3xl text-white'>
                                <boonmotion.FaceUp>
                                    <boonmotion.Print viewport={true}>
                                        <boonmotion.Glitch text={this.props.repo} hover={true} color='rgb(67 56 202)' />
                                    </boonmotion.Print>
                                </boonmotion.FaceUp>
                                <div className='auto-sm'>
                                    <boonmotion.Print viewport={true} multiline={true} limit={150}>
                                        {this.props.description}
                                    </boonmotion.Print>
                                </div>
                            </div>
                        </div>
                        <div className='flex m-5'>
                            <div className='button-span'>
                                <a href={`https://github.com/boon4681/${this.props.repo}`} target='_blank'>
                                    <div className='text'>GITHUB</div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='w-3/6 h-full flex flex-col relative text-gray-800'>
                        <div className='flex flex-col bg-white'>
                            <div className='shields p-2'>
                                {this.props.sheilds}
                            </div>
                            <div className='p-3 pt-2'>
                                {this.props.readme}
                            </div>
                        </div>
                        <div className='px-2 py-1 mt-auto ml-auto auto-sm hover:underline'>
                            <a href={this.props.readme_url} target='_blank'>
                                readme.md
                            </a>
                        </div>
                    </div>
                </div>
            </F4x>
        )
    }
}